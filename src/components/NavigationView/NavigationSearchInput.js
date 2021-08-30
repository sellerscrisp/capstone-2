import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import * as data from "../../data/search.json";

const Dropdown = styled.div`
  margin-top: 0px;
  position: absolute;
  width: 268px;
  background-color: #242C37;
  z-index: 1000;
  border-radius: 5px;
  border-color: #0B0E11;
  border-style: solid;
  border-width: 3px;
  margin-left: -3px;
  a:hover,
  a:active,
  a:link,
  a:visited {
    text-decoration: none !important;
  }
`;

const DropdownResult = styled.p`
  font-family: "Inter", sans-serif;
  color: #DEE3EA;
  text-decoration: none;
  font-size: 0.7rem;
  padding-left: 5%;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 5%;
  transition: all 0.2s;
  line-height: 0.1rem;
  &:hover {
    cursor: pointer;
    color: #00C805;
    padding-left: 12px;
  }

  span {
    color: #00C805;
  }
`;

const Input = styled.input` 
  margin-top: 13px;
  font-family: "Inter", sans-serif;
  padding: 8px 25px;

  width: 170px;
  color: #DEE3EA;
  background: #242C37;
  border-radius: 3px;
  border-style: solid;
  border-color: #242C37;
  display: inline;
  transition-duration: 0.3s;

  &:focus {
    border-color: #00C805;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;

const Wrapper = styled.div`
  float: right;
  display: inline;
  margin-right: 3%;
  @media only screen and (max-width: 800px) {
    margin-right: 1%;
  }
`

//Our search bar for navigation, includes autocomplete while typing with data of all company names and tickers in database
const NavigationSearchInput = () => {
  //Variable for current query
  const [query, setQuery] = useState("");
  //Variable for our results
  const [results, setResults] = useState(["null"]);

  //Update our results whenever our query changes
  useEffect(() => {
    let results = data.default.filter(
      ({ description, symbol }) => description.indexOf(query.toUpperCase()) > -1 || symbol.indexOf(query.toUpperCase()) > -1
    );
    setResults(results.slice(0, 10));
  }, [query]);

  //If the query is blank only show the input, update our query as input changes
  if (query === "") {
    return (
      <Wrapper>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Company name or ticker..."
          type="text"
        />
      </Wrapper>
    );
  }

  //Otherwise show the dropdown, once a link is clicked we set our query to blank to hide it again
  return (
    <Wrapper>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter company name..."
        type="text"
      />
      <Dropdown>
        {results.map((res, index) => (
          <NavLink
            onClick={() => setQuery("")}
            key={index}
            to={"/stock/" + res.symbol}
          >
            <DropdownResult>
              {res.description} <span>({res.symbol}) {res.price}</span>
            </DropdownResult>
          </NavLink>
        ))}
      </Dropdown>
    </Wrapper>
  );
};

export default NavigationSearchInput;
