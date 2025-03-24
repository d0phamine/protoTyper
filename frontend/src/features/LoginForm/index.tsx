import { Formik, FormikValues } from "formik"
import * as Yup from "yup"

import { FC } from "react"

import { ArrowRightToSquare } from "@gravity-ui/icons"

import "./index.scss"

export const LoginForm: FC = () => {
	return (
		<Formik
			initialValues={{ username: "", password: "" }}
			validationSchema={Yup.object().shape({
				username: Yup.string().required("Required"),
			})}
			onSubmit={(values: FormikValues) => {
				console.log(values, "values")
			}}
		>
			{(props) => {
				const { values, handleSubmit, handleChange, errors, touched } =
					props
				return (
					<form>
						<div className="login-wrapper">
							<div className="login-wrapper__header">
								<ArrowRightToSquare />
								<p>Login</p>
							</div>
							<div className="login-wrapper__form"></div>
						</div>
					</form>
				)
			}}
		</Formik>
	)
}
