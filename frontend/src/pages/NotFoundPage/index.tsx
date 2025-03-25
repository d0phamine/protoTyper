import { FC } from "react"

import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const NotFoundPage: FC = () => {
	return (
		<MainLayout>
			<div className="not-found-page content">
				<svg
					width="220px"
					height="220px"
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g fill="var(--sub-alt-color)">
						<path d="m 8.167969 3.007812 c -0.4375 -0.023437 -0.882813 0.046876 -1.300781 0.222657 c -1.117188 0.460937 -1.851563 1.558593 -1.851563 2.769531 h 2 c 0 -0.40625 0.242187 -0.769531 0.617187 -0.925781 c 0.375 -0.152344 0.800782 -0.070313 1.089844 0.21875 c 0.289063 0.289062 0.371094 0.714843 0.21875 1.089843 c -0.15625 0.375 -0.519531 0.617188 -0.925781 0.617188 c -0.550781 0 -1 0.449219 -1 1 v 2 h 2 v -1.179688 c 0.785156 -0.28125 1.441406 -0.875 1.773437 -1.671874 c 0.460938 -1.117188 0.203126 -2.414063 -0.652343 -3.269532 c -0.535157 -0.535156 -1.242188 -0.835937 -1.96875 -0.871094 z m -0.152344 7.992188 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0" />
						<path
							d="m 12 1 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 1.292969 1.292969 h -0.941407 c 0.34375 0.582031 0.527344 1.242188 0.53125 1.910156 c -0.003906 0.03125 -0.007812 0.058594 -0.011719 0.089844 h 0.421876 l -0.460938 0.457031 c -0.113281 0.757813 -0.460938 1.464844 -0.992188 2.035157 c 0.042969 0.078124 0.09375 0.148437 0.160157 0.214843 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 3 -3 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -3 -3 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m -7.574219 3.183594 c -0.257812 0.179687 -0.425781 0.480468 -0.425781 0.816406 c 0 0.105469 0.019531 0.203125 0.050781 0.300781 c 0.066407 -0.390625 0.191407 -0.765625 0.375 -1.117187 z m -0.425781 2.816406 c -0.257812 0 -0.511719 0.097656 -0.707031 0.292969 l -3 3 c -0.3906252 0.390625 -0.3906252 1.023437 0 1.414062 l 3 3 c 0.1875 0.1875 0.441406 0.292969 0.707031 0.292969 s 0.519531 -0.105469 0.707031 -0.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -1.292969 -1.292969 h 2.585938 v -2 h -2.585938 l 1.292969 -1.292969 c 0.097657 -0.097656 0.171875 -0.214843 0.21875 -0.339843 c -0.339843 -0.398438 -0.597656 -0.855469 -0.753906 -1.351563 c -0.058594 -0.011719 -0.113281 -0.015625 -0.171875 -0.015625 z m 6 3 v 2 h 1 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0"
							fillOpacity="0.44902"
						/>
					</g>
				</svg>

				<div className="not-found-page__text">
					<h1>404</h1>
					<p>
						We couldn't find the page you're looking for. This could
						happen for a number of reasons: the link might be
						broken, the page might have been removed or moved.
						<br></br>But don't worry, we're here to help!
					</p>
				</div>
			</div>
		</MainLayout>
	)
}
