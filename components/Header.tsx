import { duotone } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { useTheme } from "styled-components";
import { HEADER_CONFIG } from "../config/headerConfig";
import { Dict, HeaderItem } from "../lib/types";

interface StyledNavLinkProps {
  isActive?: boolean;
  key?: string;
}
// From the label and path generate the JSX we need to create the navLinks
function NavLinks({
  label,
  path,
}: {
  label: string;
  path: string;
}): JSX.Element {
  const { asPath: currentPath } = useRouter();

  const StyledNavLink = styled.div<StyledNavLinkProps>`
    font-size: 1.8rem;
    flex-basis: 100%;
    font-weight: bold;
    width: max-content;
  `;
  const StyledLinkAnchor = styled.a<StyledNavLinkProps>`
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.activeNavLink
        : props.theme.colors.navLink};
    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.hoverNavLink};
      background-color: transparent;
      text-decoration: underline;
    }
  `;

  return (
    <StyledNavLink key={`${label}-navItem`}>
      <Link href={path}>
        <StyledLinkAnchor isActive={path === currentPath}>
          {label}
        </StyledLinkAnchor>
      </Link>
    </StyledNavLink>
  );
}
// Take the defined HEADER_CONFIG and return an object that
// includes the JSX element for each.
function NavbarEntries(config: Dict<HeaderItem>): Array<JSX.Element> {
  return Object.keys(config).map((key) => {
    const { label, path } = config[key];
    return <NavLinks label={label} path={path} key={label} />;
  });
}

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  --fa-primary-color: ${(props) =>
    props.theme.colors.headerUtilityButtonPrimary};
  --fa-secondary-color: ${(props) =>
    props.theme.colors.headerUtilityButtonSecondary};
  --fa-primary-opacity: ${(props) => (props.theme.theme === "dark" ? 1 : 0.5)};
  --fa-secondary-opacity: ${(props) =>
    props.theme.theme === "light" ? 1 : 0.5};
  font-size: 2rem;
`;
const Header = (): JSX.Element => {
  const icon = <StyledFontAwesomeIcon icon={duotone("eclipse")} />;
  const theme = useTheme();
  console.log(theme);
  const HeaderDiv = styled.div`
    height: 10vh;
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: ${(props) => props.theme.colors.bgPrimary};
  `;
  const NavBarEntries = styled.div`
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  `;
  const HeaderUtilityEntries = styled.div`
    text-align: right;
    font-size: 2rem;
    align-items: center;
    justify-content: flex-end;
    width: 20%;
  `;
  const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
  `;

  return (
    <HeaderDiv>
      <NavBarEntries>{NavbarEntries(HEADER_CONFIG)}</NavBarEntries>
      <HeaderUtilityEntries>
        <Button
          onClick={() =>
            theme.setTheme(theme.theme === "dark" ? "light" : "dark")
          }
        >
          {icon}
        </Button>
      </HeaderUtilityEntries>
    </HeaderDiv>
  );
};
export default Header;
