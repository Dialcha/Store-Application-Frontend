import React from "react";
import styled from "styled-components";
import Image from "../../assets/aerolab-logo.svg";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.img`
  position: absolute;
  width: 2rem;
  height: 1.8rem;
  left: 42px;
  top: 22px;
  cursor: pointer;
`;

function Top() {
  return (
    <Container>
      <Link to="/">
        <Logo src={Image} />
      </Link>
      <Profile />
    </Container>
  );
}

export default Top;
