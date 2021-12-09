import React, { useState } from "react";
import styled from "styled-components";
import img from "../../../images/soccer.png";
import { Time } from "react-ionicons";
import mecz from "../../../../content/mecz.json";

function NextMatch() {
  const match = mecz.mecz;

  const matchArray = [];

  const today = new Date();
  const currentDay =
    today.getDate() > "9" ? today.getDate() : "0" + today.getDate();
  const currentDate =
    today.getMonth() + 1 + "/" + currentDay + "/" + today.getFullYear();
  matchArray.push(currentDate);

  match.map((el) => matchArray.push(el.data));

  matchArray.sort(function (a, b) {
    a = a.split("/").reverse().join("");
    b = b.split("/").reverse().join("");
    return a > b ? 1 : a < b ? -1 : 0;
  });

  const indexOfCurrentDay = matchArray.indexOf(currentDate);
  const compareDate = matchArray[indexOfCurrentDay + 1];

  const result = match.find(({ data }) => data == compareDate);
  console.log(matchArray);

  return (
    <StyledDiv>
      <div style={displayFlex}>
        <h1 style={{ color: "white" }}>Następny mecz</h1>
      </div>
      <div style={versusDiv}>
        <P>{result?.gospodarze}</P>
        <P>-:-</P>
        <P>{result?.goscie}</P>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <P>{result?.miejsce}</P>
        <P>
          <div style={{display: "flex", flexDirection: "column",alignItems: "center"}}>
            <div>
            <Time color={"white"} height="40px" width="40px" />
            {/* zmienic format na europejski!!!!!!!!!!!! */}
            {result?.data}
            </div>
            {result?.godzina}
          </div>
        </P>
        <P>B klasa</P>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  height: 40%;
`;
const versusDiv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
  width: "100%",
};
const displayFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const StyledImg = styled.img`
  width: 40px;
`;
const P = styled.p`
  color: white;
`;

export default NextMatch;
