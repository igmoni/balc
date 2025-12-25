import CoursesSection from "@/components/courses/CoursesSection";
import Hero from "@/components/common/Hero";
import React from "react";
import Container from "@/components/common/Container";

const page = () => {
  return (
    <Container className="px-5">
      <Hero title="Our Courses" />
      <CoursesSection />
    </Container>
  );
};

export default page;
