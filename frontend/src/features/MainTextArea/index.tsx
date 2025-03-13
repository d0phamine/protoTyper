import { FC } from "react"

import useTypingGame from "react-typing-game-hook"

import "./index.scss"

export const MainTextArea: FC = () => {
	const text =
		"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best"

	const words = text.split(/(\s)/)
	const {
		states: { charsState },
		actions: { insertTyping, resetTyping, deleteTyping },
	} = useTypingGame(text)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		e.preventDefault()
		const key = e.key

		if (key === "Escape") {
			resetTyping()
			return
		}
		if (key === "Backspace") {
			deleteTyping(false)
			return
		}
		if (key.length === 1) {
			insertTyping(key)
		}
	}

	let counter = 0

	return (
		<div className="main-text-area">
			<div
				className="main-text-area__text"
				tabIndex={0}
				onKeyDown={handleKeyDown}
			>
				{words.map((word: string, wordIndex: number) => {
					return (
						<div key={word + wordIndex} className={`text-word`}>
							{word
								.split("")
								.map((char: string, charIndex: number) => {
									const state = charsState[counter++]
									return (
										<span
											key={char + charIndex}
											className={`letter ${
												state === 0
													? "incomplete"
													: state === 1
														? "correct"
														: "incorrect"
											}`}
										>
											{char}
										</span>
									)
								})}
						</div>
					)
				})}
			</div>
		</div>
	)
}

