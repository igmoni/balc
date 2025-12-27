import Container from "@/components/common/Container"
import Hero from "@/components/common/Hero"
import BlogSection from "@/components/blogs/BlogSection"

export default async function Page() {

  return (
    <Container className="px-5">
      <Hero title="Blogs" />
      <BlogSection  />
    </Container>
  )
} 
