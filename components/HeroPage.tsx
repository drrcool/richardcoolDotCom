import styles from "./HeroPage.module.css";
import HeroPortrait from "../components/HeroPortrait";
import TextBlock from "../components/TextBlock";
import GlassCard from "../Obsolete/GlassCard";
import { text } from "stream/consumers";

export default function HeroPage(): JSX.Element {
  const textHeadline = (
    <div className="text-blue-900  text-7xl font-extrabold  drop-shadow-lg mb-[5%]">
      <p className="ml-10 w-[80%]">Enabling data-driven business decisions</p>
    </div>
  );
  const textSubHeadLine = (
    <div className="text-blue-900  text-5xl font-bold  drop-shadow-lg w-full shadow-inherit ">
      <div className="whitespace-nowrap absolute mr bottom-[-5rem] right-10 text-right   mt-[5%]">
        <p>
          through
          <span className="text-red-900"> analytic tooling</span>,<br />
          <span className="text-purple-900">
            data visualization
            <br />{" "}
          </span>
          , and <span className="text-red-900"> machine learning</span>
        </p>
      </div>
    </div>
  );

  return (
    <div className=" static flex flex-col  mt-[100px]">
      {textHeadline}
      <HeroPortrait />
      {textSubHeadLine}
    </div>
    // </div>
  );
}
