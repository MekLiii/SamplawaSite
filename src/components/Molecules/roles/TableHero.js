import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/fa";
import { PersonCircleOutline } from "react-ionicons";
import img from "../../../images/logo.png";

function TableHero({
  numer,
  name,
  pozycja,
  bramki,
  asysty,
  zKartki,
  cKartki,
  mecze,
}) {
  return (
    <StyledDiv>
      <StyledImgBox>
        <PersonCircleOutline
          color={"#00000"}
          title={`${numer}`}
          height="250px"
          width="75%"
          display= 'flex'
          justifyContent="center"
        />
      </StyledImgBox>
      <StyledContentBox>
        <StyledText>{name}</StyledText>
        <StyledP>{pozycja}</StyledP>
      </StyledContentBox>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 300px;
  min-height: 400px;
  background-color: #fed053;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
`;
const StyledImgBox = styled.div`
  height: 58%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledContentBox = styled.div`
  height: 38%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledMolecula = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 50%;
  height: 100%;
`;
const StyledText = styled.p`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledP = styled.p`
  margin-bottom: 0;
`;
export default TableHero;
