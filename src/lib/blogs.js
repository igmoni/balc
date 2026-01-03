import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { validate } from "./mdx/validate";
import { getReadingTime } from "./mdx/readingTime";
import BlogComponents from "@/components/blogs/BlogComponents";

const BLOGS_PATH = path.join(process.cwd(), "src/data/blog");

// For Blogs Page Eg: /blogs/page.js
export async function getAllBlogs() {
  const files = await fs.readdir(BLOGS_PATH);

  const blogs = await Promise.all(
    files.map(async (file) => {
      if (!file.endsWith(".mdx")) return null;

      const slug = file.replace(".mdx", "");
      const raw = await fs.readFile(path.join(BLOGS_PATH, file), "utf-8");

      const { data, content } = matter(raw);

      validate(data, file);

      if (data.draft) return null;
      if (data.date && new Date(data.date) > new Date())
        return null;

      return {
        slug,
        title: data.title,
        description: data.description || "",
        date: data.date,
        tags: data.tags || [],
        coverImage: data.coverImage,
        readingTime: getReadingTime(content),
      };
    })
  );

  return blogs
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}


// For Blogs Page Eg: /blogs/[slug]/page.js
export async function getBlogBySlug(slug) {
  const filePath = path.join(BLOGS_PATH, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf-8");

  const { data, content } = matter(raw);
  validate(data, slug);

  const { content: compiled } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
    components: BlogComponents,
  });

  return {
    frontmatter: data,
    content: compiled,
    readingTime: getReadingTime(content),
  };
}
