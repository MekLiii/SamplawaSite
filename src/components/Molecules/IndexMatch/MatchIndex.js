import React from "react";
import MatchElIndex from "./MatchElIndex";
import styled from "styled-components";
import mecz from "../../../../content/mecz.json";

function MatchIndex() {
  function lasMatch() {
    const match = mecz.sezon;
    const data = match.find((el) => el.sezon == mecz.AktualnySezon).mecz;
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
    const compareDate = matchArray[indexOfCurrentDay + 1];

    const resultNextMatch = data.find(({ data }) => data == compareDate);

    return resultNextMatch;
  }
  const { result, bramkiPrzeciwnika, bramkiPFT } = lasMatch();
  const resultNextMatch = nextMatch();
  console.log(resultNextMatch);

  return (
    <StyledDiv>
      <MatchElIndex
        title="Ostatni mecz"
        data={result.data}
        letters="Sam"
        name={result.gospodarze}
        score={bramkiPFT}
        lettersEnemy="HUR"
        nameEnemy={result.przeciwnik}
        scoreEnemy={bramkiPrzeciwnika}
        whatNext="Zobacz statystyki"
        link={`/mecze/${result.gospodarze}-${result.przeciwnik}`}
        sign="-"
      />

      <MatchElIndex
        title="Następny mecz"
        data={resultNextMatch.data}
        letters="Sam"
        name={resultNextMatch.gospodarze}
        lettersEnemy="HUR"
        nameEnemy={resultNextMatch.przeciwnik}
        whatNext={`${resultNextMatch.godzina} Boisko ${resultNextMatch.miejsce}`}
        sign="VS"
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  min-height: 50vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

  @media only screen and (max-width: 500px) {
    clip-path: none;
  }
`;
export default MatchIndex;
