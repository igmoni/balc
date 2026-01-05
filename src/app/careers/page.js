"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import Container from "@/components/common/Container";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Loading...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data?.success) {
        setStatus("Success");
        toast.success("Application sent successfully!");
        e.target.reset();
      } else {
        setStatus("Error");
        toast.error("Application could not be sent.");
      }
    } catch (err) {
      setStatus("Error");
      toast.error("Something went wrong. Try again.");
    }

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <Container className="py-16">
      <div className="max-w-3xl mx-auto p-6 pb-0 bg-white rounded-lg">
        <h2 className="text-3xl font-bold text-center">Join Our Team</h2>
        <p className="text-center text-gray-600 mt-4 mb-8">
          Apply now to be part of our expert faculty and support team. Fill in
          your details below and our team will get in touch soon.
        </p>
      </div>

      <Separator className="my-6" />

      <div className="max-w-7xl bg-blue-50 p-6 rounded-xl mx-auto">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-6 max-w-xl p-8 mx-auto bg-white rounded-xl shadow-acternity"
        >
          <div className="flex flex-col gap-5">
            {/* Full Name */}
            <div>
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Position */}
            <div>
              <label className="text-gray-700 font-medium">
                Position You’re Applying For
              </label>
              <input
                type="text"
                name="position"
                required
                placeholder="e.g., Trainer, Admin, Support"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Resume */}
            <div>
              <label className="text-gray-700 font-medium">Upload Resume</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="mt-1 block cursor-pointer "
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-700 font-medium">
                Message / Cover Letter
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Write a short message (optional)"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Status */}
            {status && (
              <p className="text-center text-sm text-gray-600">{status}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <Send className="w-5 h-5" />
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Page;
