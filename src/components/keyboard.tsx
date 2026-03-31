"use client"

import { ChangeEvent, useEffect, useState } from "react"
import { CommandModal } from "./commandline"
// import { useRouter } from "next/navigation"

export function KeyboardNav() {
	const [isOpen, setIsOpen] = useState(false)
	const [value, setValue] = useState(":")

	useEffect(() => {
		function handleKey(e: KeyboardEvent) {
			if (e.key === ":") {
				e.preventDefault()
				setIsOpen(true)
			}
		}

		window.addEventListener("keydown", handleKey)
		return () => window.removeEventListener("keydown", handleKey)
	}, [])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value == "") {
			setIsOpen(false)
			setValue(":");
		} else {
			setValue(e.target.value);
		}
	}

	return <CommandModal
		isOpen={isOpen}
		value={value}
		onChangeHandler={handleChange}
		onClose={() => {
			setIsOpen(false);
			setValue(":");
		}} />
}
