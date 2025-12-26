import { getBlogsFiles, getBlogBySlug } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

// 1️⃣ Tell Next.js which slugs to build
export async function generateStaticParams() {
  const files = await getBlogsFiles();

  return files.map((file) => ({
    slug: file.replace(/\.mdx?$/, ""),
  }));
}

// 2️⃣ The page itself (SERVER COMPONENT)
export default async function BlogPage({ params }) {
  const { frontmatter, content } = await getBlogBySlug(params.slug);

  return (
    <article className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      {frontmatter.date && <p>{frontmatter.date}</p>}

      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          },
        }}
      />
    </article>
  );
}
