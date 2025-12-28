"use client";

import Container from "../common/Container";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "../ui/badge";

const BlogSection = ({ tags, filtered, blogs, activeTag }) => {
  const getTagPostCount = (tag) => {
    return blogs.filter((blog) =>
      blog.tags?.some((blogTag) => blogTag.toLowerCase() === tag.toLowerCase())
    ).length;
  };

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

      <div className="my-8">
        <p className="font-semibold text-xl">Popular Tags</p>

        <ul className="flex gap-4 items-center mt-3 flex-wrap">
          {/* ✅ Show Clear Filter ONLY if a tag is selected */}
          {activeTag && (
            <Link href="/blogs">
              <Badge
                variant="destructive"
                className="cursor-pointer rounded-sm"
              >
                Clear filter ✕
              </Badge>
            </Link>
          )}

          {/* Tags */}
          {tags.map((tag, idx) => {
            const postCount = getTagPostCount(tag);
            const isSelected = activeTag?.toLowerCase() === tag.toLowerCase();

            return (
              <Link key={idx} href={`/blogs?tag=${tag}`}>
                <Badge
                  variant={isSelected ? "default" : "outline"}
                  className="capitalize cursor-pointer rounded-sm hover:bg-accent hover:text-accent-foreground"
                >
                  {tag} {postCount}
                </Badge>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filtered.map((item) => (
          <motion.div
            key={item.slug}
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="shadow-acternity hover:shadow-lg rounded-lg overflow-hidden pb-5 bg-white"
          >
            <Link href={`/blogs/${item.slug}`}>
              <div className="relative w-full h-56">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 pt-3">
                <h2 className="px-5 text-xl font-semibold hover:underline">{item.title}</h2>
                <p className="px-5 text-sm text-muted-foreground truncate">
                  {item.description}
                </p>
                <p className="px-5 text-sm text-muted-foreground flex justify-between items-center">
                  <span>{item.readingTime}</span>
                  <span>{new Date(item.date).toDateString()}</span>
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default BlogSection;
