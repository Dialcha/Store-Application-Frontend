import React from "react";
import styled from "styled-components";
import PointsAvailable from "./PointsAvailable";

const Container = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
`;

const ProfileName = styled.h1`

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  /*line-height: 48px;*/
  /* identical to box height, or 200% */

  letter-spacing: -0.15px;
  color: #616161;
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
