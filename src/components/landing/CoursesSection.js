"use client";
import { motion } from "motion/react";
import CourseList from "../courses/CourseList";

export default function CoursesSection({ courses }) {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900"
        >
          Our Popular Courses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 mt-2 max-w-xl mx-auto"
        >
          Industry-aligned programs designed for practical learning and career
          outcomes.
        </motion.p>

        {/* Cards Grid */}
        <div className="mt-12">
          <CourseList
            courses={courses}
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          />
        </div>
      </div>
    </motion.section>
  );
}
