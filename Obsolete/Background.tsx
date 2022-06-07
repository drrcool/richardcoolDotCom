import Image from "next/image";
import backgroundPic from "../public/image/bg2.jpg";

const Background = () => (
  <div className="hidden lg:block lg:fixed h-screen w-screen overflow-hidden -z-10">
    <Image
      alt="Mountains"
      src="/image/hand_drawn.jpeg"
      layout="fill"
      objectFit="cover"
      quality={50}
    />
  </div>
);

export default Background;
