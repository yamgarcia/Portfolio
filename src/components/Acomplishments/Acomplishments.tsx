import React from "react";
import type { NextPage } from "next";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Acomplishments: NextPage = () => (
  <>
    <Section>
      <SectionTitle> Acomplishments </SectionTitle>
      <Boxes>
        {data.map((card, i) => (
          <Box key={i}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  </>
);

export default Acomplishments;
