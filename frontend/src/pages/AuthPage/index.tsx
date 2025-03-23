import { FC } from "react"

import { LoginForm, RegistrationForm } from "@/features"

import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const AuthPage: FC = () => {
	return (
		<MainLayout>
			<div className="auth-page full-width">
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

