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

const NewsList = styled.ul`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  a {
    color: #DEE3EA;
  }
`;

//The company news component, displays all news articles from API
const NewsCompany = ({ companyNews }) => {
  return (
    <>
      <TitleLabel>Company News:</TitleLabel>
      <NewsList>
        {companyNews.map((listing, index) => (
          <li key={index}>
            <a rel="noopener noreferrer" target="_blank" href={listing.link}>
              {listing.headline}
            </a>
            &nbsp; ({listing.date})
          </li>
        ))}
      </NewsList>
    </>
  );
};

export default NewsCompany;
