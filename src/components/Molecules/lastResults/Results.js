import React from "react";
import styled from "styled-components";
import mecz from "../../../../content/mecz.json";
import "./result.module.css";

function Results() {
  const match = mecz.sezon;
  const data = match.find((el) => el.sezon == mecz.AktualnySezon).mecz;
  console.log(data);
  const matchArray = [];

  const today = new Date();
  const currentDay =
    today.getDate() > "9" ? today.getDate() : "0" + today.getDate();
  const currentDate =
    today.getMonth() + 1 + "/" + currentDay + "/" + today.getFullYear();
  matchArray.push(currentDate);

  data.map((el) => matchArray.push(el.data));

  matchArray.sort(function (a, b) {
    a = a.split("/").reverse().join("");
    b = b.split("/").reverse().join("");
    return a > b ? 1 : a < b ? -1 : 0;
  });

  const indexOfCurrentDay = matchArray.indexOf(currentDate);
  const compareDate = matchArray[indexOfCurrentDay - 1];

  const result = data.find(({ data }) => data == compareDate);

  const stats = result.Statystyki;
  console.log(stats);
  const bramkiPFT = (stats[0].BramkiPFT === undefined) ? "0" : stats[0].BramkiPFT.length
  const bramkiPrzeciwnika  = (stats[0].BramkiPrzeciwnika === undefined) ? "0" :stats[0].BramkiPrzeciwnika.length

  return (
    <div style={cointainer}>
      <div style={resultBox} className="result">
        <StyledP style={{ fontSize: "2rem", color: "white" }}>
          Ostatni mecz
        </StyledP>
        <StyledP style={{ fontSize: "clamp(1rem, 7vmin, 1.5rem)" }}>
          Sampława - {result?.przeciwnik}
        </StyledP>
        <StyledP style={{ fontSize: "1.5rem" }}>
          {bramkiPFT}:{bramkiPrzeciwnika}
        </StyledP>
        <StyledP style={{ color: "#b1b1b1" }}>B klasa</StyledP>
        <StyledP style={{ color: "#b1b1b1" }}>{result?.data}</StyledP>
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
  marginTop: "70px",
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

const StyledP = styled.p`
  color: white;
`;
export default Results;
