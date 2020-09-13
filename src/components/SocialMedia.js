import React from 'react';

const SocialMedia = ({socialMedia}) => {
  const sites = {
    github: 'https://github.com/vilelf/',
    linkedin: 'https://www.linkedin.com/in/vilelf/',
    twitter: 'https://twitter.com/vilelf/'
  }
  console.log(sites)
  return (
    <a href={sites[socialMedia]} target="_blank" rel="noopener noreferrer">
      <i className={`fab fa-${socialMedia} fa-2x`} aria-hidden="true" ></i>
    </a>
  );
}

export default SocialMedia;
