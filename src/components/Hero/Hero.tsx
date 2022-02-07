import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero: React.FC = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Marcos Garcia
        </SectionTitle>
        <SectionText>Full Stack Development & Digital Marketing</SectionText>
        <Button
          onClick={() => {
            window.location.href = "https://google.com";
          }}
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;