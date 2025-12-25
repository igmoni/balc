import About from "@/components/about/About";
import Container from "@/components/common/Container";
import Hero from "@/components/common/Hero";
import React from "react";

const page = () => {
  return (
    <Container>
      <Hero title={"About Us"} />
      <About/>
    </Container>
  );
};

export default page;
