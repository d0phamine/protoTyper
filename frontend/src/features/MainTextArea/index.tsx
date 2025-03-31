import { FC, useCallback, useEffect, useRef } from "react"
import useTypingGame from "react-typing-game-hook"

import {
	currentStepTextsToDefaultAction,
	goToNextStepTextAction,
	goToStepAction,
	lessonsStoreSelectors,
	setStepResultAction,
	stepResultToDefaultAction,
} from "@/store/LessonsStore"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import "./index.scss"

export const MainTextArea: FC = () => {
	const selector = {
		currentStep: useAppSelector(lessonsStoreSelectors.currentStep),
		currentLesson: useAppSelector(lessonsStoreSelectors.currentLesson),
		currentStepText: useAppSelector(lessonsStoreSelectors.currentStepText),
		currentStepIndex: useAppSelector(
			lessonsStoreSelectors.currentStepIndex,
		),
		currentStepResult: useAppSelector(
			lessonsStoreSelectors.currentStepResult,
		),
	}

	const dispatch = useAppDispatch()

	const text = selector.currentStep?.texts[selector.currentStepText] || ""
	const words = text.split(/(\s)/)

	const goToNextText = useCallback(() => {
		dispatch(goToNextStepTextAction(selector.currentStep?.texts || []))
	}, [selector.currentStep?.texts])

	const {
		states: { charsState, currIndex, phase },
		actions: { insertTyping, resetTyping, deleteTyping },
	} = useTypingGame(text)

	/**
	 * ?This func for logic functionality of MainTextArea
	 */

	const postStepResult = () => {
		console.log(selector.currentStepText, "current result post")
		if (selector.currentStep) {
			dispatch(
				setStepResultAction({
					currStepText: selector.currentStepText + 1,
					countOfTexts: selector.currentStep.texts.length,
				}),
			)
		}
	}

	const controlText = () => {
		if (phase === 2 && selector.currentStep && selector.currentLesson) {
			if (
				selector.currentStepText ===
				selector.currentStep.texts.length - 1
			) {
				console.log("step Finished")
				postStepResult()
				dispatch(stepResultToDefaultAction())
				if (
					selector.currentStepIndex ===
					selector.currentLesson.steps.length - 1
				) {
					console.log("lesson Finished")
				} else {
					dispatch(
						goToStepAction({
							stepIndex: selector.currentStepIndex,
							steps: selector.currentLesson?.steps,
							funcType: "next",
						}),
					)
					dispatch(currentStepTextsToDefaultAction())
				}
			} else {
				console.log("go to next text")
				goToNextText()
				postStepResult()
			}
		}
	}

	useEffect(() => {
		if (phase === 2) {
			controlText()
			// console.log(selector.currentStepResult)
		}
	}, [phase])

	/**
	 * ?End of logic functionality block
	 */

	/**
	 *  !This funcs for render funcitonality of MainTextArea
	 */

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
	const updateCaretPosition = () => {
		const caret = caretRef.current
		const initWord = document.querySelector(".text-word")
		const activeLetter = document.querySelector(".letter.active")

		if (caret && activeLetter && currIndex !== -1) {
			const target = activeLetter as HTMLElement
			const params = target.getBoundingClientRect()

			caret.style.left = `${params.x + params.width}px`
			caret.style.top = `${params.y}px`
		}

		if (caret && initWord && currIndex === -1) {
			const initTarget = initWord as HTMLElement
			const initParams = initTarget.getBoundingClientRect()

			caret.style.left = `${initParams.x}px`
			caret.style.top = `${initParams.y}px`
		}
	}

	useEffect(() => {
		updateCaretPosition()

		window.addEventListener("resize", updateCaretPosition)
		return () => {
			window.removeEventListener("resize", updateCaretPosition)
		}
	}, [currIndex])

	let counter = 0

	/**
	 * ! End of render funcitonality block
	 */

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
