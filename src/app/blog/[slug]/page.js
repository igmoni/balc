import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import Container from "@/components/common/Container";
import { BlogContent } from "@/components/blogs/BlogContent";

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

  return (
    <Container className={"pt-20 prose"}>
      <BlogContent frontmatter={frontmatter} content={content} />
    </Container>
  );
};

export default page;
