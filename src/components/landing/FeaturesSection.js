"use client";
import { Monitor, Users, Cpu, MapPin, Headphones, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Modern Computer Labs",
    desc: "Fully-equipped labs with licensed software and high-performance systems.",
    icon: Cpu,
  },
  {
    title: "Expert Trainers",
    desc: "Industry professionals with real-time project experience.",
    icon: Users,
  },
  {
    title: "Online & Offline Modes",
    desc: "Flexible batch timings and learning modes to suit your schedule.",
    icon: Monitor,
  },
  {
    title: "Multiple Branches",
    desc: "Easy access with 20+ locations across Bengaluru and beyond.",
    icon: MapPin,
  },
  {
    title: "Doubt-Solving Support",
    desc: "Dedicated support for queries, assignments, and project guidance.",
    icon: Headphones,
  },
  {
    title: "Certification Included",
    desc: "Get recognized certificates on successful course completion.",
    icon: CheckCircle2,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          What You Get With Us
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Facilities, features, and support designed to help you learn better
          and grow faster.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 border hover:border-blue-200 hover:shadow-md transition"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-700 mb-3">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
