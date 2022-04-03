import React from "react";
import { Row, Col } from "react-awesome-styled-grid";
import Section from "../section/Section";
import servicesList from "./ServicesList";
import Service from "../Service/Service";

export default function Services() {
  return (
    <Section>
      <Row>
        <Col md={3}>
          <p>Usługi</p>
        </Col>
        <Col md={6}>
          {servicesList.map((service, index) => (
            <Service service={service} index={index} key={service}>
              {service}
            </Service>
          ))}
        </Col>
      </Row>
    </Section>
  );
}
