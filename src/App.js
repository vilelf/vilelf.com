import React from "react";
import Header from "components/Header";
import Stack from "components/Stack";
import Footer from "components/Footer";
import "assets/css/style.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Stack />
      <Footer />
    </Wrapper>
  );
};

export default App;
