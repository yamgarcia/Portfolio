import React from "react";
import type { NextPage } from "next";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies: NextPage = () => (
  <>
    <Section id='tech'>
      <SectionDivider />
      <SectionTitle main>Technologies</SectionTitle>
      <SectionText>
        Some of the technologies I have the most experience with
      </SectionText>
      <List>
        <ListItem>
          <DiReact size='3rem' />
          <ListContainer>
            <ListTitle>Front End</ListTitle>
            <ListParagraph>React.js</ListParagraph>
            <ListParagraph>React Native</ListParagraph>
            <ListParagraph>Typescript</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size='3rem' />
          <ListContainer>
            <ListTitle>Back End</ListTitle>
            <ListParagraph>Node</ListParagraph>
            <ListParagraph>Java EE</ListParagraph>
            <ListParagraph>SQL & NoSQL</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size='3rem' />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>Figma</ListParagraph>
            <ListParagraph>Photoshop</ListParagraph>
            <ListParagraph>Illustrator</ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </>
);

export default Technologies;
