"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  MapPin,
  BookOpen,
  Wrench,
  Building,
  Code,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";
import Container from "../common/Container";

const Hero = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageSlide, setImageSlide] = useState(0);

  const courses = [
    {
      name: "AutoCAD Civil",
      duration: "3 Months",
      icon: Building,
      mode: "Online/Offline",
    },
    {
      name: "AutoCAD Mechanical",
      duration: "3 Months",
      icon: Wrench,
      mode: "Online/Offline",
    },
    {
      name: "Revit Architecture",
      duration: "2 Months",
      icon: Building,
      mode: "Online/Offline",
    },
    {
      name: "Digital Marketing",
      duration: "4 Months",
      icon: TrendingUp,
      mode: "Online/Offline",
    },
    {
      name: "Full Stack Development",
      duration: "6 Months",
      icon: Code,
      mode: "Online/Offline",
    },
    {
      name: "SAP",
      duration: "3 months",
      icon: BookOpen,
      mode: "Online/Offline",
    },
  ];

  const heroImages = [];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setImageSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(imgTimer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  const nextImageSlide = () =>
    setImageSlide((prev) => (prev + 1) % heroImages.length);
  const prevImageSlide = () =>
    setImageSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <Container className={"min-h-screen  shadow-acternity rounded-md my-20"}>
      <div className="px-4 sm:px-8 lg:px-8 py-20">
        <div className="grid gap-12 items-center md:grid-cols-2">
          <div>
            <div className="inline-block bg-yellow text-blue-800 px-4 py-2 rounded-md text-sm font-semibold mb-6">
              ISO 9001:2015 Certified | Since 2004
            </div>
            <h1 className="text-xl text-blue-100 mb-8">
              Transform Your Career with Industry-Leading CAD & IT Training
            </h1>
            <p>
              1 Lakh+ successful students across 20+ locations. Expert-led
              trainng with 100% placement assistance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition">
                Enroll Now
              </button>
              <button className="bg-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                <a href="/brochure.pdf" className="text-blue-700 ">
                  Download Brochure
                </a>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <p className="text-3xl font-bold text-yellow-400">1 Lakh+</p>
                <p className="text-blue-200">Students Trained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
