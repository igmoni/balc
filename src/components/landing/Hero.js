"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle,
} from "lucide-react";
import Container from "../common/Container";
import { heroImages } from "@/data/Hero";
import { courses } from "@/data/Courses";

const Hero = () => {
  const [imageSlide, setImageSlide] = useState(0);
  const startX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) nextImage();
    if (endX - startX.current > 50) prevImage();
  };

  const nextImage = () => setImageSlide((p) => (p + 1) % heroImages.length);
  const prevImage = () => setImageSlide((p) => (p - 1 + heroImages.length) % heroImages.length);

  return (
    <Container className="pb-10 my-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-800 text-white rounded-xl overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold"
              >
                ISO 9001:2015 Certified | Since 2004
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold leading-snug"
              >
                Transform Your Career with{" "}
                <span className="text-yellow-300">Industry-Leading</span>{" "}
                CAD & IT Training
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-lg text-blue-100 max-w-lg"
              >
                Join 1 Lakh+ successful students across 20+ locations with expert-led
                training and placement support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <motion.button whileHover={{ y: -2 }} className="bg-yellow-400  text-blue-900 md:px-8 md:py-4 px-4 py-2 rounded-lg font-semibold shadow-lg">
                  Enroll Now  
                </motion.button>
                <motion.button whileHover={{ y: -2 }} className="bg-white/90 text-blue-700 hover:bg-white md:px-8 md:py-4 px-4 py-2 rounded-lg font-semibold">
                  Download Brochure
                </motion.button>
              </motion.div>

              {/* STATS */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.15 } },
                }}
                className="grid grid-cols-3 gap-4 mt-10 max-w-md text-sm"
              >
                {[
                  { value: "1L+", label: "Students" },
                  { value: "20+", label: "Locations" },
                  { value: "100%", label: "Placement Help" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  >
                    <div className="text-2xl font-bold text-yellow-300">{stat.value}</div>
                    {stat.label}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* IMAGE SLIDER */}
            <div className="relative w-full max-w-2xl mx-auto">
              <div
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                className="relative overflow-hidden rounded-2xl shadow-2xl aspect-1310/600"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imageSlide}
                    src={heroImages[imageSlide]}
                    alt="Hero Slide"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-contain bg-black/20"
                  />
                </AnimatePresence>

                {/* NAV */}
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow hover:scale-110">
                  <ChevronLeft className="text-blue-700" />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow hover:scale-110">
                  <ChevronRight className="text-blue-700" />
                </button>

                {/* DOTS */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImageSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === imageSlide ? "bg-yellow-400 w-8" : "bg-white/60 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* BENEFITS */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
                }}
                className="bg-white/95 backdrop-blur mt-4 rounded-xl shadow p-5 space-y-3 text-sm"
              >
                {[
                  "Live Interactive Sessions",
                  "Industry Expert Trainers",
                  "Skill-Driven Learning Model",
                ].map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                    className="text-blue-700 flex items-center"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-yellow-500" />
                    {point}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* POPUP COURSES */}
      <div className="hidden md:block md:max-w-7xl mx-auto px-6 -mt-14 relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {courses.slice(0, 3).map((course, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <course.icon className="w-10 h-10 text-blue-700 mb-3" />
              <h3 className="font-semibold text-gray-900">{course.name}</h3>
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <Clock className="w-4 h-4 mr-1" />
                {course.duration}
              </div>
              <span className="inline-block mt-3 bg-yellow-100 text-yellow-800 rounded-full px-3 text-xs font-semibold">
                {course.mode}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default Hero;
