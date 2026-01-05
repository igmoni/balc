import CoursesSection from "@/components/courses/CoursesSection";
import Hero from "@/components/common/Hero";
import React from "react";
import Container from "@/components/common/Container";
import { getAllCourses } from "@/lib/courses";

export const metadata = { title: "Courses", description: "Check out all the job-oriented courses"}



const page = async ({ searchParams}) => {
  const resolvedSearchParams = await searchParams
  const courses = await getAllCourses()

  return (
    <Container className="px-5">
      <Hero title="Our Courses" />
      <CoursesSection courses={courses} />
    </Container>
  );
};

export default page;
