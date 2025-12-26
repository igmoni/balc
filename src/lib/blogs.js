import "server-only"
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const BLOGS_PATH = path.join(process.cwd(), "data", "blog");

export async function getBlogsFiles() {
  const files = await fs.readdir(BLOGS_PATH);
  return files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

export function getBlogSlug(filename) {
  return filename.replace(/\.mdx?$|^\d+-/g, "");
}

export async function getBlogBySlug(slug) {
  const filename =
    slug.endsWith(".mdx") || slug.endsWith(".md") ? slug : `${slug}.mdx`;

  const fullPath = path.join(BLOGS_PATH, filename);

  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  const finalSlug = frontmatter.slug
    ? String(frontmatter.slug)
    : getBlogSlug(filename);

  return { frontmatter, content, slug: finalSlug };
}

export async function getAllBlogs() {
  const files = await getBlogsFiles();

  const blogs = await Promise.all(
    files.map(async (filename) => {
      const { frontmatter, slug } = await getBlogBySlug(filename);
      return { ...frontmatter, slug };
    })
  );

  blogs.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });

  return blogs;
}
