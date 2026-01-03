import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import Head from "@/components/mdx/Head";
import { getAllCourses, getCourseBySlug } from "@/lib/courses";
import { CourseContent } from "@/components/courses/CourseContent";

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

  const { content, frontmatter } = course;

  return (
    <Container className={"py-20"}>
      <CourseContent frontmatter={frontmatter} content={content} />
    </Container>
  );
};

export default page;
