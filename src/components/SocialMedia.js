import React from 'react';
import styled from "styled-components";

const Wrapper = styled.a`
  color: white;
`;

const Icon = styled.i`
  margin: 10px;
  ${Wrapper}:hover & {
    color: gray;
  }
`;

const SocialMedia = ({socialMedia}) => {
  const sites = {
    github: 'https://github.com/vilelf/',
    linkedin: 'https://www.linkedin.com/in/vilelf/',
    twitter: 'https://twitter.com/vilelf/'
  }

  return (
    <Wrapper href={sites[socialMedia]} target="_blank" rel="noopener noreferrer">
      <Icon className={`fab fa-${socialMedia} fa-2x`} aria-hidden="true" ></Icon>
    </Wrapper>
  );
}

export default SocialMedia;
