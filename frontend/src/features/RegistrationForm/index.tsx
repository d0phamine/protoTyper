import { errorToastOptions, successToastOptions } from "@/hooks"
import { Form, Formik } from "formik"
import * as Yup from "yup"

import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Slide, toast } from "react-toastify"

import { PersonPlus } from "@gravity-ui/icons"

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
					navigate("/")
					setSubmitting(false)
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
									size="l"
									value={values.username}
									validationState={
										touched.username && errors.username
											? "invalid"
											: undefined
									}
									errorMessage={
										touched.username && errors.username
											? errors.username
											: undefined
									}
									onChange={handleChange}
								/>
								<CustomInput
									placeholder="password"
									name="password"
									onChange={handleChange}
									value={values.password}
									hasClear
									type="password"
									size="l"
									validationState={
										touched.password && errors.password
											? "invalid"
											: undefined
									}
									errorMessage={
										touched.password && errors.password
											? errors.password
											: undefined
									}
								/>
								<CustomInput
									placeholder="confirm password"
									name="confirmPassword"
									onChange={handleChange}
									value={values.confirmPassword}
									hasClear
									type="password"
									size="l"
									validationState={
										touched.confirmPassword &&
										errors.confirmPassword
											? "invalid"
											: undefined
									}
									errorMessage={
										touched.confirmPassword &&
										errors.confirmPassword
											? errors.confirmPassword
											: undefined
									}
								/>
							</div>
							<CustomButton
								icon={<PersonPlus />}
								size="l"
								text="register"
								disabled={
									isSubmitting &&
									Object.keys(errors).length > 0
								}
								onClick={handleSubmit}
							/>
						</div>
					</Form>
				)
			}}
		</Formik>
	)
}
