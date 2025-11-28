"use client";

const posts = [
  {
    title: "How CAD Skills Can Boost Your Engineering Career",
    excerpt:
      "Learn why CAD and BIM tools are becoming must-have skills for modern engineers and architects.",
    tag: "Career Tips",
    readTime: "5 min read",
  },
  {
    title: "Digital Marketing Skills That Companies Actually Look For",
    excerpt:
      "From performance ads to analytics, discover what makes you stand out in digital marketing interviews.",
    tag: "Digital Marketing",
    readTime: "6 min read",
  },
  {
    title: "Why SAP Consultants Are in High Demand",
    excerpt:
      "Understand the SAP ecosystem and how the right training can help you become job-ready in this space.",
    tag: "SAP / ERP",
    readTime: "4 min read",
  },
];

export default function BlogSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg border p-6 transition cursor-pointer"
            >
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                {post.tag}
              </span>
              <h3 className="mt-3 font-semibold text-gray-900 text-lg">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
              <div className="mt-4 text-xs text-gray-500 flex justify-between items-center">
                <span>{post.readTime}</span>
                <span className="text-blue-700 font-semibold text-xs">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
