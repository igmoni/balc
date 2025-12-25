import React from "react";
import { Send } from "lucide-react";
import Container from "@/components/common/Container";

export default function page() {
  return (
    <Container className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
        Join Our Team
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Apply now to be part of our expert faculty and support team. Fill in
        your details below and our HR team will get in touch soon.
      </p>

      <form className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Position Applied For */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="position"
          >
            Position You’re Applying For
          </label>
          <input
            type="text"
            id="position"
            placeholder="e.g., Trainer, Admin, Support"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="resume"
          >
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            className="w-full text-gray-700"
            accept=".pdf,.doc,.docx"
          />
        </div>

        {/* Message */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="message"
          >
            Message / Cover Letter
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write a short message (optional)"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Send className="w-5 h-5" />
          <span>Submit Application</span>
        </button>
      </form>
    </Container>
  );
}
