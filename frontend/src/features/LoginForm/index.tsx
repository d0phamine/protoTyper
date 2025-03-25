import { errorToastOptions, successToastOptions } from "@/hooks"

import { FC } from "react"
import { IoLogoGoogle } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { Slide, toast } from "react-toastify"

import { ArrowRightToSquare } from "@gravity-ui/icons"

import { Form, Formik } from "formik"
import * as Yup from "yup"

import { UserCredentials } from "@/types/processes"

import { useLoginUserMutation } from "@/api"

import { CustomButton, CustomDivider, CustomInput } from "@/components"

import "./index.scss"

export const LoginForm: FC = () => {
	const [loginUser, { error }] = useLoginUserMutation()
	const navigate = useNavigate()

	return (
		<Formik
			initialValues={{ username: "", password: "" }}
			validationSchema={Yup.object().shape({
				username: Yup.string().required("Username is required"),
				password: Yup.string().required("Password is required"),
			})}
			onSubmit={async ({ ...userData }, { setSubmitting }) => {
				console.log(userData, "values")
				const credentials: UserCredentials = {
					username: userData.username,
					password: userData.password,
				}

				const toastId = toast.loading("Providing sign in", {
					transition: Slide,
				})

				try {
					await loginUser(credentials).unwrap()
					toast.update(toastId, {
						...successToastOptions,
						render: "Successfully signed in ✌️",
						isLoading: false,
					})
					console.log(error)
				} catch {
					console.log(error)
					toast.update(toastId, {
						...errorToastOptions,
						render: `${error}`,
						isLoading: false,
					})
				} finally {
					setSubmitting(false)
					navigate("/")
				}
			}}
		>
			{(props) => {
				const {
					values,
					handleSubmit,
					handleChange,
					errors,
					touched,
					isSubmitting,
				} = props
				return (
					<Form>
						<div className="login-wrapper">
							<div className="login-wrapper__header">
								<ArrowRightToSquare />
								<p>login</p>
							</div>
							<div className="login-wrapper__form">
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
							</div>
							<CustomButton
								icon={<ArrowRightToSquare />}
								size="large"
								text="sign in"
								disabled={
									isSubmitting ||
									Object.keys(errors).length > 0
								}
								block
								onClick={handleSubmit}
							/>
							<CustomDivider content="or" />
							<CustomButton icon={<IoLogoGoogle />} size="large" block/>
						</div>
					</Form>
				)
			}}
		</Formik>
	)
}
