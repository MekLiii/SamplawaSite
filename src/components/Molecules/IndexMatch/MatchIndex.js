import React from "react";
import MatchElIndex from "./MatchElIndex";
import styled from "styled-components";
import mecz from "../../../../content/mecz.json";
import Bounce from "react-reveal/Zoom";
import { useStaticQuery, graphql } from "gatsby"

function MatchIndex() {
  const lastMatch = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/content/mecze/"}}
        sort: {fields: frontmatter___data, order: DESC}
        limit: 1
      ) {
        nodes {
          frontmatter {
            czas
            data
            gospodarze
            logoEnemy
            miejsce
            pftGoals
            przeciwnik
            thumbnail
            godzina
            pftGoals
          }
        }
      }
    }
  `)
  const lastMatchData = lastMatch.allMarkdownRemark.nodes[0].frontmatter;

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
    const stats = [result?.Statystyki];

    if (result?.Statystyki == undefined) {
      stats.unshift("0");
    }

    const resultNextMatch = data.find(({ data }) => data == compareDate);

    return resultNextMatch;
  }

  const resultNextMatch = nextMatch();
  function convertData(x) {
    const newData = new Date(x);
    return newData.toLocaleDateString("Pl", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }
  return (
    <Cointainer>
      <StyledDiv>
        <Bounce bottom>
          <MatchElIndex
            title="Ostatni mecz"
            data={convertData(lastMatchData?.data)}
            letters={lastMatchData?.gospodarze.slice(0, 3)}
            name={lastMatchData?.gospodarze}
            score={lastMatchData?.pftGoals}
            lettersEnemy={lastMatchData?.przeciwnik.slice(0, 3)}
            nameEnemy={lastMatchData?.przeciwnik}
            scoreEnemy={lastMatchData?.enemyGoals}
            whatNext="Zobacz statystyki"
            link={`/mecze/${lastMatchData?.gospodarze}-${lastMatchData?.przeciwnik}-${lastMatchData?.data}`}
            sign="-"
          />
        </Bounce>
        {resultNextMatch !== undefined ? (
          <Bounce bottom>
            <MatchElIndex
              title="Następny mecz"
              data={convertData(resultNextMatch?.data)}
              letters="PFT"
              name={resultNextMatch?.gospodarze}
              lettersEnemy={resultNextMatch?.przeciwnik.slice(0, 3)}
              nameEnemy={resultNextMatch?.przeciwnik}
              whatNext={`${resultNextMatch?.godzina} ${resultNextMatch?.miejsce}`}
              sign="VS"
            />
          </Bounce>
        ) : (
          <Bounce bottom>
            <MatchElIndex sign="Brak następnych meczy" />
          </Bounce>
        )}
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
