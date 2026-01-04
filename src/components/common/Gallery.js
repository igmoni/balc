import React from "react";
import Container from "./Container";
import { tollagte, kengeri, konankunte, ullal } from "@/config/gallery";

const Gallery = () => {
  return (
    <Container className={"px-10"}>
      <Heading branch={"BALC Tollagte"} />
      <div>
        {tollagte.map(img, (idx) => {
          <Image
            key={img}
            width={350}
            height={250}
            alt={`Tollgate img ${idx}`}
            className={"object-cover"}
          />;
        })}
      </div>
      <Heading branch={"BALC Kengeri Upanagara"} />
      <div>
        {kengeri.map(img, (idx) => {
          <Image
            key={img}
            width={350}
            height={250}
            alt={`Kengeri img ${idx}`}
            className={"object-cover"}
          />;
        })}
      </div>
      <Heading branch={"BALC Konankunte Cross"} />
      <div>
        {konankunte.map(img, (idx) => {
          <Image
            key={img}
            width={350}
            height={250}
            alt={`Konankunte img ${idx}`}
            className={"object-cover"}
          />;
        })}
      </div>
      <Heading branch={"BALC Ullal Road"} />
      <div>
        {ullal.map(img, (idx) => {
          <Image
            key={img}
            width={350}
            height={250}
            alt={`Ullal img ${idx}`}
            className={"object-cover"}
          />;
        })}
      </div>
    </Container>
  );
};

const Heading = ({ branch }) => {
  return <h2 className="font-bold text-3xl">{branch}</h2>;
};

export default Gallery;
