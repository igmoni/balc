'use client'
import { motion } from 'motion/react'
import React from "react";
import Container from "../common/Container";
import { contacts } from "@/data/contact";
import { Separator } from "../ui/separator";
import Mail from "@/svgs/Mail";
import { PhoneCallIcon } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // 0.5s delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const ContactUs = () => {
  return (
    <Container>
      <div>
        <h1 className="mt-16 text-lg md:text-3xl font-bold text-center">
          BALC Training Centers
        </h1>
        <p className="mt-3 text-sm md:text-lg  text-center ">
          Contact us across Bengaluru for high-quality, career-oriented
          learning.
        </p>
      </div>

      <Separator className={"border my-5"} />

      <motion.div
        className="grid md:grid-cols-3 grid-cols-1 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contacts.map((contact, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col justify-between rounded-lg border shadow-acternity hover:shadow-lg p-5 h-full bg-white"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            {/* Top content */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold">{contact.title}</h3>
              <p>-&gt; {contact.address}</p>
              <p className="flex gap-2 items-center">
                <PhoneCallIcon className="w-4 h-4" /> {contact.phone}
              </p>
              <p className="flex gap-2 items-center">
                <Mail /> {contact.mail}
              </p>
            </div>

            {/* Bottom map */}
            <div className="w-full h-[200px] mt-3">{contact.map}</div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default ContactUs;
