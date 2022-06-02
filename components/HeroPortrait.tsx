import React from "react";
import Image from "next/image";
import heroPic from "../public/image/hero-portrait.jpg";

export default function HeroPortrait() {
  return (
    <div className="my-50 max-h-full min-h-1/2">
      <div className=" w-[32rem] mr-auto ml-auto basis-1/2 h-1/4">
        <Image
          src={heroPic}
          height={"4000px"}
          width={"3000px"}
          alt="Hero portrait"
          layout="responsive"
          objectFit="contain"
          objectPosition={"50% 50%"}
        />
      </div>
    </div>
  );
}
