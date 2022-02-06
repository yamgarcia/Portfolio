import React from "react";
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

const Technologies: React.FC = () => (
  <>
    <Section id='tech'>
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>Stack MERN Java EE + React</SectionText>
      <List>
        <ListItem>
          <DiReact size='3rem' />
          <ListContainer>
            <ListTitle>Front End</ListTitle>
            <ListParagraph>React.js</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size='3rem' />
          <ListContainer>
            <ListTitle>Back End</ListTitle>
            <ListParagraph>Node and Databases</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size='3rem' />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>Figma</ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </>
);

export default Technologies;
