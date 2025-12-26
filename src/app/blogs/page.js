import Container from "@/components/common/Container"
import Hero from "@/components/common/Hero"
import BlogSection from "@/components/blogs/BlogSection"
import { getAllBlogs } from "@/lib/blogs"

export default async function Page() {
  const blogs = await getAllBlogs() // ✅ server-only

  return (
    <Container className="px-5">
      <Hero title="Blogs" />
      <BlogSection blogs={blogs} />
    </Container>
  )
}
