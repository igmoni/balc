import React from "react";
import { texts, phrases, aboutCards } from "@/data/about";

const About = () => {
  return (
    <div className="mt-10">
      <div className="my-16">
        <h1 className="text-2xl text-center font-bold tracking-tight">
          BALC CADD
        </h1>
        <div className="flex flex-col items-start gap-5 mt-5">
          {texts.map((text, idx) => (
            <p key={idx} className="text-base text-justify">
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="my-16">
        <h2 className="text-2xl text-center list-disc font-bold tracking-tight">
          Why choose BALC?
        </h2>
        <ul className="list-disc text-justify pl-5 flex flex-col gap-3 mt-5">
          {Object.entries(phrases).map(([title, description]) => (
            <li key={title}>
              <span className="font-semibold">{title}:</span> {description}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-20">
        {aboutCards.map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="group bg-white rounded-2xl p-8 w-[620px] h-[250px] shadow-acternity border border-gray-100 hover:shadow-xl transition"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 mb-5 group-hover:scale-105 transition">
              <Icon size={28} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              {title}
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
