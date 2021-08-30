import React from "react";

import styled from "styled-components";

const PriceLabel = styled.p`
  font-family: "Inter", sans-serif;
  margin-left: 2.5%;
  margin-top: 0;
  font-size: 1.5rem;
  color: ${(props) => props.changeColor};
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

//Stock price and daily change
const StockPrice = ({ price, change }) => {
  //Adjust today's price based on whether daily is up or down
  let changeColor = null;
  if (change >= 0) {
    changeColor = "#00C805";
  } else {
    changeColor = "#FD4D4D";
  }

  //Add a sign to positive changes
  let sign = null;
  if (change >= 0) {
    sign = "+";
  }

  return (
    <PriceLabel changeColor={changeColor}>
      ${price} ({sign}{change}%)
    </PriceLabel>
  );
};

export default StockPrice;
