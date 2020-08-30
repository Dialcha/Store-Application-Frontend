import React from "react";
import styled from "styled-components";
import PointsAvailable from "./PointsAvailable";

const Container = styled.div`
  position: absolute;
  width: 14rem;
  height: 80%;
  width: 25%;
  display: flex;
`;

const ProfileName = styled.h1`
  position: absolute;
  height: 48px;
  left: 0%;
  top: calc(50% - 48px / 2);

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 48px;
  /* identical to box height, or 200% */

  letter-spacing: -0.15px;

  color: #616161;
  order: 1;
`;

function Profile() {
  return (
      <Container>
          <ProfileName>Diego Chavarría</ProfileName>
          <PointsAvailable />
      </Container>
  );
}

export default Profile;
