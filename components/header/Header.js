import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-awesome-styled-grid";
import Section from "../section/Section";
import Image from "next/image";
import usgPic from "../../public/ultrasound.jpg";
import Heading from "../Heading/Heading";

export default function Header() {
  return (
    <Section backgroundColour={"purple"}>
      <Container>
        <Row>
          <Col md={4}>
            <Heading>Gabinet Lekarski Grzegorz Pietruszka</Heading>
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
  );
}
