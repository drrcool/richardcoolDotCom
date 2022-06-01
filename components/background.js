import Image from "next/image";
import backgroundPic from "../public/image/u2b.jpg";

const Background = () => (
  <div className="fixed h-screen w-screen overflow-hidden -z-10">
    <Image
      alt="Mountains"
      src="/image/hand_drawn.jpeg"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
);

export default Background;
