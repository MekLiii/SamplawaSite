import React from "react";
import styled from "styled-components";
import "./aktu.module.css";

function AktuEl({ img, heading, text, data }) {
  return (
    <StyledBox className="box" id="box">
      <div style={leftSide}>
        <img src={img} style={imagine} alt={img} />
      </div>
      <div style={rightSide}>
        <p>{data}</p>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </StyledBox>
  );
}

const box = {
  width: "100%",
  backgroundColor: "#fed053",
  display: "flex",
  marginBottom: "10px",
};
const StyledBox = styled.div`
  width: 100%;
  background-color: #fed053;
  display: flex;
  margin-bottom: 10px;

  ${
    "" /* @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  } */
  }
`;

const leftSide = {
  display: "flex",
  padding: "10px",
};
const rightSide = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const imagine = {
  width: "150px",
  height: "150px",
};

export default AktuEl;
