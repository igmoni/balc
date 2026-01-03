"use client";
import React from "react";
import Container from "../common/Container";
import { Separator } from "../ui/separator";
import CourseList from "./CourseList";

const CoursesSection = ({ courses }) => {
  return (
    <Container>
      <div>
        <h1 className="mt-16 text-lg md:text-3xl font-bold text-center">
          Job-Oriented Courses - 100% Placement Assistance
        </h1>
        <h2 className="mt-3 text-sm md:text-lg  text-center ">
          Explore a variety of professional courses designed to build real
          skills and boost your career.
        </h2>
      </div>

      <Separator className={"my-5 rounded-lg border"} />

      <CourseList courses={courses} />
    </Container>
  );
};

export default CoursesSection;
