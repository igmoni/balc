"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import ArrowRight from "@/svgs/ArrowRight";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const CourseList = ({ courses, className }) => {
  const pathname = usePathname();
  if (!courses?.length) return null;

  return (
    <div
      className={cn(
        "grid md:grid-cols-2 grid-cols-1 items-center gap-10",
        `${pathname === "/courses" ? "px-16" : "px-5"}`,
        className
      )}
    >
      {courses.map((course, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className={`shadow-acternity hover:shadow-lg rounded-lg ${
            pathname === "/courses" ? "w-lg" : ""
          }`}
        >
          <Link href={`/courses/${course.slug}`} className="rounded-lg ">
            <div className="relative rounded-t-lg h-37.5 md:h-43.75 bg-linear-to-br from-blue-50 to-blue-100">
              <Image
                src={course.coverImage}
                alt={course.title}
                fill
                className="object-fit rounded-t-lg transition-transform duration-300 "
              />
            </div>
            <div className="p-6 space-y-3">
              {/* TITLE */}
              <h3 className="text-xl font-semibold leading-snug">
                {course.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {course.description}
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#00005D] group-hover:gap-2 transition-all"
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
  );
};

export default CourseList;
