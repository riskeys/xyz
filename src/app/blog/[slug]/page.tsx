import BlogPost from "@/components/blog/blog.post";
import { getPostData } from "@/lib/posts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getPostData(slug);
  console.log(data.title);

  return (
    <BlogPost title={data.title} content={data.contentHtml} />
  );
}
