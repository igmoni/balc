import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { validate } from "./mdx/validate";
import { getReadingTime } from "./mdx/readingTime";
import CourseComponents from "@/components/courses/CourseComponents";

const COURSES_PATH = path.join(process.cwd(), "src/data/course");

export async function getAllCourses() {
  const files = await fs.readdir(COURSES_PATH);

  const courses = await Promise.all(
    files.map(async (file) => {
      if (!file.endsWith(".mdx")) return null;

      const slug = file.replace(".mdx", "");
      const raw = await fs.readFile(path.join(COURSES_PATH, file), "utf-8");

      const { data, content } = matter(raw);

      validate(data, file);

      if (data.draft) return null;
      if (data.date && new Date(data.date) > new Date()) return null;

      return {
        slug,
        title: data.title,
        description: data.description || "",
        date: data.date,
        coverImage: data.coverImage,
        level: data.level,
        duration: data.duration,
        mode: data.mode
      };
    })
  );
  return courses
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getCourseBySlug(slug) {
  const filePath = path.join(COURSES_PATH, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf-8");

  const { data, content } = matter(raw);
  validate(data, slug);

  const { content: compiled } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
    components: CourseComponents,
  });

  return {
    frontmatter: data,
    content: compiled,
    readingTime: getReadingTime(content),
  };
}
