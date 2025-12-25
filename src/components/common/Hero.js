"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "../common/Container";
import Image from "next/image";

const Hero = ({ title }) => {
  return (
    <Container
      className={
        "mt-24 relative rounded-lg w-auto h-[200px] md:h-[350px] flex items-center justify-center "
      }
    >
      <Image
        alt="Backgorund Image"
        height={300}
        width={1000}
        className="w-full h-full rounded-lg"
        src={"/courses/bg1.jpg"}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center rounded-lg overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        {/* overlay */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-black/30"
        />

        {/* text */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 text-white text-[40px] md:text-[70px] font-bold"
        >
          {title}
        </motion.h1>
      </motion.div>
    </Container>
  );
};

export default Hero;
