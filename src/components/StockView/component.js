import React from "react";

import styled from "styled-components";

import StockName from "./StockName";
import StockPrice from "./StockPrice";
import StockChart from "./StockChart";
import StockDaily from "./StockDaily";
import StockInfo from "./StockInfo";
import StockEarnings from "./StockEarnings";
import StockTarget from "./StockTarget";
import StockRecommend from "./StockRecommend";
import StockTechnical from "./StockTechnical";
import StockRelated from "./StockRelated";

import UserService from "../../services/user.service";

// const WrapLeft = styled.div`
//   float: left;
//   width: 50%;
//   @media only screen and (max-width: 600px) {
//     width: 100%;
//   }
// `;

// const WrapRight = styled.div`
//   float: right;
//   width: 50%;
//   @media only screen and (max-width: 600px) {
//     float: left;
//     width: 100%;
//   }
// `;

const Wrapper = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  width: 30%;
`;

const Background = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: #0B0E11;
  color: #DEE3EA;
  padding-bottom: 35px;
`;

const WatchButton = styled.button`
  font-family: "Inter", sans-serif;
  background-color: #DEE3EA;
  border-style: solid;
  border-radius: 5px;
  border-color: #0B0E11;
  color: #0B0E11;
  padding: 5px 25px;
  margin-left: 1%;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bold;
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #0B0E11;
    color: #DEE3EA;
  }
`;

//StockView component, main component for financial data for StockEngine
const StockView = ({
  loggedIn,
  inWatch,
  setReload,
  basicInfo,
  companyInfo,
  earnings,
  priceTarget,
  recommendations,
  technicalAnalysis,
  related,
  candles,
}) => {

  //Convert large numbers to string with commas
  const format = (num) => Number(parseInt(num)).toLocaleString("en");

  //Convert large numbers to string with commas and 2 decimals figures
  const formatDecimal = (num) =>
    Number(parseFloat(num).toFixed(2)).toLocaleString("en", {
      minimumFractionDigits: 2,
    });

  //Update the watchlist with current ticker
  const updateWatch = (event) => {
    event.preventDefault();
    UserService.updateWatchlist(basicInfo.ticker).then(
      () => {
        //Reload the button
        setReload(true);
        console.log("Success");
      },
      (error) => {
        console.log("Update watchlist error! " + error);
      }
    );
  };

  return (
    <Background>
      <Wrapper>
        {/* <WrapLeft> */}
        {loggedIn ? (
          <WatchButton onClick={(e) => updateWatch(e)}>
            {inWatch}
          </WatchButton>
        ) : (
          <></>
        )}
        <StockName name={basicInfo.name} ticker={basicInfo.ticker} />
        <StockPrice
          price={formatDecimal(basicInfo.price)}
          change={basicInfo.change}
        />
        <StockChart candles={candles} change={basicInfo.change} />
        <StockDaily
          todayHigh={formatDecimal(basicInfo.todayHigh)}
          todayLow={formatDecimal(basicInfo.todayLow)}
          openPrice={formatDecimal(basicInfo.openPrice)}
          prevClose={formatDecimal(basicInfo.prevClose)}
        />
        <StockInfo
          industry={companyInfo.industry}
          marketCap={(companyInfo.marketCap)}
          ipoDate={companyInfo.ipoDate}
          companyURL={companyInfo.companyURL}
        />
        <StockRelated related={related.related} />
        {/* </WrapLeft> */}
        {/* <WrapRight> */}
        <StockEarnings
          quarter={earnings.quarter}
          year={earnings.year}
          date={earnings.date}
          epsEstimate={formatDecimal(earnings.epsEstimate)}
          epsActual={formatDecimal(earnings.epsActual)}
          revEstimate={format(earnings.revEstimate)}
          revActual={format(earnings.revActual)}
        />
        <StockTarget
          targetHigh={formatDecimal(priceTarget.targetHigh)}
          targetLow={formatDecimal(priceTarget.targetLow)}
          targetAvg={formatDecimal(priceTarget.targetAvg)}
        />
        <StockRecommend
          buy={recommendations.buy}
          sell={recommendations.sell}
          hold={recommendations.hold}
          strongBuy={recommendations.strongBuy}
          strongSell={recommendations.strongSell}
        />
        <StockTechnical
          buy={technicalAnalysis.buy}
          sell={technicalAnalysis.sell}
          neutral={technicalAnalysis.neutral}
          signal={technicalAnalysis.signal}
        />
        {/* </WrapRight> */}
      </Wrapper>
    </Background>
  );
};

export default StockView;
