"use client"

import { useTitle } from "@/context/title.provide";
import { KeyboardNav } from "./keyboard";
import { ContentWrapper } from "./page.transition";

export function LayoutContent({ children }: { children: React.ReactNode }) {
	const { title } = useTitle();

	return (
		<>
			<KeyboardNav />
			<div id="container" className="h-[100vh] m-0 p-10 font-sans lg:pb-16">
				<div className="vim-only">
					<div id="titlebar" className="font-mono text-center flex flex-row justify-center items-start bg-blue-900 rounded-t-2xl text-black dark:text-white py-1 sticky top-0 z-10">
						<span>{title}</span>
					</div>
				</div>
				<div id="mainframe" className="vim-only bg-gray-200/90 dark:bg-gray-900/90 pb-10 w-full h-full overflow-y-auto scroll-smooth snap-y scroll-p-0">
					<ContentWrapper>
						{children}
					</ContentWrapper>
				</div>
				<div className="touch-only">
					<ContentWrapper>
						{children}
					</ContentWrapper>
				</div>
			</div>
		</>
	);
}

