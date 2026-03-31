"use client"

import { redirect, RedirectType } from "next/navigation";
import { ChangeEvent, useEffect, useRef } from "react"

interface CommandModalProps {
	isOpen: boolean
	value: string;
	onClose: () => void
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export function CommandModal({ isOpen, value, onClose, onChangeHandler }: CommandModalProps) {
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (isOpen) {
			inputRef.current?.focus()
		}
	}, [isOpen])

	useEffect(() => {
		function handleEscape(e: KeyboardEvent) {
			if (e.key === "Escape") {
				onClose()
			}
		}

		if (isOpen) {
			window.addEventListener("keydown", handleEscape)
			return () => window.removeEventListener("keydown", handleEscape)
		}
	}, [isOpen, value, onClose])

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<div className="flex flex-row justify-between items-center gap-10 bg-black text-white rounded-xl shadow-lg py-4 px-2 w-3/8 focus:outline-none focus:ring-2 focus:ring-blue-100 border border-white">
				<input
					ref={inputRef}
					type="text"
					// placeholder="Enter command..."
					value={value}
					onChange={onChangeHandler}
					className="text-xl font-semibold font-mono text-white bg-black/5 w-3/4 px-4 py-2 border-none border-0 focus:outline-none"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							const command = e.currentTarget.value;
							console.log("Command:", command)
							onClose()
							processCommand(command);
							// onClose()
						}
						if (e.key === "Escape") {
						}
					}}
				/>
				<div className="w-1/4 text-center">
					Press &lt;Esc&gt; to close
				</div>
			</div>
		</div>
	)
}

function processCommand(command: string) {
	if (command == ":Blog") {
		redirect("/blog", RedirectType.push)
	}
}
