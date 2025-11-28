"use client";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import Container from "../common/Container";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Junior Architect",
    text: "The Revit course helped me land my first job within 2 months of finishing training.",
  },
  {
    name: "Neha Patil",
    role: "Digital Marketer",
    text: "Hands-down the best training experience. Clear concepts and practical focus.",
  },
  {
    name: "Arjun Shetty",
    role: "SAP Consultant",
    text: "Trainers were supportive and the placement help was real, not fake promises.",
  },
];

// container stagger
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// card animation
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export default function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Container className="py-20 rounded-md bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900"
          >
            Success Stories From Our Students
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 mt-3"
          >
            Real students. Real outcomes. Real confidence.
          </motion.p>

          {/* CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-default"
              >
                {/* STARS */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex justify-center text-yellow-400 mb-3"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.3, rotate: 10 }}
                    >
                      <Star size={16} fill="#facc15" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* TEXT */}
                <p className="text-gray-700 italic leading-relaxed">
                  “{t.text}”
                </p>

                {/* NAME */}
                <div className="mt-4">
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </motion.div>
  );
}
