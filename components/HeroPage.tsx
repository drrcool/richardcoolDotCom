import styles from "./HeroPage.module.css";
import HeroPortrait from "../components/HeroPortrait";
import TextBlock from "../components/TextBlock";

export default function HeroPage(): JSX.Element {
  const textHeadline = (
    <p className="text-white text-6xl">
      Enabling data-driven business decisions
    </p>
  );
  const textSubHeadLine = (
    <p className="text-white text-4xl">
      through
      <span className="text-orange-400"> analytic tooling</span>
      <span className="text-blue-400"> data visualization</span>
      and <span className="text-orange-400"> machine learning</span>
    </p>
  );
  return (
    <div className="h-screen grid  place-items-center absolute top-[100px] w-full">
      <div className="static backdrop-blur-lg  drop-shadow-lg border rounded-xl m-20 h-3/4 w-3/4 bg-zinc-800 bg-opacity-90 grid grid-cols-2 place-items-stretch border-black p-11">
        <div className="">
          {textHeadline}
          {textSubHeadLine}
        </div>

        <HeroPortrait />
      </div>
    </div>
  );
}
