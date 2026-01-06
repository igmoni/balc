"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import ArrowRight from "@/svgs/ArrowRight";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Container from "../common/Container";


const CourseList = ({ courses, className }) => {
  const pathname = usePathname();
  if (!courses?.length) return null;

  return (
    <Container
      className={cn(
        `
        grid 
        grid-cols-1
        sm:grid-cols-2
        gap-6
        sm:gap-8
        `,
        pathname === "/courses" ? "px-0 lg:grid-cols-2" : "px-4 sm:px-6 lg:px-8 ",
        className
      )}
    >
      {courses.map((course, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-full max-w-full rounded-xl bg-white shadow-acternity hover:shadow-xl transition-shadow"
        >
          <Link href={`/courses/${course.slug}`} className="block h-full group">
            {/* IMAGE */}
            <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-linear-to-br from-blue-50 to-blue-100">
              <Image
                src={course.coverImage}
                alt={course.title}
                fill
                sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,33vw"
                className="object-fit transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col p-5 sm:p-6 h-full">
              <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                {course.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {course.description}
              </p>

              {/* META */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700">
                  {course.level}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                  {course.duration}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-700">
                  Certificate
                </span>
              </div>

              <div className="pt-5">
                  <span className="flex  items-center gap-2 text-sm font-medium text-[#00005D] transition-all group-hover:gap-3">
                    Know more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </Container>
  );
};

export default CourseList;
