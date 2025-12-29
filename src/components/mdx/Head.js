import Image from "next/image";
import React from "react";

const Head = ({ title, image }) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto md:min-h-[400px] relative m-3 rounded-md overflow-hidden">
      <Image
        src={image}
        width={1200}
        height={550}
        alt={title}
        className="w-full h-full object-cover object-top rounded-lg"
      />
    </div>
  );
};

export default Head;
