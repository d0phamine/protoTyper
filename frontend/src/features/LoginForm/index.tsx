import { FC } from "react"
import { IoLogoGoogle } from "react-icons/io5"
import { Slide, toast } from "react-toastify"

import { ArrowRightToSquare } from "@gravity-ui/icons"

import { Form, Formik } from "formik"
import * as Yup from "yup"

import { CustomButton, CustomDivider, CustomInput } from "@/components"

import "./index.scss"
import { UserCredentials } from "@/types/processes"
import { useLoginUserMutation } from "@/api"
import { useNavigate } from "react-router-dom"
import { errorToastOptions, successToastOptions } from "@/hooks"

export const LoginForm: FC = () => {
	const [loginUser, {error}] = useLoginUserMutation()
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
				const credentials:UserCredentials = {
					username: userData.username,
					password: userData.password
				}

				const toastId = toast.loading("Providing sign in", {
					transition: Slide,
				})

				try {
					await loginUser(credentials)
					toast.update(toastId, {
						...successToastOptions,
						render: "Successfully signed in ✌️",
						isLoading: false,
					})
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
							</div>
							<CustomButton
								icon={<ArrowRightToSquare />}
								size="l"
								text="sign in"
								disabled={
									isSubmitting &&
									Object.keys(errors).length > 0
								}
								onClick={handleSubmit}
							/>
							<CustomDivider content="or" />
							<CustomButton icon={<IoLogoGoogle />} size="l" />
						</div>
					</Form>
				)
			}}
		</Formik>
	)
}
