"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef } from "react"

interface CommandModalProps {
	isOpen: boolean
	isNavigationOpen: boolean
	value: string;
	onClose: () => void
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export function OpenModal({ isOpen, isNavigationOpen, value, onClose, onChangeHandler }: CommandModalProps) {
	if (isOpen) {
		return CommandModal({ isOpen, isNavigationOpen: false, value, onClose, onChangeHandler });
	}

	if (isNavigationOpen) {
		return NavigationModal({ isOpen, isNavigationOpen: false, value, onClose, onChangeHandler });
	}

	return null
}

function NavigationModal({ isOpen, value, onClose, onChangeHandler }: CommandModalProps) {
	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<div className="flex flex-col bg-black text-white rounded-xl shadow-lg py-4 px-6 w-1/2 lg:w-1/3 h-1/2 border border-white overflow-auto">
				<div className="text-xl font-semibold font-mono mb-4">Navigation</div>
				<nav className="space-y-2 h-full flex flex-row justify-center">
					<div className="flex flex-col basis-1/2 gap-2">
						<div className="py-3">
							pages
						</div>
						<div className="text-sm text-gray-300 hover:text-white cursor-pointer flex flex-row">
							<span className="basis-1/10">h</span>
							<span className="basis-1/10">:</span>
							<span className="basis-5/10">go to
								<Link href={"/home"} className="text-blue-500 dark:text-blue-500"> home</Link>
							</span>
						</div>
						<div className="text-sm text-gray-300 hover:text-white cursor-pointer flex flex-row">
							<span className="basis-1/10">b</span>
							<span className="basis-1/10">:</span>
							<span className="basis-5/10">go to
								<Link href={"/blog"} className="text-blue-500 dark:text-blue-500"> blog</Link>
							</span>
						</div>
						<div className="text-sm text-gray-300 hover:text-white cursor-pointer flex flex-row">
							<span className="basis-1/10">a</span>
							<span className="basis-1/10">:</span>
							<span className="basis-5/10">
								<Link href={"/blog"} className="text-blue-500 dark:text-blue-500"> about this website...</Link>
							</span>
						</div>
					</div>
					<div className="flex flex-col basis-1/2 gap-2">
						<div className="py-3">
							common mappings
						</div>
						<div className="text-sm text-gray-300 hover:text-white cursor-pointer flex flex-row">
							<span className="basis-1/10">j</span>
							<span className="basis-1/10">:</span>
							<span className="basis-5/10">scroll down</span>
						</div>
						<div className="text-sm text-gray-300 hover:text-white cursor-pointer flex flex-row">
							<span className="basis-1/10">k</span>
							<span className="basis-1/10">:</span>
							<span className="basis-5/10">scroll up</span>
						</div>
						<div className="text-sm text-gray-300 hover:text-white cursor-pointer flex flex-row">
							<span className="basis-1/10">d</span>
							<span className="basis-1/10">:</span>
							<span className="basis-5/10">page down</span>
						</div>
						<div className="text-sm text-gray-300 hover:text-white cursor-pointer flex flex-row">
							<span className="basis-1/10">u</span>
							<span className="basis-1/10">:</span>
							<span className="basis-5/10">page up</span>
						</div>
					</div>

				</nav>
				<div className="mt-auto text-xs text-gray-400">
					Press &lt;Esc&gt; to close
				</div>
			</div>
		</div>
	)
}

function CommandModal({ isOpen, value, onClose, onChangeHandler }: CommandModalProps) {
	const inputRef = useRef<HTMLInputElement>(null)

	const router = useRouter();

	const processCommand = (command: string) => {
		const cont = document.getElementById("contentx")
		onClose()
		switch (command) {
			case ":blog":
				cont?.classList.add("opacity-0")
				setTimeout(() => {
					router.push("/blog");
					cont?.classList.remove("opacity-0")
				}, 300)
				break;
			case ":about":
				cont?.classList.add("opacity-0")
				setTimeout(() => {
					router.push("/about");
					cont?.classList.remove("opacity-0")
				}, 300)
				break;
			case ":flail":
				cont?.classList.add("opacity-0")
				setTimeout(() => {
					router.push("/blog/flail");
					cont?.classList.remove("opacity-0")
				}, 300)
				break;
			case ":home":
				cont?.classList.add("opacity-0")
				setTimeout(() => {
					router.push("/");
					cont?.classList.remove("opacity-0")
				}, 300)
				break;
			default:
				break;
		}
	}


	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<div className="flex flex-row justify-between items-center bg-black text-white rounded-xl shadow-lg py-4 px-2 w:1/3 lg:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-100 border border-white">
				<input
					ref={inputRef}
					autoFocus
					type="text"
					// placeholder="Enter command..."
					value={value}
					onChange={onChangeHandler}
					className="text-xl font-semibold font-mono text-white bg-black/5 w-5/9 px-4 py-2 border-none border-0 focus:outline-none"
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
				<div className="w-4/9 text-right text-sm px-2">
					Press &lt;Esc&gt; to close
				</div>
			</div>
		</div>
	)
}


