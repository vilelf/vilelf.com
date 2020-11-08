import React from "react";
import imgArr from "assets/img/index";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 70vh;
  
  @media (max-width: 1440px) {
    min-height: 75vh;
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 40px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 40px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  color: gray;
  text-align: center;
`;

const Stack = () => {
  return (
    <Wrapper>
      <Title>Stack</Title>
      <ItemWrapper>
        {imgArr.map((item) => {
          return (
            <Item>
              <Image key={item.icon} src={item.icon} />
              <ItemName>{item.name}</ItemName>
            </Item>
          );
        })}
      </ItemWrapper>
    </Wrapper>
  );
};

export default Stack;
