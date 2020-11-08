import styled from "styled-components";
import Image from "assets/img/cup-of-coffee.jpg";


export const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-image: url(${Image});
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: .8;
  background: #1C1D21;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;