import GlassCard from "../Obsolete/GlassCard";
import { HEADER_CONFIG } from "../config/headerConfig";
import { Dict, HeaderItem } from "../lib/types";
import Link from "next/link";

// From the label and path generate the JSX we need to create the navLinks
function navLinks(label: string, path: string): JSX.Element {
  return (
    <div className="" key={`${label}-navItem`}>
      <Link href={path}>
        <a>{label}</a>
      </Link>
    </div>
  );
}
// Take the defined HEADER_CONFIG and return an object that
// includes the JSX element for each.
function navbarEntries(config: Dict<HeaderItem>): Array<JSX.Element> {
  return Object.keys(config).map((key) => {
    const { label, path } = config[key];
    return navLinks(label, path);
  });
}

const Header = (): JSX.Element => {
  const name = "Dr. Richard Cool";
  const headerCount = Object.keys(HEADER_CONFIG).length;
  return (
    <div className=" h-[100px] top-0 flex flex-row items-center z-[50] w-inherit bg-black">
      <div
        className={
          "hidden md:grid grid-cols-5 grow md:text-l lg:text-xl xl:text-3xl  pl-10 col-span-3  font-bold"
        }
      >
        {navbarEntries(HEADER_CONFIG)}
      </div>
      <div className="basis-full md:basis-1/3  text-xl md:text-xl lg:text-3xl xl:text-5xl pr-10  col-span-5 md:col-span-2 text-center md:text-right text-purple-900 font-extrabold ">
        {name}
      </div>
    </div>
  );
};
export default Header;
