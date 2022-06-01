import React from "react";
import Image from "next/image";
import heroPic from "../public/image/hero-portrait.jpg";

export default function HeroPortrait() {
  return (
    <Image
      src={heroPic}
      alt="Hero portrait"
      width={600}
      height={800}
      objectFit="cover"
      layout="responsive"
    />
  );
}
