import { PostItem } from "../lib/types";
import Image from "next/image";
import Analytics from "./svg/Analytics";
import Dashboard from "./svg/Dashboard";
import Planet from "./svg/Planet";
import Share from "./svg/Share";
import Graph from "./svg/Graph";
import Wrench from "./svg/Wrench";
import React from "react";
const iconLookup: { [id: string]: any } = {
  wrench: <Wrench />,
  dashboard: <Dashboard />,
  planet: <Planet />,
  share: <Share />,
  graph: <Graph />,
  analytics: <Analytics />,
};
const interestCard = (postData: PostItem) => {
  const icon = iconLookup[postData.icon.toLowerCase()];

  return (
    <div className="interest-card" key={`${postData.title}-card`}>
      <div className="interest-icon-container">
        {iconLookup[postData.icon.toLowerCase()]}
      </div>
      <h4>{postData.title}</h4>
      <p>{postData.content}</p>
    </div>
  );
};

export default function Interests({
  interestData,
}: {
  interestData: PostItem[];
}): JSX.Element {
  const interests = interestData.map((postData) => interestCard(postData));
  return <div className="interest-grid">{interests}</div>;
}
