import React from "react";
import { StyledNavigation } from "../styles/StyledNavigation";

const Navigation = ({ movieName }) => (
  <StyledNavigation>
    <div className="navigation-content">
      <p>Home |</p>
      <p>{movieName}</p>
    </div>
  </StyledNavigation>
);

export default Navigation;
