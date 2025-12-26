"use client";
import React from "react";
import Container from "./Container";
import { details, links } from "@/config/Footer";
import { Button } from "../ui/button";
import Link from "next/link";
import Facebook from "@/svgs/Facebook";
import Instagram from "@/svgs/Instagram";
import LinkedIn from "@/svgs/Linkedin";
import X from "@/svgs/X";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 30, filter: "blur(10px)", opacity: 0 }}
      whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <Container className="text-white  p-5 sm:p-7 mt-20 mb-5 sm:my-32 bg-linear-to-br from-blue-700 via-blue-600 to-blue-800 rounded-xl w-full">
        {/* TOP CTA */}
        <div
          className="bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(59,130,246,0.15))] 
          border border-white/40 rounded-xl p-5 w-full
          flex flex-col sm:flex-row gap-4 sm:gap-0
          items-start sm:items-center justify-between"
        >
          <div>
            <h1 className="text-2xl font-bold tracking-wider">BALC</h1>
            <p className="text-[#c7d2fe]">
              Empowering skills. Engineering futures
            </p>
          </div>

          <Button
            variant="outline"
            className="bg-white text-blue-700 font-semibold rounded-full px-4 py-2 hover:bg-accent hover:text-blue-600"
          >
            <a href="/brochure.pdf">Get brochure</a>
          </Button>
        </div>

        <div className="h-px w-full bg-white mt-6" />

        {/* MAIN FOOTER CONTENT */}
        <div className="py-6 flex flex-col lg:flex-row gap-10">
          {/* LEFT */}
          <div className="w-full lg:w-1/3">
            <div className="pb-4 flex flex-col gap-1">
              <h2 className="font-semibold text-xl underline underline-offset-4 mb-4">
                {details[0].title}:
              </h2>
              <p className="text-[#c7d2fe]">- {details[0].address}</p>
              <p className="text-[#c7d2fe]">{details[0].phone}</p>
              <p className="text-[#c7d2fe]">{details[0].mail}</p>
            </div>

            <div
              className="flex flex-col gap-2 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(59,130,246,0.15))] 
              border border-white/40 rounded-xl p-5"
            >
              <h3 className="text-xl font-semibold">Start Learning</h3>
              <p>Upgrade your career with industry-ready training.</p>
              <Button
                variant="outline"
                className="bg-white w-fit text-blue-700 font-semibold rounded-full px-4 py-2 hover:bg-accent hover:text-blue-600"
              >
                <Link href="/courses">Explore courses</Link>
              </Button>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="font-semibold text-xl mb-4 underline underline-offset-4">
              Campuses
            </h2>
            {details.slice(1, 9).map((item, idx) => (
              <p key={idx}>
                {item.title} –{" "}
                <span className="text-[#c7d2fe]">{item.phone}</span>
              </p>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-2  md:min-w-[200px] sm:w-auto">
            <h3 className="text-xl font-semibold underline mb-4 underline-offset-4">
              Explore
            </h3>
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-[#c7d2fe] hover:underline underline-offset-4 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-white mt-4" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between py-3 text-center sm:text-left">
          <p className="text-sm sm:text-lg">
            &copy; {new Date().getFullYear()} BALC. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/balcsunkadakatte_h_o/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-white hover:text-yellow-300 hover:scale-110 transition-all" />
            </a>

            <a
              href="https://www.facebook.com/BALCComputerTrainingCentre/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="w-6 h-6 sm:w-7 sm:h-7 text-white hover:text-yellow-300 hover:scale-110 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/company/balccadd/?originalSubdomain=in"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="w-6 h-6 sm:w-7 sm:h-7 text-white hover:text-yellow-300 hover:scale-110 transition-all" />
            </a>

            <a
              href="https://x.com/balc_karnataka"
              target="_blank"
              rel="noreferrer"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-white hover:text-yellow-300 hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Footer;
