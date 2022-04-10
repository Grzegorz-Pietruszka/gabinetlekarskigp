import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 4em;
  color: #033537;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export default function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}
