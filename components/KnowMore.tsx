import React, { useEffect, useState } from "react";
import Button from "./Button";
import getResumeUrl from "../lib/getResumeUrl";
import Link from "next/link";
import { getPagePathFromKey } from "../config/headerConfig";

export default function KnowMore(): JSX.Element {
  const [subButtonsVisible, setButtonVisible] = useState(false);

  const buttonToggle = () => {
    console.log(subButtonsVisible);
    if (!subButtonsVisible) {
      document.addEventListener("click", () => setButtonVisible(true));
      setButtonVisible(false);
      return;
    }
    document.removeEventListener("click", () => setButtonVisible(false));
  };

  const visibilityClass = `${subButtonsVisible ? "visible" : "hidden"}`;
  function KnowMoreButton(): JSX.Element {
    const yesParams = {
      className: `yes-btn btn cta-btn ${visibilityClass}`,
      content: "YES!",
      onClick: () => buttonToggle,
    };
    return <Button {...yesParams} />;
  }

  function ResumeButton(): JSX.Element {
    const resumeUrl = getResumeUrl();
    const resumeParams = {
      className: `resume-btn btn cta-btn ${visibilityClass}`,
      onClick: () => (window.location.href = resumeUrl),
      content: "My Resume",
    };
    return <Button {...resumeParams} />;
  }

  function ContactMeButton(): JSX.Element {
    const path = getPagePathFromKey("contact");
    if (path === undefined) {
      console.error(
        "Oops there seemed to be a problem locating my contact information"
      );
      return <></>;
    }
    return (
      <Link href={path}>
        <a className={"contact-me-link cta-link"}>Send me a message</a>
      </Link>
    );
  }

  return (
    <div>
      <p>Would you like to know more?</p>

      {/* This will be a button that serves as a call to action from
    this question. */}
      <div className={"know-more-btn-holder"}>
        <KnowMoreButton />
      </div>
      {subButtonsVisible ? (
        <div className="button-expander-holder">
          <ResumeButton />
          <ContactMeButton />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
