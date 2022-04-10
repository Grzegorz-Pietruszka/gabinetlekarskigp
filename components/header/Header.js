import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-awesome-styled-grid";
import Section from "../section/Section";
import Image from "next/image";
import usgPic from "../../public/ultrasound.jpg";
import Heading from "../Heading/Heading";

const StyledHeader = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Section backgroundColour={"#41b7d8"}>
        <Container align="center" justify="center">
          <Row>
            <Col md={4}>
              <Heading>Gabinet Lekarski</Heading>
              <Heading>Grzegorz Pietruszka</Heading>
            </Col>
            <Col md={4}>
              <Image
                src={usgPic}
                alt="Picture of usg"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </StyledHeader>
  );
}
