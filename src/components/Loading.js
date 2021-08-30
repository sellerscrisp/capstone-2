import React from "react";

import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

const Spinner = styled.div`
  animation: ${rotate360} 0.80s linear infinite;
  transform: translateZ(0);
  transition: all 0.3s;
  
  position: fixed;
  z-index: 999;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 2px solid #00C805;
  border-right: 2px solid #00C805;
  border-bottom: 2px solid #00C805;
  border-left: 2px solid #0B0E11;
  background: transparent;
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const Background = styled.section`
  width: 100%;
  height: 100vh;
  z-index: -100;
  background: #0B0E11;
`;

const Header = styled.p`
  margin-top: 0px;
`;

//Site's homepage
const Loading = () => {
  return (
    <Background>
      <Header>
        <Spinner />
      </Header>
    </Background>
  );
};

export default Loading;
