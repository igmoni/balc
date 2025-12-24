"use client";
import { motion } from "motion/react";
import { ClipboardCheck, PlayCircle, Award, Briefcase } from "lucide-react";

const steps = [
  {
    title: "1. Free Counseling",
    desc: "Talk to our experts to choose the right course based on your goals.",
    icon: ClipboardCheck,
  },
  {
    title: "2. Enroll & Start Classes",
    desc: "Join live interactive sessions in online or offline mode.",
    icon: PlayCircle,
  },
  {
    title: "3. Projects & Certification",
    desc: "Give a assessment and earn industry-recognized certificates.",
    icon: Award,
  },
  {
    title: "4. Placement Support",
    desc: "Get job referrals and assistance.",
    icon: Briefcase,
  },
];

// container animation
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HowItWorksSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 mt-2 max-w-2xl mx-auto"
        >
          A simple and guided journey from choosing your course to getting placed
          in your dream role.
        </motion.p>

        {/* STEPS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-sm p-6 relative group hover:shadow-xl transition"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-700 mb-4"
              >
                <step.icon className="w-6 h-6" />
              </motion.div>

              <h3 className="font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
