import React from "react";
import MatchElIndex from "./MatchElIndex";
import styled from "styled-components";
import mecz from "../../../../content/mecz.json";
import Bounce from "react-reveal/Zoom";

function MatchIndex() {
  function lasMatch() {
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
    const compareDate = newArray[indexOfCurrentDay - 1];

    const result = data.find(({ data }) => data == compareDate);

    const stats = [result.Statystyki];

    if (result.Statystyki == undefined) {
      stats.unshift("0");
    }

    const bramkiPFT =
      stats[0].BramkiPFT === undefined ? "0" : stats[0].BramkiPFT.length;
    const bramkiPrzeciwnika =
      stats[0].BramkiPrzeciwnika === undefined
        ? "0"
        : stats[0].BramkiPrzeciwnika.length;

    return { result, bramkiPrzeciwnika, bramkiPFT };
  }
  function nextMatch() {
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

    return resultNextMatch;
  }
  const { result, bramkiPrzeciwnika, bramkiPFT } = lasMatch();
  const resultNextMatch = nextMatch();
  function convertData(x) {
    const newData = new Date(x);
    return newData.toLocaleDateString("Pl", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }
  console.log(convertData("06/30/2022"));
  return (
    <Cointainer>
      <StyledDiv>
        <Bounce bottom>
          <MatchElIndex
            title="Ostatni mecz"
            data={convertData(result.data)}
            letters={result.gospodarze.slice(0, 3)}
            name={result.gospodarze}
            score={result.pftGoals}
            lettersEnemy={result.przeciwnik.slice(0, 3)}
            nameEnemy={result.przeciwnik}
            scoreEnemy={result.enemyGoals}
            whatNext="Zobacz statystyki"
            link={`/mecze/${result.gospodarze}-${result.przeciwnik}`}
            sign="-"
          />
        </Bounce>
        <Bounce bottom>
          <MatchElIndex
            title="Następny mecz"
            data={convertData(resultNextMatch?.data)}
            letters="Sam"
            name={resultNextMatch?.gospodarze}
            lettersEnemy="HUR"
            nameEnemy={resultNextMatch?.przeciwnik}
            whatNext={`${resultNextMatch?.godzina} ${resultNextMatch?.miejsce}`}
            sign="VS"
            link="#"
          />
        </Bounce>
      </StyledDiv>
    </Cointainer>
  );
}
const Cointainer = styled.div`
  min-height: 50vh;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledDiv = styled.div`
  min-height: 60vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(320px, 1fr));

  @media only screen and (max-width: 500px) {
    clip-path: none;
  }
`;
export default MatchIndex;
