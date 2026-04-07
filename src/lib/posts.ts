import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { readFile, readdir } from "node:fs/promises";
import matter from "gray-matter";

const postsDirectory = "src/content/blog/";

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = await readFile(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}


export async function getAllPosts() {
  const fileNames = await readdir(postsDirectory);

  const getPosts = fileNames.map(async (fileName: string) => {
    const slug = fileName.replace(/\.md$/, "")

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = await readFile(fullPath, 'utf8');

    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
    }
  });

  const posts = await Promise.all(getPosts);

  // sort by date (newest first)
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}
