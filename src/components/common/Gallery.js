import React from "react";
import Container from "./Container";
import { tollagte, kengeri, konankunte, ullal } from "@/config/gallery";
import Image from "next/image";

const Gallery = () => {
  return (
    <Container className={"p-10"}>
      <Heading branch={"BALC Tollagte"} />
      <div className="py-10 items-center justify-center grid grid-cols-1 md:grid-cols-4 gap-10">
        {tollagte.map((img, idx) => (
          <Image
            src={img}
            key={img}
            width={350}
            height={250}
            alt={`Tollgate img ${idx}`}
            className={"object-cover rounded-lg"}
          />
        ))}
      </div>
      <Heading branch={"BALC Kengeri Upanagara"} />
      <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-10 place-items-center">
        {kengeri.map((img, idx) => (
          <div
            key={img}
            className="relative w-[290px] h-[250px] overflow-hidden rounded-lg"
          >
            <Image
              src={img}
              alt={`Konankunte img ${idx}`}
              fill
              className={`object-cover ${img === "ken6.jpeg" ? "object-top" : ""}`}
              sizes="350px"
            />
          </div>
        ))}
      </div>

      <Heading branch={"BALC Konankunte Cross"} />
      <div className="py-10 items-center justify-center grid grid-cols-1 md:grid-cols-4 gap-10">
        {konankunte.map((img, idx) => (
          <Image
            src={img}
            key={img}
            width={350}
            height={250}
            alt={`Konankunte img ${idx}`}
            className={"object-cover rounded-lg"}
          />
        ))}
      </div>
      <Heading branch={"BALC Ullal Road"} />
      <div className="py-10 items-center justify-center grid grid-cols-1 md:grid-cols-4 gap-10">
        {ullal.map((img, idx) => (
          <Image
            src={img}
            key={img}
            width={350}
            height={250}
            alt={`Ullal img ${idx}`}
            className={"object-cover rounded-lg"}
          />
        ))}
      </div>
    </Container>
  );
};

const Heading = ({ branch }) => {
  return <h2 className="font-bold text-3xl">{branch}:</h2>;
};

export default Gallery;
