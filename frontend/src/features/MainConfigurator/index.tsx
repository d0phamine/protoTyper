import { FC } from "react"

import {
	At,
	CircleLetterA,
	Ghost,
	Keyboard,
	QuoteClose,
	SquareHashtag,
} from "@gravity-ui/icons"

import { SubButton } from "@/components"

import "./index.scss"

export const MainConfigurator: FC = () => {
	return (
		<div className="main-configurator">
			<div className="main-configurator__addictions">
				<SubButton title={"punctuation"} icon={<At />} setActive />
				<SubButton
					title={"numbers"}
					icon={<SquareHashtag />}
					setActive
				/>
			</div>
			<div className="main-configurator__spacer"></div>
			<div className="main-configurator__text-mode">
				<SubButton title={"words"} icon={<CircleLetterA />} setActive />
				<SubButton title={"quote"} icon={<QuoteClose />} setActive />
				<SubButton title={"zen"} icon={<Ghost />} setActive />
			</div>
			<div className="main-configurator__spacer"></div>
			<SubButton
				title={""}
				icon={<Keyboard />}
				style={{ gap: 0 }}
				setActive
			/>
		</div>
	)
}
