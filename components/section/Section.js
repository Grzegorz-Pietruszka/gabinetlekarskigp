import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  background: ${(props) =>
    props.backgroundColour ? props.backgroundColour : "#fff"};
  width: 100%;
  height: 100%;
  padding: 2em 0;
  margin: auto 0;
`;

export default function Section({ children, backgroundColour }) {
  return (
    <StyledSection backgroundColour={backgroundColour}>
      {children}
    </StyledSection>
  );
}
