import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import NavigationButton from "./NavigationView/NavigationButton";
import NavigationSearchInput from "./NavigationView/NavigationSearchInput";

import authService from "../services/auth.service";

const Background = styled.div`
  width: 100%;

  background: #0B0E11;
  position: -webkit-sticky;
  position: sticky;
	top: 0;
  z-index: 999;

  /* border-bottom: 3px white solid; */
`;

const Title = styled.p`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 0px;
  padding-top: 15px;

  a {
    color: #00C805;
    text-decoration: none;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const SmallTitle = styled.p`
  display: none;
  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 0px;

  a {
    color: #00C805;
    text-decoration: none;
  }

  @media only screen and (max-width: 600px) {
    display: inline-block;
  }
`;

const NavButton = styled.button`
  font-family: "Inter", sans-serif;
  background-color: #00C805;
  border-style: solid;
  border-radius: 5px;
  border-color: #00C805;
  color: #0B0E11;
  padding: 8px 25px;
  margin-right: 1%;
  margin-top: 13px;
  font-size: 0.6rem;
  font-weight: bold;
  float: right;
  transition-duration: 0.3s;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #009403;
    border-color: #009403;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 14px;
    padding: 4px 10px;
    font-size: 0.9rem;
  }
`;

//This is the site's navigation bar which includes the title, the search bar, and log/signup/signout,watchlist buttons
const Navigation = ({ loggedIn, setLoggedIn }) => {
  //Logout button
  const handleLogout = (event) => {
    event.preventDefault();
    authService.logout().then(
      () => {
        console.log("Success");
        setLoggedIn(false);
      },
      (error) => {
        console.log("Logout error!");
      }
    );
  };

  if (loggedIn) {
    return (
      <Background>
        <Title>
          <NavLink to="/">StockWatcher</NavLink>
        </Title>
        <SmallTitle>
          <NavLink to="/">SW</NavLink>
        </SmallTitle>
        <NavButton onClick={(e) => handleLogout(e)} buttonText={"Logout"}>
          Logout
        </NavButton>
        <NavigationButton buttonText={"Watchlist"} />
        <NavigationSearchInput />
      </Background>
    );
  } else {
    return (
      <Background>
        <Title>
          <NavLink to="/">StockWatcher</NavLink>
        </Title>
        <SmallTitle>
          <NavLink to="/">SW</NavLink>
        </SmallTitle>
        <NavigationButton buttonText={"Login"} />
        <NavigationButton buttonText={"Signup"} />
        <NavigationSearchInput />
      </Background>
    );
  }
};

export default Navigation;
