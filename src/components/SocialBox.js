import React from "react";
import SocialMedia from "components/SocialMedia";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const SocialBox = () => {
  return (
    <Wrapper>
      <SocialMedia socialMedia="github" />
      <SocialMedia socialMedia="linkedin" />
      <SocialMedia socialMedia="twitter" />
    </Wrapper>
  );
};

export default SocialBox;
