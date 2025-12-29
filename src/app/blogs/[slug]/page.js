import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import Container from "@/components/common/Container";
import Head from "@/components/mdx/Head";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { serialize } from "next-mdx-remote/serialize"

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  const slugs = blogs.map((b) => b.slug);
  console.log(`Static-params:${slugs}`);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug) return {};

  const blog = await getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: blog.frontmatter.title + "blog by BALC",
    description: blog.frontmatter.description || "",
  };
}

const page = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug) notFound();

  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const { content, frontmatter } = blog;

  const date = frontmatter.date ? new Date(frontmatter.date) : null;

  const mdxSource = await serialize(content, {
    scope: frontmatter, // 👈 REQUIRED
  });

  return (
    <Container className={"py-20 "}>
       <MDXRemote
       soruce={content}
       options={{scope: frontmatter}}
        components={mdxComponents} // 👈 REQUIRED
      />
      <Head title={frontmatter.title} image={frontmatter.coverImage} />
      <div className="prose">

      {content}
        </div>
    </Container>
  );
};

export default page;
