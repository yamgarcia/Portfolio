import React, { useState, useEffect } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  GoUp,
} from "./HeaderStyles";

const Header: NextPage = () => {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Container>
        <Div1>
          <Link href='/'>
            <a
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                marginBottom: "20",
              }}
            >
              <GoUp
                style={{
                  opacity: `${offset > 400 ? 1 : 0}`,
                  transition: "ease all .5s",
                }}
              >
                <AiOutlineArrowUp size='2rem' />
                <Span>Top</Span>
              </GoUp>
            </a>
          </Link>
        </Div1>
        <Div2>
          <li>
            <Link href='#projects'>
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href='#tech'>
              <NavLink>Technologies</NavLink>
            </Link>
          </li>
          <li>
            <Link href='#about'>
              <NavLink>About</NavLink>
            </Link>
          </li>
        </Div2>
        <Div3>
          <SocialIcons href='https://github.com/yamgarcia'>
            <AiFillGithub size='3rem' />
          </SocialIcons>

          <SocialIcons href='https://www.linkedin.com/in/marcos-g/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>

          <SocialIcons href='https://www.instagram.com/yanmaxbr/'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </Div3>
      </Container>
    </>
  );
};
export default Header;
