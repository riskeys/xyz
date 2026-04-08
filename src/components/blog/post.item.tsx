import Link from "next/link";

interface PostItemParam {
	slug: string,
	title: string,
	content: string
}

export default function PostItem({ slug, title, content }: PostItemParam) {
	console.log("title", title);
	const preview = content.substring(0, Math.min(content.length, 100));
	return (
		<Link href={`/blog/${slug}`}>
			<div className="flex flex-col p-4 mb-3 border-2 bg-gray-900 rounded-xl dark:hover:bg-gray-700 cursor-pointer">
				<div className="text-xl font-semibold mb-4">{title}</div>
				<div className="mb-4 text-sm md:text-md">{preview}...</div>
				<div className="text-sm">More -&gt;</div>
			</div>
		</Link>
	);
}
