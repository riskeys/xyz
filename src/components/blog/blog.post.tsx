"use client"

import { useTitle } from "@/context/title.provide";
import Link from "next/link";
import { useEffect } from "react";

export default function BlogPost({ title, content }: { title: string, content: string }) {
	const { setTitle } = useTitle();

	useEffect(() => {
		setTitle(`riskeys.xyz - blog - ${title}`);
	}, [setTitle])

	return (
		<div id="content" className=" transition-opacity duration-500 ease-in-out text-white mx-auto flex flex-col my-4 font-mono gap-2">
			<div id="content-nav" className="w-8/10 mx-auto text-right ">
				<div className="touch-only mb-10">
					<div className="text-xs md:text-sm top-10 left-10 absolute">
						<Link href="/blog">&lt;- blog</Link>
					</div>
				</div >
				<div className="vim-only">
					<div className="text-right">
						press `g` to open navigation menu
					</div>
				</div>
			</div>
			<div className=" w-full md:w-4/5 mx-auto">
				<article className="prose prose-sm prose-stone md:prose-base prose-invert max-w-none w-full mx-auto ">
					<div className="text-center text-xl font-semibold mb-10">
						{title}
					</div>
					<div dangerouslySetInnerHTML={{ __html: content }}>
					</div>

				</article>
			</div>
		</div>
	);
}


