"use client";

import BlogList from "../blogs/BlogList";

export default function BlogSection({ blogs }) {
  if (!blogs?.length) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Learn, Explore & Stay Updated
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Insights, tips, and guides to help you make better career and learning
          decisions.
        </p>

        <div className="mt-12">
          <BlogList blogs={blogs} className="grid-cols-1 md:grid-cols-3" />
        </div>
      </div>
    </section>
  );
}
