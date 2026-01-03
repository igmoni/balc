"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function BlogList({ blogs, className }) {
    if (!blogs?.length) return null;

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-10", className)}>
            {blogs.map((item) => (
                <motion.div
                    key={item.slug}
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="shadow-acternity hover:shadow-lg rounded-lg overflow-hidden pb-5 bg-white"
                >
                    <Link href={`/blog/${item.slug}`}>
                        <div className="relative w-full h-56">
                            <Image
                                src={item.coverImage}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2 pt-3">
                            <h2 className="px-5 text-xl font-semibold hover:underline">
                                {item.title}
                            </h2>
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
    );
}
