"use client"

import PostItem from "@/components/blog/post.item"
import { useTitle } from "@/context/title.provide";
import { useEffect } from "react";

export default function Blog({ posts }: { posts: { slug: string, title: string, date: Date }[] }) {
	const { setTitle } = useTitle();
	useEffect(() => {
		setTitle("riskeys.xyz - blog");
	}, [setTitle])

	return (
		<div id="content" className="transition-opacity duration-500 ease-in-out text-white mx-auto items-center justify-center flex flex-col my-4 font-mono gap-2">
			<div className="text-lg font-semibold pb-4">
				blog
			</div>
			<div className="text-sm w-full text-justify md:w-1/2 mx-auto">
				<p className="my-2">Pardon my crappy website... and my crappy blog</p>
				<p className="my-2 block md:hidden">And I usually write crappy blog post back in the old (tumblr) days. </p>
				<p className="my-2 block md:hidden">So, bear with me :)</p>
				<p className="my-2 hidden md:block">In this blog, I might write whatever comes to mind at a certain time like I used to do back in the old (tumblr) days. (iykyk)</p>
				<p className="my-2 hidden md:block">
					I might not even write much about tech stuffs (I'm just pretending to be an IT guy here). Usually it would be more about music, personal experience,
					social observation, and so on. You can navigate using arrow key or hjkl (j: down, k: up), and press f key to select the article. Happy reading! :)
				</p>

			</div>
			<hr className="w-full md:w-1/2 mx-auto my-6 border-gray-400" />
			<div className="w-full md:w-1/2 lg:1/2 mx-auto md:mt-20">
				<h2 className="text-xl mb-6">blog posts</h2>
				{
					posts.map((post) => {
						return <PostItem key={post.slug} slug={post.slug} title={post.title} content={post.title} />
					})
				}
			</div>
		</div>
	);
}

