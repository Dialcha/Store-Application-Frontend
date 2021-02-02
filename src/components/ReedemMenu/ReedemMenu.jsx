import React from "react";
import styled from "styled-components";
import { addUserPoints } from '../../redux/actions';
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  align-self: center;
  justify-content: space-around;
`;

const Title = styled.p`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #616161;
  align-self: center;
`;

const VerticalLine = styled.div`
  background: #d9d9d9;
  width: 1px;
  height: auto;
  box-sizing: border-box;
  margin: 5px;
`;

const SecondaryText = styled.h2`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  letter-spacing: -0.15px;
  color: #a3a3a3;
  align-self: center;
`;

const Filter = styled.div`
  display: flex;
  background: #ededed;
  border-radius: 20.5px;
  align-items: center;
  box-sizing: content-box;
  margin: 20px 10px;
  padding: 10px;
  cursor: pointer;
`;

const FilterTitle = styled.h1`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  letter-spacing: -0.15px;
  color: #a3a3a3;
`;

function ReedemMenu({addPoints}) {
  return (
    <>
      <Container>
        <Title>Add points to your account</Title>
        <VerticalLine />
        <SecondaryText>Select value:</SecondaryText>
        <Filter onClick={() => addPoints(1000)}>
            <FilterTitle>1000</FilterTitle>
        </Filter>
        <Filter onClick={() => addPoints(5000)}>
            <FilterTitle>5000</FilterTitle>
        </Filter>
        <Filter onClick={() => addPoints(7500)}>
            <FilterTitle>7500</FilterTitle>
        </Filter>
      </Container>
    </>
  );
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addPoints: (amount) => dispatch(addUserPoints(amount)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(ReedemMenu);
