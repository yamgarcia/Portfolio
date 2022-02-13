import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  HeaderFour,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects: React.FC = () => (
  <>
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ title, description, tags, source, image, id, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree headerTitle>{title}</HeaderThree>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>
                  <HeaderFour headerTitle>Stack</HeaderFour>
                </TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                {visit && <ExternalLinks href={visit}>Demo</ExternalLinks>}
                {source && <ExternalLinks href={source}>Code</ExternalLinks>}
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  </>
);

export default Projects;
