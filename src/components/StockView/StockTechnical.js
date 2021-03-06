import React from "react";

import styled from "styled-components";

const TitleLabel = styled.p`
  font-family: "Inter", sans-serif;
  margin-left: 2.5%;
  margin-bottom: 0;
  font-size: 3rem;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const BodyText = styled.div`
  font-family: "Inter", sans-serif;
  margin-left: 2.5%;
  font-size: 1rem;
`;

//Technical indicators from API
const StockTechnical = ({ buy, sell, neutral, signal }) => {
  return (
    <>
      <TitleLabel>Technical Indicators:</TitleLabel>
      <BodyText>
        <p>Buy: {buy}</p>
        <p>Sell: {sell}</p>
        <p>Neutral: {neutral}</p>
        <p>Signal: {signal}</p>
      </BodyText>
    </>
  );
};

export default StockTechnical;
