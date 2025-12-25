'use client'
import React from "react";
import Container from "../common/Container";
import { Separator } from "../ui/separator";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import { motion } from 'motion/react'

const BlogSection = () => {
  return (
    <Container className="my-20">
      <div>
        <h1 className="mt-16 text-lg md:text-3xl font-bold text-center">
          Blogs & Insights
        </h1>
        <h2 className="mt-3 text-sm md:text-lg  text-center ">
          Discover tips, trends, and knowledge shared by our experts to help you
          learn, grow, and stay ahead in your career.
        </h2>
      </div>
      <Separator className={"border my-5"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {blogs.map((item, idx) => (
    <motion.div initial={{ y: 0 }} whileHover={{ y: -5}} transition={{ duration: 0.5}}
      key={idx}
      className="shadow-acternity hover:shadow-lg rounded-lg overflow-hidden bg-white"
    >
      {/* Image wrapper */}
      <div className="relative w-full h-56">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <h2 className="px-5 py-4 text-xl font-semibold">
        {item.title}
      </h2>
    </motion.div>
  ))}
</div>

    </Container>
  );
};

export default BlogSection;
