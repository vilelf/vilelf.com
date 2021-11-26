import React from "react";
import SocialBox from "components/SocialBox";
import styled from "styled-components";
import {BackgroundImage, Overlay, Content} from "style.js"


const Title = styled.h1`
  color: #fff;
`;

const SubTitle = styled.h2`
  color: #fff;
  font-size: 40px;

  @media (max-width: 964px) {
    font-size: 32px;
  }
`;

const Header = () => {
  return (
    <>
      <header>
        <BackgroundImage>
          <Overlay />
        </BackgroundImage>
        <Content>
          <Title>vilelf</Title>
          <SubTitle>Devops Engineer | SRE</SubTitle>
          <SocialBox />
        </Content>
      </header>
    </>
  );
};

export default Header;
