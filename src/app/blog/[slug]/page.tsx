import BlogPost from "@/components/blog/blog.post";
import { getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostData(slug);
  if (post == null) {
    return notFound();
  }

  return (
    <BlogPost title={post.meta.title} content={post.contentHtml} />
  );
}
