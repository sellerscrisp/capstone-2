import React from "react";
import { NavLink } from "react-router-dom"

import styled from "styled-components";

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
`

//Button design for navigation bar, takes in text for button and router directions
const NavigationButton = ({ buttonText }) => {
  return <NavLink to={"/" + buttonText}><NavButton>{buttonText}</NavButton></NavLink>
};

export default NavigationButton;
