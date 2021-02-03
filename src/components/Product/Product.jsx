import React, { useState } from "react";
import styled from "styled-components";
import Info from "./Info";
import Icon from "./Icon";
import Photo from "./Photo";
import Image from "../../assets/icons/coin.svg";
import Missing from "./Missing";

const Container = styled.div`
  width: 23%;
  height: 276px;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1% 0 1% 1.6%;
  &:hover {
    background: linear-gradient(
      180deg,
      rgba(10, 212, 250, 0.86) 0%,
      rgba(37, 187, 241, 0.86) 100%
    );
    margin: 0% 0 1% 1.6%;
    box-shadow: 12px 12px 32px rgba(0, 0, 0, 0.4);
  }
`;

const ReedemBox = styled.div`
  position: relative;
  top: -90%;
  left: 0;
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const PriceText = styled.p`
  width: auto;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  text-align: center;
  letter-spacing: -0.0847059px;
  color: #ffffff;
  box-sizing: border-box;
`;

const PointsImg = styled.img`
  width: 20%;
  box-sizing: border-box;
  align-self: center;
`;

const ButtonReedem = styled.div`
  background: #ffffff;
  left: 0;
  width: 100%;
  display: flex;
  border-radius: 20.5px;
  justify-content: center;
  cursor: pointer;
`;

const ButtonText = styled.p`
  height: 23px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.0423529px;
`;

function Product({ photo, category, name, cost, points, reedemProduct }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <Container
        shouldHover
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <Icon imgBlue={false} />
        ) : cost > points ? (
          <Missing points={cost - points} />
        ) : (
          <Icon imgBlue={true} />
        )}
        <Photo hoover={isHover} image={photo} />
        <Info category={category} name={name} />
        {isHover ? (
          <ReedemBox>
            {points > cost ? (
              <>
                <PriceText>{cost}</PriceText>
                <PointsImg src={Image}></PointsImg>
                <ButtonReedem onClick={reedemProduct}>
                  <ButtonText>Reedem</ButtonText>
                </ButtonReedem>
              </>
            ) : (
              <PriceText>{`${cost - points} points missing`}</PriceText>
            )}
          </ReedemBox>
        ) : null}
      </Container>
    </>
  );
}

export default Product;
