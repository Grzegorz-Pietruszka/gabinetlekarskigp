import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 3em;
  color: #033537;
`;

export default function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}
