import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ButtonLink } from "./HeroStyles";
import UncontrolledLottie from "../../components/BackgrooundAnimation/AnimationComponent";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { pdf } from "../../constants/constants";

const Hero: React.FC = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Marcos Garcia
        </SectionTitle>
        <SectionText>Full Stack Development & Digital Marketing</SectionText>
        <Button>
          <ButtonLink href={pdf} download>
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
