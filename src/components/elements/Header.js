import React from "react";
import { Link } from "@reach/router";
import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

//1-how to create styled components
//2-learn how to handle props in styled component
//3-create global style with styled componenemts

//StyledComponents
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from "../styles/StyledHeader";

function Header() {
  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
      </div>
    </StyledHeader>
  );
}

export default Header;
