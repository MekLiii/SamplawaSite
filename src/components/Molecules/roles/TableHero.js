import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/fa";
import { PersonCircleOutline } from "react-ionicons";
import img from "../../../images/logo.png";

function TableHero({ name, pozycja, img,rola }) {
  const Image = () => {
    if (img.length < 14) {
      return (
        <PersonCircleOutline
          color="#00000"
          height="250px"
          width="75%"
         style={{ textAlign:"center"}}
        />
      );
    } else {
      return (
        <BoxImg>
          <Img src={img} alt={img}/>
        </BoxImg>
      );
    }
  };

    
  return (
    <StyledDiv>
      <StyledImgBox>
        <Image />
      </StyledImgBox>
      <StyledContentBox>
        <StyledText>{name}</StyledText>
        <StyledP>{pozycja}</StyledP>
        <StyledP>{rola}</StyledP>
      </StyledContentBox>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 300px;
  min-height: 400px;
  background-color: #ffe600;
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
  text-align: center;
`;
const StyledContentBox = styled.div`
  height: 38%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
const BoxImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const Img = styled.img`
  width: 70%;
  height: auto;
  border-radius: 50%;
  border: 3px solid black;
  padding: 10px;
`;
export default TableHero;
