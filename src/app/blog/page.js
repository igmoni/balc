import Container from "@/components/common/Container";
import Hero from "@/components/common/Hero";
import BlogSection from "@/components/blogs/BlogSection";
import { getAllBlogs } from "@/lib/blogs";

export const metadata = { title: "Blogs", description: "" };
async function page({ searchParams }) {
  // should await it or else would get error 'cause searchParams is a Promise
  const resolvedSearchParams = await searchParams;
  const activeTag = resolvedSearchParams?.tag;

  const blogs = await getAllBlogs();

  const filtered = activeTag
    ? blogs.filter((p) => p.tags.includes(activeTag))
    : blogs;

  const allTags = Array.from(new Set(blogs.flatMap((p) => p.tags)));

  return (
    <Container className="px-5">
      <Hero title="Blogs" />
      <BlogSection
        tags={allTags}
        filtered={filtered}
        blogs={blogs}
        activeTag={activeTag}
      />
    </Container>
  );
}

export default page;
