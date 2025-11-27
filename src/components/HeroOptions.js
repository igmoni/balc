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

const HeroOptions = () => {
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
      name: "STAAD Pro",
      duration: "2 Months",
      icon: Building,
      mode: "Offline",
    },
  ];

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop",
      title: "Expert Training in CAD & IT",
      subtitle: "Learn from industry professionals",
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop",
      title: "State-of-the-Art Infrastructure",
      subtitle: "Modern labs with latest software",
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
      title: "100% Placement Assistance",
      subtitle: "Your success is our priority",
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop",
      title: "20+ Training Centers",
      subtitle: "Find a location near you",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImageSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(imageTimer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  const nextImageSlide = () =>
    setImageSlide((prev) => (prev + 1) % heroImages.length);
  const prevImageSlide = () =>
    setImageSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  // Option 1: Split Hero with Dynamic CTA
  const Option1 = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ISO 9001:2015 Certified | Since 2004
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Transform Your Career with Industry-Leading CAD & IT Training
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Join 10,000+ successful students across 20+ locations.
                Expert-led training with 100% placement support.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition">
                  Enroll Now
                </button>
                <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                  Download Brochure
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">
                    10,000+
                  </div>
                  <div className="text-blue-200">Students Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">20+</div>
                  <div className="text-blue-200">Locations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">100%</div>
                  <div className="text-blue-200">Placement Support</div>
                </div>
              </div>
            </div>

            {/* Right Image/Content */}
            <div className="relative">
              {/* Image Carousel */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96">
                {heroImages.map((image, idx) => (
                  <div
                    key={idx}
                    className="absolute inset-0 transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(${(idx - imageSlide) * 100}%)`,
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {image.title}
                        </h3>
                        <p className="text-white/90">{image.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Carousel Controls */}
                <button
                  onClick={prevImageSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-blue-700" />
                </button>
                <button
                  onClick={nextImageSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition z-10"
                >
                  <ChevronRight className="w-6 h-6 text-blue-700" />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImageSlide(idx)}
                      className={`w-2 h-2 rounded-full transition ${
                        idx === imageSlide ? "bg-yellow-400 w-8" : "bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Quick Benefits Below Carousel */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
                <div className="space-y-4">
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-500" />
                    <span className="font-medium">
                      Live Interactive Sessions
                    </span>
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-500" />
                    <span className="font-medium">
                      Industry Expert Trainers
                    </span>
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-500" />
                    <span className="font-medium">Hands-on Project Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Course Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <course.icon className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {course.name}
              </h3>
              <div className="flex items-center text-gray-600 mb-3">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{course.duration}</span>
              </div>
              <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                {course.mode}
              </div>
              <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Option 2: Full-Width Hero with Course Carousel Below
  const Option2 = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Full-Width Image Carousel Hero */}
      <div className="relative h-[600px] overflow-hidden">
        {heroImages.map((image, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${(idx - imageSlide) * 100}%)`,
            }}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/70"></div>
          </div>
        ))}

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🏆 Award-Winning Training Institute
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Master CAD & IT Skills That
              <br />
              Companies Actually Need
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              20+ years of excellence in technical training. From AutoCAD to
              Full Stack Development, we've got you covered.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition">
                Book Free Demo
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition">
                View All Courses
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2 text-yellow-400" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-yellow-400" />
                <span>10,000+ Alumni</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-yellow-400" />
                <span>20+ Centers</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-yellow-400" />
                <span>50+ Courses</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevImageSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition z-20"
        >
          <ChevronLeft className="w-6 h-6 text-blue-700" />
        </button>
        <button
          onClick={nextImageSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition z-20"
        >
          <ChevronRight className="w-6 h-6 text-blue-700" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setImageSlide(idx)}
              className={`h-3 rounded-full transition ${
                idx === imageSlide ? "bg-yellow-400 w-12" : "bg-white/60 w-3"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Course Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
          <button className="text-blue-700 font-semibold hover:text-blue-800 transition">
            View All Courses →
          </button>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-blue-700" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const idx = (currentSlide + offset) % courses.length;
              const course = courses[idx];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <course.icon className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {course.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    {course.mode}
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Industry-relevant curriculum</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Hands-on projects</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Placement assistance</span>
                    </li>
                  </ul>
                  <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                    Enroll Now
                  </button>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-blue-700" />
          </button>
        </div>
      </div>
    </div>
  );

  // Option 3: Hero with Embedded Course Preview
  const Option3 = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        {/* Hero Background with Image Carousel */}
        <div className="relative h-[500px] overflow-hidden">
          {heroImages.map((image, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(${(idx - imageSlide) * 100}%)`,
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-blue-900/80"></div>
            </div>
          ))}

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Build Your Future with
                <br />
                Expert Technical Training
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                From CAD design to digital marketing, learn job-ready skills
                from industry experts at India's premier training institute.
              </p>
              <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold mb-8">
                <Award className="w-5 h-5 mr-2" />
                ISO 9001:2015 Certified • Since 2004
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <button
            onClick={prevImageSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition z-20"
          >
            <ChevronLeft className="w-6 h-6 text-blue-700" />
          </button>
          <button
            onClick={nextImageSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition z-20"
          >
            <ChevronRight className="w-6 h-6 text-blue-700" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setImageSlide(idx)}
                className={`h-3 rounded-full transition ${
                  idx === imageSlide ? "bg-yellow-400 w-12" : "bg-white/60 w-3"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overlapping Course Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Popular Courses
              </h2>
              <div className="flex gap-4">
                <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                  Book Free Demo
                </button>
                <button className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {courses.slice(0, 3).map((course, idx) => (
                <div
                  key={idx}
                  className="border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-400 hover:shadow-lg transition group"
                >
                  <div className="bg-gradient-to-br from-blue-700 to-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <course.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.name}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{course.mode}</span>
                  </div>
                  <button className="w-full bg-yellow-400 text-blue-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Info Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-blue-50 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">50+</div>
                <div className="text-gray-600 text-sm">Courses Offered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">10K+</div>
                <div className="text-gray-600 text-sm">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">20+</div>
                <div className="text-gray-600 text-sm">Training Centers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">100%</div>
                <div className="text-gray-600 text-sm">Placement Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Course Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
              >
                <course.icon className="w-10 h-10 text-blue-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.name}
                </h3>
                <div className="text-gray-600 text-sm mb-4">
                  {course.duration} • {course.mode}
                </div>
                <button className="w-full border-2 border-blue-700 text-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Option Selector */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setSelectedOption(1)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedOption === 1
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Option 1: Split Hero
            </button>
            <button
              onClick={() => setSelectedOption(2)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedOption === 2
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Option 2: Full-Width + Carousel
            </button>
            <button
              onClick={() => setSelectedOption(3)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedOption === 3
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Option 3: Overlapping Cards
            </button>
          </div>
        </div>
      </div>

      {/* Render Selected Option */}
      {selectedOption === 1 && <Option1 />}
      {selectedOption === 2 && <Option2 />}
      {selectedOption === 3 && <Option3 />}
    </div>
  );
};

export default HeroOptions;
