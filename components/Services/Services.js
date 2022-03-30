import React from "react";
import { Row, Col } from "react-awesome-styled-grid";
import Section from "../section/Section";
import servicesList from "./ServicesList";

export default function Services() {
  return (
    <Section>
      <Row>
        <Col md={3}>
          <p>Usługi</p>
        </Col>
        <Col md={6}>
          {servicesList.map((service) => (
            <p key={service}>{service}</p>
          ))}
        </Col>
      </Row>
    </Section>
  );
}
