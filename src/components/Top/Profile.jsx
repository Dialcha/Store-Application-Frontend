import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PointsAvailable from "./PointsAvailable";
import { getUser } from "../../redux/actions";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
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

function Profile({ user, points, getUser }) {
  useEffect(() => {
    getUser();
  }, [getUser, points.loading]);

  return (
      <Link to="/history">
    <Container>
      <ProfileName>{user.loading || points.loading ? '...' : user.user.name}</ProfileName>
      {
        user.loading || points.loading ? null : <PointsAvailable pointsValue={user.user.points}/>
      }
    </Container>
      </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer,
    points: state.pointsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
