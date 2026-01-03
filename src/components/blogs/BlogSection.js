"use client";

import Container from "../common/Container";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Badge } from "../ui/badge";
import BlogList from "./BlogList";

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
            <Link href="/blog">
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
              <Link key={idx} href={`/blog?tag=${tag}`}>
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

      <BlogList blogs={filtered} />
    </Container>
  );
};

export default BlogSection;
