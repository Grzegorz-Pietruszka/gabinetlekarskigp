import React from "react";
import styled from "styled-components";

const StyledIndex = styled.h3`
  color: blue;
`;

const StyledTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-weight: 300;
  color: #033537;
`;

export default function Service({ service, index }) {
  return (
    <>
      <StyledIndex>{index}</StyledIndex>
      <StyledTitle>{service}</StyledTitle>
    </>
  );
}
