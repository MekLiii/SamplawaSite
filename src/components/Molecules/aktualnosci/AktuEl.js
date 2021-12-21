import React from "react";
import styled from "styled-components";
import "./aktu.module.css";

function AktuEl({ img, heading, whatNext, data,onClick }) {
  return (
    <StyledBox>
      <div style={leftSide}>
        <AbsoluteDiv>
          <p>{data}</p>
        </AbsoluteDiv>
        <div style={imagine}>
          <img src={img} style={imagine} alt={img} />
        </div>
      </div>
      <div style={rightSide}>
        <h1 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{heading}</h1>
        <Button onClick={onClick}>{whatNext}</Button>
      </div>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  min-height: 450px;
  min-width: 0;
  ${'' /* max-width: 350px; */}
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const AbsoluteDiv = styled.div`
  position: absolute;
  height: 25px;
  width: 110px;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 100;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 84% 100%, 0 100%, 0% 50%);
  padding-left: 10px;
`;
const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  -webkit-box-shadow: 0px 0px 100px -49px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 100px -49px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 100px -49px rgba(66, 68, 90, 1);
`;

const leftSide = {
  display: "flex",
  width: "100%",
  flex: "1",
};
const rightSide = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "20px",
  flex: "1",
  textAlign: "center",
};
const imagine = {
  width: "100%",
  height: "100%",
  backgroundColor: "black",
};

export default AktuEl;
