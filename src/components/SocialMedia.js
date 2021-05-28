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
    "github": {
      url: 'https://github.com/vilelf/',
      class: 'fab'
    }, 
    "linkedin": {
      url: 'https://www.linkedin.com/in/vilelf/',
      class: 'fab'
    }, 
    "twitter": {
      url: 'https://twitter.com/vilelf/',
      class: 'fab'
    }, 
    "file-text": {
      url: 'https://vilelf.com/fabricio_coelho.pdf',
      class: 'fa'
    }, 
  }

  return (
    <Wrapper href={sites[socialMedia].url} target="_blank" rel="noopener noreferrer">
      <Icon className={`${sites[socialMedia].class} fa-${socialMedia} fa-2x`} aria-hidden="true" ></Icon>
    </Wrapper>
  );
}

export default SocialMedia;
