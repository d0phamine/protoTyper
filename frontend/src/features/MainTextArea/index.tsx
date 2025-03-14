import { FC, useEffect, useRef } from "react"

import useTypingGame from "react-typing-game-hook"

import "./index.scss"

export const MainTextArea: FC = () => {
	const text =
		"i'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best"

	const words = text.split(/(\s)/)
	const {
		states: { charsState, currIndex },
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

	const caretRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const caret = caretRef.current;
		const activeLetter = document.querySelector(".letter.active");
	
		if (caret && activeLetter) {
			const target = activeLetter as HTMLElement;
			const params = target.getBoundingClientRect();
	
			if (params.height !== 0) {
				caret.style.left = `${params.x + 16}px`;
				caret.style.top = `${params.y}px`;
			} else {
				caret.style.left = `${params.x + 16}px`;
				caret.style.top = `${params.y - 4}px`;
			}
		} else if (caret) {
			caret.style.left = "0px";
			caret.style.top = "0px";
		}
	}, [currIndex]);

	let counter = 0

	return (
		<div className="main-text-area">
			<div
				className="main-text-area__text"
				tabIndex={0}
				onKeyDown={handleKeyDown}
			>
				<div className="text-caret" ref={caretRef}></div>
				{words.map((word: string, wordIndex: number) => {
					return (
						<div key={word + wordIndex} className={`text-word`}>
							{word.split("").map((char: string) => {
								const state = charsState[counter++]
								const isActive = counter === currIndex + 1
								return (
									<span
										key={counter}
										className={`letter ${
											state === 0
												? "incomplete"
												: state === 1
													? "correct"
													: "incorrect"
										} ${isActive ? "active" : ""}`}
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

