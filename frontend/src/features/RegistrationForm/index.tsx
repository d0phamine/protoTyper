import { FC } from "react"

import { PersonPlus } from "@gravity-ui/icons"

import { CustomButton, CustomInput } from "@/components"
import { Form, Formik, FormikValues } from "formik"
import * as Yup from "yup"

import "./index.scss"

export const RegistrationForm: FC = () => {
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
			onSubmit={(values: FormikValues, { setSubmitting }) => {
				console.log(values, "values")
				setSubmitting(false)
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
											? "username is required"
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
											? "Password must be at least 8 characters"
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
											? "Passwords must match"
											: undefined
									}
								/>
							</div>
							<CustomButton
								icon={<PersonPlus />}
								size="l"
								text="register"
								disabled={
									isSubmitting ||
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

