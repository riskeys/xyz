import Blog from "@/components/blog/blog.page";
import { getAllPosts } from "@/lib/posts";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <Blog posts={posts} />
  );
}
