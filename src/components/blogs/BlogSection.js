"use client";

import Container from "../common/Container";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { blogs } from "@/config/blogs";

const BlogSection = () => {
  return (
    <Container className="my-20">
      <div>
        <h1 className="mt-16 text-lg md:text-3xl font-bold text-center">
          Blogs & Insights
        </h1>
        <h2 className="mt-3 text-sm md:text-lg text-center">
          Discover tips, trends, and knowledge shared by our experts.
        </h2>
      </div>

      <Separator className="border my-5" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="shadow-acternity hover:shadow-lg rounded-lg overflow-hidden bg-white"
          >
            <Link href={`/blogs/${item.slug}`}>
              <div className="relative w-full h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="px-5 py-4 text-xl font-semibold">
                {item.title}
              </h2>
            </Link>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default BlogSection;
