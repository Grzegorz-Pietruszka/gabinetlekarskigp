import React from "react";
import { Row, Col } from "react-awesome-styled-grid";
import Section from "../section/Section";

export default function ContactInfo() {
  return (
    <Section>
      <Row>
        <Col md={6}>
          <p>
            W celu umówienia się na wizytę proszę o kontakt na numer: 602 510
            715
          </p>
        </Col>
      </Row>
    </Section>
  );
}
