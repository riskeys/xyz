"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

export function PageTransition({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname()

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export function ContentWrapper({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		// trigger fade in after mount
		setVisible(true)
	}, [])

	return (
		<div
			id="contentx"
			className={`transition-opacity duration-500 ${visible ? "" : "opacity-0"}`}
		>
			{children}
		</div>
	)
}
