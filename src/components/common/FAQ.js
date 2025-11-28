"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you provide placement assistance?",
    a: "Yes, we offer 100% placement assistance including interview preparation, resume building, and job referrals through our network.",
  },
  {
    q: "Are the classes online or offline?",
    a: "We provide both options. You can choose fully online, fully offline, or hybrid mode depending on the branch and batch.",
  },
  {
    q: "Is there any eligibility criteria?",
    a: "Most courses require basic computer knowledge. Advanced programs may prefer diploma/degree holders in related fields.",
  },
  {
    q: "Will I get a certificate after completion?",
    a: "Yes, you will receive a course completion certificate from the institute after successfully completing the training and assessments.",
  },
  {
    q: "Can I attend a demo class before joining?",
    a: "Yes, you can request a free counseling session and demo class before taking the final decision.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mt-2 mb-8">
          Have more questions? These might help.
        </p>

        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border rounded-xl overflow-hidden bg-gray-50"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : idx)
                  }
                  className="w-full flex justify-between items-center px-4 py-3 text-left"
                >
                  <span className="font-medium text-gray-900 text-sm md:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-gray-700">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
