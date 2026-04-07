import Link from "next/link";

export default function PostItem({ slug }: { slug: string }) {
	return (

		<Link href={`/blog/${slug}`}>
			<div className="flex flex-col p-4 mb-3 border-2 bg-gray-900 rounded-xl dark:hover:bg-gray-700 cursor-pointer">
				<div className="text-xl font-semibold mb-4">Title</div>
				<div className="mb-4 text-sm md:text-md">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet... </div>
				<div className="text-sm">More -&gt;</div>
			</div>
		</Link>
	);
}
