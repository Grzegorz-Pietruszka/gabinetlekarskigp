import React from "react";
import Section from "../section/Section";

export default function Footer() {
  return (
    <Section>
      <footer>
        Grzegorz Pietruszka Gabinet Lekarski &copy; {new Date().getFullYear()}
      </footer>
    </Section>
  );
}
