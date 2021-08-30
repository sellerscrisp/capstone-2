import React from "react";

import styled from "styled-components";

const Background = styled.section`
  width: 100%;
  height: 100vh;
  z-index: -100;
  background: #0B0E11;
`;

const Header = styled.p`
  margin-top: 0px;
  padding-top: 10%;
  font-family: "Inter", sans-serif;
  color: #DEE3EA;
  text-align: center;
  font-size: 3rem;
`;

const Content = styled.div`
  font-family: "Inter", sans-serif;
  color: #DEE3EA;
  text-align: center;
  font-size: 1rem;
  @media only screen and (max-width: 600px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  a {
    color: inherit;
  }
`;

//Site's homepage & basic description
const Home = () => {
  return (
    <Background>
      <Header>StockWatcher</Header>
      <Content>
        <p>
          Learn more about a company's earnings, technical indicator sentiment, recommendations, price targets, news, and more.
        </p>
        <p><a href="/signup">Create an account</a> to add stocks to your watchlist.</p>
      </Content>
    </Background>
  );
};

export default Home;
