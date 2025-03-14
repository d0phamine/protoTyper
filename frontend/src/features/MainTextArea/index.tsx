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
		const updateCaretPosition = () => {
			const caret = caretRef.current
			const initWord = document.querySelector(".text-word")
			const activeLetter = document.querySelector(".letter.active")

			if (caret && activeLetter && currIndex !== -1) {
				const target = activeLetter as HTMLElement
				const params = target.getBoundingClientRect()

				caret.style.left = `${params.x + 16}px`
				caret.style.top = `${params.y}px`
			}

			if (caret && initWord && currIndex === -1) {
				const initTarget = initWord as HTMLElement
				const initParams = initTarget.getBoundingClientRect()

				caret.style.left = `${initParams.x}px`
				caret.style.top = `${initParams.y}px`
			}
		}

		// Вызываем сразу, чтобы обновить при рендере
		updateCaretPosition()

		// Добавляем слушатель изменения размеров окна
		window.addEventListener("resize", updateCaretPosition)

		// Удаляем слушатель при размонтировании компонента
		return () => {
			window.removeEventListener("resize", updateCaretPosition)
		}
	}, [currIndex])

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

