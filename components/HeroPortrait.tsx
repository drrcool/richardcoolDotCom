import Image from "next/image";
import styled from "styled-components";
import heroPic from "../public/image/hero-portrait.jpg";

export default function HeroPortrait() {
  const HeroImageContainer = styled.div`
    width: 600px;
    position: absolute;
    right: 50px;
    top: 10vh;
  `;
  const HeroImage = styled(Image)`
    right: 50px;
    top: 330px;
    border-radius: 10%;
  `;
  return (
    <HeroImageContainer>
      <HeroImage
        className="heroPortrait"
        src={heroPic}
        height={"4000px"}
        width={"3000px"}
        alt="Hero portrait"
        layout="responsive"
        objectFit="contain"
        objectPosition={"50% 50%"}
      />
    </HeroImageContainer>
  );
}
