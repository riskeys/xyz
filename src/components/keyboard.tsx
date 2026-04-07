"use client"

import { ChangeEvent, useEffect, useState } from "react"
import { OpenModal } from "./commandline"
import { useRouter } from "next/navigation"

export function KeyboardNav() {
	const [isOpen, setIsOpen] = useState(false)
	const [isNavigationOpen, setIsNavigationOpen] = useState(false)
	const [value, setValue] = useState(":")
	const [buf, setBuf] = useState<string[]>([]);
	let buffer: string[] = []
	const router = useRouter();
	const [mode, setMode] = useState("normal");

	useEffect(() => {
		const mainframe = document.getElementById("mainframe");
		const handleNormalModeKeyDown = (e: KeyboardEvent) => {
			if (e.key == "Escape") {
				setMode("normal");
				setIsNavigationOpen(false)
				setIsOpen(false)
				return;
			}

			if (mode == "normal") {
				if (e.key == "g") {
					e.preventDefault();
					setMode("navigation");
					setIsNavigationOpen(true)
					return;
				}

				if (e.key == "b") {
					e.preventDefault();
					redirectTo("/blog", router)
					return;
				}

				if (e.key == "f") {
					e.preventDefault();
					redirectTo("/blog/flail", router)
					return;
				}

				if (e.key == "h") {
					e.preventDefault();
					redirectTo("/", router)
					return;
				}

				if (e.key == "m") {
					e.preventDefault();
					redirectTo("/music", router)
					return;
				}

				if (e.key == "o") {
					e.preventDefault();
					const iframe = document.getElementById("iframe-vim");
					if (iframe) {
						iframe.classList.remove("hidden");
						setTimeout(() => {
							iframe.classList.remove("opacity-0");
							iframe.classList.add("opacity-100");
						}, 700)
					}
					return;
				}

				if (e.key == "a") {
					e.preventDefault();
					redirectTo("/about", router)
					return;
				}

				if (e.key == ":") {
					e.preventDefault();
					setMode("command");
					setIsOpen(true)
					return;
				}

				if (e.key == "j") {
					mainframe?.scrollBy(0, 150);
					return
				}

				if (e.key == "k") {
					// 		const mainframe = document.getElementById("mainframe");
					mainframe?.scrollBy(0, -150);
					return
				}
			}

			if (mode == "navigation") {
				if (e.key == "b") {
					e.preventDefault();
					setMode("normal");
					setIsNavigationOpen(false)
					redirectTo("/blog", router)
					return;
				}

				if (e.key == "f") {
					e.preventDefault();
					setMode("normal");
					setIsNavigationOpen(false)
					redirectTo("/blog/flail", router)
					return;
				}

				if (e.key == "h") {
					e.preventDefault();
					setMode("normal");
					setIsNavigationOpen(false)
					redirectTo("/", router)
					return;
				}

				if (e.key == "m") {
					e.preventDefault();
					setMode("normal");
					setIsNavigationOpen(false)
					redirectTo("/music", router)
					return;
				}

				if (e.key == "a") {
					e.preventDefault();
					setMode("normal");
					setIsNavigationOpen(false)
					redirectTo("/about", router)
					return;
				}
			}

			if (mode == "command") {
				if (e.key == "Enter") {
					setMode("normal");
					setIsOpen(false)
					return;
				}
			}
		}

		window.addEventListener("keydown", handleNormalModeKeyDown);
		return () => window.removeEventListener("keydown", handleNormalModeKeyDown);
	}, [mode]);

	// useEffect(() => {
	// 	function openNavigation() {
	// 		if (buffer.length > 0 && buffer[0] == "g") {
	// 			return;
	// 		}
	//
	// 		buffer.push("g");
	// 		setIsNavigationOpen(true)
	// 		return;
	//
	// 	}
	//
	// 	function leaderKey() {
	// 		const cont = document.getElementById("contentx")
	// 		if (buffer.join("") === "gb") {
	// 			cont?.classList.add("opacity-0")
	// 			setTimeout(() => {
	// 				router.push("/blog");
	// 				cont?.classList.remove("opacity-0")
	// 			}, 300)
	// 			buffer = [];
	// 			setBuf(buffer);
	// 		} else if (buffer.join("") === "gh") {
	// 			cont?.classList.add("opacity-0")
	// 			setTimeout(() => {
	// 				router.push("/");
	// 				cont?.classList.remove("opacity-0")
	// 			}, 300)
	// 			buffer = [];
	// 			setBuf(buffer);
	// 		} else {
	// 			buffer = [];
	// 			setBuf(buffer);
	// 		}
	// 	}
	//
	// 	function handleKey(e: KeyboardEvent) {
	// 		const ignoredKeys = ["Alt", "Control", "Meta", "Shift"];
	// 		if (ignoredKeys.includes(e.key)) {
	// 			return;
	// 		}
	//
	// 		if (e.key == "Escape" || e.key == "Enter") {
	// 			buffer = [];
	// 			return;
	// 		}
	//
	// 		const mainframe = document.getElementById("mainframe");
	// 		if (e.key == "j") {
	// 			mainframe?.scrollBy(0, 150);
	// 			return
	// 		}
	//
	// 		if (e.key == "k") {
	// 			mainframe?.scrollBy(0, -150);
	// 			return
	// 		}
	//
	// 		if (buffer.join("") === ":") {
	// 			e.preventDefault()
	// 			setIsOpen(true)
	// 			buffer = [];
	// 			setBuf(buffer);
	// 			return;
	// 		}
	//
	// 		if ((buffer.length == 0 || buffer[0] !== "g") && e.key == "g") {
	// 			alert(buffer);
	// 			e.preventDefault()
	// 			openNavigation();
	// 			return;
	// 		}
	//
	// 		buffer.push(e.key)
	//
	// 		if (buffer.length > 1 && buffer[0] == "g") {
	// 			leaderKey();
	// 		}
	//
	// 		setBuf(buffer);
	// 	}
	//
	// 	window.addEventListener("keydown", handleKey)
	// 	return () => window.removeEventListener("keydown", handleKey)
	// }, [])


	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value == "") {
			setIsOpen(false)
			setValue(":");
		} else {
			setValue(e.target.value);
		}
	}

	return <OpenModal
		isOpen={isOpen}
		isNavigationOpen={isNavigationOpen}
		value={value}
		onChangeHandler={handleChange}
		onClose={() => {
			setIsOpen(false);
			setIsNavigationOpen(false);
			setValue(":");
			setMode("normal");
			// alert(mode);
		}} />
}

function redirectTo(uri: string, router: { push: (x: string) => void }) {
	const cont = document.getElementById("contentx")
	cont?.classList.add("opacity-0")
	setTimeout(() => {
		router.push(uri);
		cont?.classList.remove("opacity-0")
	}, 300)
}
