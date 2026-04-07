"use client"

import { useTitle } from "@/context/title.provide";
import { use, useEffect } from "react";

export default function BlogPost({ title, content }: { title: string, content: string }) {
	const { setTitle } = useTitle();

	useEffect(() => {
		setTitle(`riskeys.xyz - blog - ${title}`);
	}, [setTitle])

	return (
		// <div id="container" className="h-[100vh] m-0 p-10 bg-zinc-50 font-sans dark:bg-black">
		<div id="content" className=" transition-opacity duration-500 ease-in-out text-white mx-auto flex flex-col my-4 font-mono gap-2">
			<div id="content-nav" className="w-9/10">
				<div className="touch-only">
					<div className="text-xs md:text-sm top-10 left-10 absolute">
						back to blog
					</div>
				</div >
				<div className="vim-only">
					<div className="text-right">
						press `gb` to go back to blog
					</div>
				</div>
			</div>
			<div className="prose prose-invert items-center justify-center flex flex-col mt-10">
				<div className=" text-lg font-semibold">
				</div>
				<div className=" text-sm font-semibold">
					{title}
				</div>
				<div dangerouslySetInnerHTML={{ __html: content }}>
				</div>

			</div>
		</div>
	);
}


