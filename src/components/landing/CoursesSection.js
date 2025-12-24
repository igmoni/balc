"use client";
import { motion } from "motion/react";
import {
  Building,
  TrendingUp,
  BookOpen,
  Code,
  Palette,
  BarChart3,
} from "lucide-react";

const courses = [
  {
    title: "Revit Architecture",
    desc: "Professional BIM training for architects & engineers.",
    icon: Building,
    tags: ["Auto CADD", "Revit", "Civil"],
    duration: "2 Months",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, Ads, Social Media, and performance marketing mastery.",
    icon: TrendingUp,
    tags: ["SEO", "Email Marketing", "WordPress"],
    duration: "4 Months",
  },
  {
    title: "SAP",
    desc: "ERP & functional module training with certification support.",
    icon: BookOpen,
    tags: ["GST", "Bank Accounting"],
    duration: "3 Months",
  },
  {
    title: "Web Development",
    desc: "Frontend + Backend using modern frameworks.",
    icon: Code,
    tags: ["HTML", "CSS", "JavaScript"],
    duration: "3 Months",
  },
  {
    title: "Graphic Design",
    desc: "Branding, UI/UX and creative software mastery.",
    icon: Palette,
    tags: ["CorelDraw", "PhotoShop", "Illustrator"],
    duration: "2 Months",
  },
  {
    title: "Data Science",
    desc: "Python, ML & analytics foundations.",
    icon: BarChart3,
    tags: ["SQL", "PowerBI", "Python"],
    duration: "4 Months",
  },
];

// Container animation (stagger)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export default function CoursesSection() {
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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {courses.map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.005 }}
              className="bg-white rounded-xl border shadow-acternity hover:shadow-lg p-6 transition"
            >
              <course.icon className="w-10 h-10 text-blue-700 mb-3" />

              <h3 className="text-lg font-semibold text-gray-900">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600 mt-1 mb-2">{course.desc}</p>

              <ul className="mx-auto mt-2 flex w-fit items-center justify-center gap-2">
                {course.tags.map((tag, idx) => (
                  <li
                    key={idx}
                    className="bg-neutral-100 rounded-md px-2 py-0.5 text-xs text-gray-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-5">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full font-semibold">
                  {course.duration}
                </span>

                <motion.button
                  whileHover={{ x: 4 }}
                  className="text-blue-700 text-sm underline-offset-4 hover:underline  font-semibold"
                >
                  View Details →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
