import React from "react";
import type { NextPage } from "next";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ButtonLink } from "./HeroStyles";
import UncontrolledLottie from "../../components/BackgrooundAnimation/AnimationComponent";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Hero: NextPage = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Marcos Garcia
        </SectionTitle>
        <SectionText>
          Full Stack Development & <br />
          Digital Marketing
        </SectionText>
        <Button>
          <ButtonLink
            href='https://github.com/yamgarcia/Portfolio/raw/master/public/resume.pdf'
            download
          >
            Resume
          </ButtonLink>
          <AiOutlineCloudDownload style={{ margin: "5px" }} size={"20px"} />
        </Button>
      </LeftSection>
      <UncontrolledLottie />
    </Section>
  );
};
export default Hero;
