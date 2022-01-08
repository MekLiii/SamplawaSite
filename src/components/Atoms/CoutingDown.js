import React from "react";

import styled from "styled-components";
import "./app.css";
import loadable from "@loadable/component";
import mecz from "../../../content/mecz.json";

const OtherComponent = loadable(() => import("./CoutingDownEl"));

function CoutingDown() {
  const match = mecz.sezon;
    const data = match.find((el) => el.sezon == mecz.AktualnySezon).mecz;
    const matchArray = [];

    const today = new Date();

    const currentDay =
      today.getDate() > "9" ? today.getDate() : "0" + today.getDate();
    const currentMonth =
      today.getMonth() + 1 > "9"
        ? today.getMonth() + 1
        : "0" + (today.getMonth() + 1);

    const currentDate =
      currentMonth + "/" + currentDay + "/" + today.getFullYear();
    matchArray.push(currentDate);

    data.map((el) => matchArray.push(el.data));

    //Sortowanie daty, od najstarszej do najnowszej
    const newSortedArray = [];
    matchArray.forEach((el) => newSortedArray.push(new Date(el)));
    newSortedArray.sort((a, b) => b - a);
    newSortedArray.reverse();
    const newArray = [];
    newSortedArray.forEach((el) =>
      newArray.push(
        el.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      )
    );

    const indexOfCurrentDay = newArray.indexOf(currentDate);
    const compareDate = newArray[indexOfCurrentDay + 1];

    const result = data.find(({ data }) => data == compareDate);
    const stats = [result.Statystyki];

    if (result.Statystyki == undefined) {
      stats.unshift("0");
    }

 
    const resultNextMatch = data.find(({ data }) => data == compareDate);
  return (
    <Box>
      <P>Na boisku widzimy się za:</P>
      <OtherComponent dateTo={resultNextMatch.data}  />
    </Box>
  );
}


const Box = styled.div`
  width: 100%;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const P = styled.p`
  font-size: clamp(20px, 3vw, 50px);
  color: white;
  font-family: poppins;
`;
export default CoutingDown;
