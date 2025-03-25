import { errorToastOptions, successToastOptions } from "@/hooks"

import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Slide, toast } from "react-toastify"

import { PersonPlus } from "@gravity-ui/icons"

import { Form, Formik } from "formik"
import * as Yup from "yup"

import { UserCredentials } from "@/types/processes"

import { useRegisterUserMutation } from "@/api"

import { CustomButton, CustomInput } from "@/components"

import "./index.scss"

export const RegistrationForm: FC = () => {
	const [registerUser, { error }] = useRegisterUserMutation()
	const navigate = useNavigate()

	return (
		<Formik
			initialValues={{ username: "", password: "", confirmPassword: "" }}
			validationSchema={Yup.object().shape({
				username: Yup.string().required(),
				password: Yup.string().min(8).required("Password is required"),
				confirmPassword: Yup.string()
					.oneOf([Yup.ref("password"), ""], "Passwords must match")
					.required("Confirm Password is required"),
			})}
			onSubmit={async ({ ...userData }, { setSubmitting }) => {
				console.log(userData)
				const credentials: UserCredentials = {
					username: userData.username,
					password: userData.password,
				}
				const toastId = toast.loading("Providing registration...", {
					transition: Slide,
				})
				try {
					await registerUser(credentials).unwrap()
					toast.update(toastId, {
						...successToastOptions,
						render: "Successfully registered ✌️",
						isLoading: false,
					})
				} catch {
					console.log(error)
					toast.update(toastId, {
						...errorToastOptions,
						render: `${error}`,
						isLoading: false,
					}) // ✅ Показываем ошибку
				} finally {
					setSubmitting(false)
					navigate("/")
				}
			}}
		>
			{(props) => {
				const {
					values,
					handleChange,
					errors,
					touched,
					isSubmitting,
					handleSubmit,
				} = props
				return (
					<Form>
						<div className="registration-wrapper">
							<div className="registration-wrapper__header">
								<PersonPlus />
								<p>registration</p>
							</div>
							<div className="registration-wrapper__form">
								<CustomInput
									placeholder="username"
									name="username"
									hasClear
									value={values.username}
									validationState={
										touched.username && errors.username
											? "error"
											: undefined
									}
									onChange={handleChange}
								/>
								{touched.username && errors.username ? (
									<p className="form-error">
										{errors.username}
									</p>
								) : null}
								<CustomInput
									placeholder="password"
									name="password"
									onChange={handleChange}
									value={values.password}
									hasClear
									type="password"
									validationState={
										touched.password && errors.password
											? "error"
											: undefined
									}
								/>
								{touched.password && errors.password ? (
									<p className="form-error">
										{errors.password}
									</p>
								) : null}
								<CustomInput
									placeholder="confirm password"
									name="confirmPassword"
									onChange={handleChange}
									value={values.confirmPassword}
									hasClear
									type="password"
									validationState={
										touched.confirmPassword &&
										errors.confirmPassword
											? "error"
											: undefined
									}
								/>
								{touched.confirmPassword &&
								errors.confirmPassword ? (
									<p className="form-error">
										{errors.confirmPassword}
									</p>
								) : null}
							</div>
							<CustomButton
								icon={<PersonPlus />}
								size="large"
								text="sign up"
								disabled={
									isSubmitting ||
									Object.keys(errors).length > 0
								}
								block
								onClick={handleSubmit}
							/>
						</div>
					</Form>
				)
			}}
		</Formik>
	)
}
