import React from "react";
import styled from "styled-components";
import mecz from "../../../../content/mecz.json";
import "./result.module.css";

function Results() {
  const arrayLenght = mecz.mecz.length;
  const data = mecz.mecz[arrayLenght - 1];
  // console.log(arrayLenght)
  return (
    <div style={cointainer}>
      <div style={resultBox} className="result">
        <StyledP style={{ fontSize: "2rem",color:'white' }}>Ostatni mecz</StyledP>
        <StyledP style={{ fontSize: "clamp(1rem, 7vmin, 1.5rem)" }}>
          {data.gospodarze} - {data.goscie}
        </StyledP>
        <StyledP style={{ fontSize: "1.5rem" }}>
          {data.bramkiGospodarza}:{data.bramkiGoscia}
        </StyledP>
        <StyledP style={{ color: "#b1b1b1" }}>B klasa</StyledP>
        <StyledP style={{ color: "#b1b1b1" }}>{data.data}</StyledP>
      </div>
    </div>
  );
}

const cointainer = {
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop:"70px" 
};
const resultBox = {
  width: "90%",
  height: "auto",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",
  // borderRadius: "10px",  
};

const StyledP= styled.p`
  color:white;
`
export default Results;
