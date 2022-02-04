import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer: React.FC = () => {
  return (
    <>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href='tell:778-323-2829'>+1 778 323 2829</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:yamgarcia.ca@gmail.com'>
              yamgarcia.ca@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan> Vancouver - BC </Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href='https://github.com/yamgarcia'>
              <AiFillGithub size='3rem' />
            </SocialIcons>

            <SocialIcons href='https://www.linkedin.com/in/marcos-g/'>
              <AiFillLinkedin size='3rem' />
            </SocialIcons>

            <SocialIcons href='https://www.instagram.com/yanmaxbr/'>
              <AiFillInstagram size='3rem' />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
