"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import Container from "@/components/common/Container";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const page = () => {
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
      if (data.success) {
        setStatus("success");
        toast.success("Message sent!");
      } else {
        setStatus("Error");
        toast.error("Message couldn't be sent!");
      }
    } catch {
      setStatus("Error");
      toast.error("Error sending message!");
    }

    setTimeout(() => setStatus(null), 4000);
  };
  return (
    <Container className={"py-16"}>
      <div className="max-w-3xl mx-auto p-6 pb-0 bg-white rounded-lg">
        <h2 className="text-3xl font-bold text-center">Join Our Team</h2>
        <p className="text-center text-gray-600 mt-4 mb-8">
          Apply now to be part of our expert faculty and support team. Fill in
          your details below and our team will get in touch soon.
        </p>
      </div>
      <Separator className={"border my-5"} />

      <div className="max-w-7xl bg-blue-50 p-5 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-xl p-8 mx-auto shadow-acternity bg-white rounded-xl"
          encType="multipart/form-data rounded-lg"
        >
          <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col items-start w-full ">
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border shadow-acternity mt-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <label className="text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border shadow-acternity mt-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <label className="text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full border shadow-acternity mt-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <label className="text-gray-700 font-medium">
                Position You’re Applying For
              </label>
              <input
                type="text"
                id="position"
                placeholder="e.g., Trainer, Admin, Support"
                className="w-full border shadow-acternity mt-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <label className="text-gray-700 font-medium">Upload Resume</label>
              <input
                type="file"
                name="resume"
                className="mt-1 w-fit p-1 pl-3 text-gray-700 shadow-acternity rounded-lg"
                accept=".pdf,.doc,.docx"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <label className=" text-gray-700 font-medium mb-1">
                Message / Cover Letter
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write a short message (optional)"
                className="w-full px-4 py-3 shadow-acternity rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <Send className="w-5 h-5" />
              <span>Submit Application</span>
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default page;
