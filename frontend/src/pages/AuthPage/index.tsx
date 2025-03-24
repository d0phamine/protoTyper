import { LoginForm, RegistrationForm } from "@/features"

import { FC } from "react"

import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const AuthPage: FC = () => {
	return (
		<MainLayout>
			<div className="auth-page content">
				<div className="auth-page__registration-block">
					<RegistrationForm />
				</div>
				<div></div>
				<div className="auth-page__login-block">
					<LoginForm />
				</div>
			</div>
		</MainLayout>
	)
}
