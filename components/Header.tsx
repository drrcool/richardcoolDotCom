import { Component } from "react";
import { HEADER_CONFIG } from "../config/headerConfig";
import { Dict, HeaderItem, PageList } from "../types/commonTypes";
import Link from "next/link";

// From the label and path generate the JSX we need to create the navlinks
function navLinks(label: string, path: string): JSX.Element {
  return (
    <div className="">
      <Link href={path}>
        <a>{label}</a>
      </Link>
    </div>
  );
}
// Take the defined HEADER_CONFIG and return an object that
// includes the JSX element for each.
type PageListStrings = keyof typeof PageList;
function navbarEntries(config: Dict<HeaderItem>): Array<JSX.Element> {
  const navLinkEntries: Array<JSX.Element> = Object.keys(config).map((key) => {
    const label = config[key].label;
    const path = config[key].path;
    return navLinks(label, path);
  });
  return navLinkEntries;
}

type HeaderProps = {
  page: string;
};

const Header = ({ page }: HeaderProps): JSX.Element => {
  const name = "Dr. Richard Cool";
  const headerCount = Object.keys(HEADER_CONFIG).length;
  return (
    <div
      className={
        "fixed w-full h-[100px] top-0 flex flex-row flex-auto items-center place-content-center bg-black"
      }
    >
      <div className={"grid grid-cols-5 grow text-3xl  pl-10 col-span-3 "}>
        {navbarEntries(HEADER_CONFIG)}
      </div>
      <div className="basis-1/3 text-6xl pr-10  col-span-2 text-right text-blue-500">
        {name}
      </div>
    </div>
  );
};

export default Header;
