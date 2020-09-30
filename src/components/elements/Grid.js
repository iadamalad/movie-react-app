import { checkPropTypes } from "prop-types";
import React from "react";
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";
//instead of prop, you can have {header, children} which is destructuring of prop
function Grid(props) {
  return (
    <StyledGrid>
      <h1>{props.header}</h1>
      <StyledGridContent>{props.children}</StyledGridContent>
    </StyledGrid>
  );
}

export default Grid;
