import styled from "styled-components";
import HeroPortrait from "./HeroPortrait";
export default function HeroPage(): JSX.Element {
  const textHeadline = (
    <div>
      <p>Enabling data-driven business decisions</p>
    </div>
  );
  const textSubHeadLine = (
    <div>
      <div>
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

  const nameText = (
    <>
      <div> Richard Cool</div>
      <div> PhD </div>
    </>
  );

  const affiliationText = (
    <>
      <div> Senior Data Scientist </div>
      <div> Netflix </div>
    </>
  );
  const missionStatement = (
    <>
      <div> RIch and </div>
      <p> Famouse</p>
    </>
  );
  const HeroPageContainer = styled.div`
    height: 90vh;
    width: 100%;
    position: absolute;
    top: 10vh;
    background-color: ${(props) => props.theme.colors.sectionBackground};
  `;

  return (
    <HeroPageContainer>
      {nameText}
      {affiliationText}
      {textHeadline}
      <HeroPortrait />
      {textSubHeadLine}
      {missionStatement}
    </HeroPageContainer>
  );
}
