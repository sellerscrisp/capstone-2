import React from "react";

import styled from "styled-components";

const NameLabel = styled.p`
  font-family: "Inter", sans-serif;
  margin-left: 2.5%;
  margin-bottom: 0;
  margin-top: 1px;
  font-size: 2rem;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

//Simply the stock name and ticker
const StockName = ({ name, ticker }) => {
  return (
    <NameLabel>
      {name} ({ticker})
    </NameLabel>
  );
};

export default StockName;
