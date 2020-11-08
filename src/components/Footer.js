import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 30px;
  background-color: black;
  height: 10vh;
`;

const Footer = () => {
  return (
    <Wrapper>
      Made by me
    </Wrapper>
  );
};

export default Footer;
