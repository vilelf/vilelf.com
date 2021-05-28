import React from 'react'
import styled from "styled-components";

import Header from "components/Header";
import Stack from "components/Stack";
import Footer from "components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Stack />
      <Footer />
    </Wrapper>
  )
}
