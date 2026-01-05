import React from "react";
import Container from "./Container";
import { tollagte, kengeri, konankunte, ullal } from "@/config/gallery";
import Image from "next/image";

const Gallery = () => {
  return (
    <Container className={"p-10"}>
      <Heading branch={"BALC Tollagte"} />
      <div className="pt-10">
        {tollagte.map((img, idx) => {
          <Image
            key={img}
            width={350}
            height={250}
            alt={`Tollgate img ${idx}`}
            className={"object-cover rounded-lg"}
          />;
        })}
      </div>
      <Heading branch={"BALC Kengeri Upanagara"} />
      <div className="pt-10">
        {kengeri.map((img, idx) => {
          <Image
            key={img}
            width={350}
            height={250}
            alt={`Kengeri img ${idx}`}
            className={"object-cover rounded-lg"}
          />;
        })}
      </div>
      <Heading branch={"BALC Konankunte Cross"} />
      <div className="pt-10">
        {konankunte.map((img, idx) => {
          <Image
            key={img}
            width={350}
            height={250}
            alt={`Konankunte img ${idx}`}
            className={"object-cover rounded-lg"}
          />;
        })}
      </div>
      <Heading branch={"BALC Ullal Road"} />
      <div className="pt-10">
        {ullal.map((img, idx) => {
          <Image
            key={img}
            width={350}
            height={250}
            alt={`Ullal img ${idx}`}
            className={"object-cover rounded-lg"}
          />;
        })}
      </div>
    </Container>
  );
};

const Heading = ({ branch }) => {
  return <h2 className="font-bold text-3xl">{branch}:</h2>;
};

export default Gallery;
