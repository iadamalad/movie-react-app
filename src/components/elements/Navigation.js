import React from "react";
import { StyledNavigation } from "../styles/StyledNavigation";
import { Link } from "@reach/router";

const Navigation = ({ movieName }) => (
  <StyledNavigation>
    <div className="navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>|</p>
      <p>{movieName}</p>
    </div>
  </StyledNavigation>
);

export default Navigation;
