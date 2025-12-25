import BlogSection from "@/components/blogs/BlogSection";
import Container from "@/components/common/Container";
import Hero from "@/components/common/Hero";
import React from "react";

const page = () => {
  return (
    <Container className={"px-5"}>
      <Hero title={"Blogs"} />
      <BlogSection />
    </Container>
  );
};

export default page;
