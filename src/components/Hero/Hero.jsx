import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Marcos Garcia
        </SectionTitle>
        <SectionText>
          Full Stack Developer and Long Time Digital Marketer
        </SectionText>
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
