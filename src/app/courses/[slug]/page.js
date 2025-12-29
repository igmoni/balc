import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import Head from "@/components/mdx/Head";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { serialize } from "next-mdx-remote/serialize";
import { getAllCourses, getCourseBySlug } from "@/lib/courses";

export async function generateStaticParams() {
  const courses = await getAllCourses();
  const slugs = courses.map((c) => c.slug);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug) return {};

  const course = await getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: course.frontmatter.title,
    description: course.frontmatter.description || "",
  };
}

const page = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug) notFound();
  const course = await getCourseBySlug(slug);
  if (!course) notFound();

  const { content, frontmatter } = course

  const mdxSource = await serialize(content, {
    scope: frontmatter
  })

  return (
    <Container className={"py-20"}>
  <MDXRemote
       soruce={content}
       options={{scope: frontmatter}}
        components={mdxComponents} // 👈 REQUIRED
      />
      <Head title={frontmatter.title} image={frontmatter.pageImage}/>
      <div className="prose">{content}</div>
    </Container>
  )
};

export default page;
