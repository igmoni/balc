'use client'
import React from "react";
import Container from "./Container";
import { details, links } from "@/data/Footer";
import { Button } from "../ui/button";
import { Link } from "next-view-transitions";
import Facebook from "@/svgs/Facebook";
import Instagram from "@/svgs/Instagram";
import LinkedIn from "@/svgs/Linkedin";
import X from "@/svgs/X";
import { motion } from "motion/react";

const Footer = () => {
  
  return (
    <motion.div initial={{ y: 30, filter: 'blur(10px)', opacity: 0}} whileInView={{ y: 0, filter: 'blur(0px)', opacity: 1}} transition={{ duration: 0.3, ease: 'easeInOut'}} viewport={{ once: true}}>
      <Container
        className={"text-white p-7 my-32 bg-linear-to-br from-blue-700 via-blue-600 to-blue-800 rounded-md w-full"}
      >
        <div
          className="bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(59,130,246,0.15))] 
            border border-white/40 
            rounded-xl 
            p-5 w-full flex items-center justify-between"
        >
          <div>
            <h1 className="text-2xl font-bold tracking-wider">BALC</h1>
            <p className="text-[#c7d2fe]">
              Empowering skills. Engineering futures
            </p>
          </div>
          <div>
            <Button
              variant={"outline"}
              className="bg-white text-blue-700 font-semibold rounded-full px-4 py-2 hover:bg-accent hover:text-blue-600"
            >
              <a href="/brochure.pdf">Get brochure</a>
            </Button>
          </div>
        </div>
        <div className="h-px rounded-full w-full bg-white mt-6 "></div>
        <div className=" py-5 flex ">
          <div className="w-1/3">
            <div className="pb-2 flex flex-col gap-1">
              <h2 className="font-semibold text-xl underline underline-offset-4 mb-6 ">
                {details[0].title}:
              </h2>
              <p className="text-[#c7d2fe]">- {details[0].address}</p>
              <p className="text-[#c7d2fe]"> {details[0].phone}</p>
              <p className="text-[#c7d2fe]">{details[0].mail}</p>
            </div>
            <div
              className="flex flex-col gap-2 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(59,130,246,0.15))] 
            border border-white/40 
            rounded-xl p-5 mr-8"
            >
              <h3 className="text-xl font-semibold">Start Learning</h3>
              <p>Upgrade your career with industry-ready training.</p>
              <Button
                variant={"outline"}
                className="bg-white max-w-52 text-blue-700 font-semibold rounded-full px-4 py-2 hover:bg-accent hover:text-blue-600"
              >
                <Link href={"/courses"}>Explore courses</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="font-semibold text-xl mb-4 underline underline-offset-4">
              Campuses
            </h2>
            {details.slice(1, 9).map((item, idx) => (
              <p key={idx}>
                {item.title} -{" "}
                <span className="text-[#c7d2fe]">{item.phone}</span>{" "}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2 w-3xs ">
            <h3 className="text-xl  font-semibold underline mb-4 underline-offset-4">
              Explore
            </h3>
            {links.map((link, idx) => (
              <Link
                className="text-[#c7d2fe] hover:underline underline-offset-4 transition-all "
                href={link.href}
                key={idx}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="h-px rounded-full w-full bg-white mt-4 "></div>
        <div className="flex items-center justify-between py-3">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} BALC. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/balcsunkadakatte_h_o/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="w-7 h-7 text-white hover:text-yellow-300 hover:scale-110 transition-all" />
            </a>

            <a
              href="https://www.facebook.com/BALCComputerTrainingCentre/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="w-7 h-7 text-white hover:text-yellow-300 hover:scale-110 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/company/balccadd/?originalSubdomain=in"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="w-7 h-7 text-white hover:text-yellow-300 hover:scale-110 transition-all" />
            </a>

            <a
              href="https://x.com/balc_karnataka"
              target="_blank"
              rel="noreferrer"
            >
              <X className="w-7 h-7 text-white hover:text-yellow-300 hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Footer;
