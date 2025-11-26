import React from "react";
import Container from "./Container";
import { details } from "@/data/Footer";
import { Button } from "../ui/button";
import { Link } from "next-view-transitions";

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];
  return (
    <Container className={"text-white p-7 my-32 bg-blue-700 rounded-md w-full"}>
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
      <div className=" py-5 flex">
        <div className="w-1/3">
          <div className="pb-3 flex flex-col gap-1">
            <h2 className="font-semibold text-xl underline underline-offset-4 ">
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
            <p>
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
        <p>&copy; {new Date().getFullYear()} BALC. All rights reserved.</p>
        <div></div>
      </div>
    </Container>
  );
};

export default Footer;
