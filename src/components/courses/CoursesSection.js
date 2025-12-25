"use client";
import React from "react";
import { courses } from "@/data/coursePage";
import { motion } from "motion/react";
import Container from "../common/Container";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import ArrowRight from "@/svgs/ArrowRight";

const CoursesSection = () => {
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

      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
        {courses.map((course, idx) => (
          <motion.div key={idx}
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="shadow-acternity hover:shadow-lg rounded-lg"
          >
            <Link href={course.link}  className="rounded-lg ">
              <div className="relative rounded-t-lg h-[150px] md:h-[250px] bg-linear-to-br from-blue-50 to-blue-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-fit rounded-t-lg  transition-transform duration-300 "
                />
              </div>
              <div className="p-6 space-y-3">
                {/* TITLE */}
                <h3 className="text-xl font-semibold leading-snug">
                  {course.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.desc}
                </p>

                {/* META */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700">
                    {course.level}
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-700">
                    Completion Certificate available
                  </span>
                </div>

                {/* CTA */}
                <div className="pt-4 group">
                  <span
                    className="
              inline-flex items-center gap-2
              text-sm font-medium text-[#00005D]
              group-hover:gap-2 transition-all
            "
                  >
                    Know more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default CoursesSection;
