import React, { useState } from "react";
import MatchElIndex from "./MatchElIndex";
import styled from "styled-components";
import mecz from "../../../../content/mecz.json";
import Bounce from "react-reveal/Zoom";
import { useStaticQuery, graphql } from "gatsby";

function MatchIndex() {
  const lastMatch = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/mecze/" }
          frontmatter: { data: { ne: null } }
        }
        sort: { order: DESC, fields: frontmatter___data }
      ) {
        nodes {
          frontmatter {
            data
            gospodarze
            logoEnemy
            miejsce
            pftGoals
            przeciwnik
            thumbnail
            godzina
            pftGoals
            enemyGoals
          }
        }
      }
    }
  `);

  // last match
  const [lastMatchData] = useState(lastMatch.allMarkdownRemark.nodes);
  lastMatchData.sort(
    (a, b) => new Date(a.frontmatter.data) - new Date(b.frontmatter.data)
  );
  const filteredLastMatchData = lastMatchData.filter(
    (el) => new Date(el.frontmatter.data) < new Date()
  );
  const resultLatMatch =
    filteredLastMatchData[filteredLastMatchData.length - 1].frontmatter;

  // find the next match in the future
  const nextMatch = lastMatchData.find(
    (el) => new Date(el.frontmatter.data) > new Date()
  )?.frontmatter === undefined ? undefined : lastMatchData.find(
    (el) => new Date(el.frontmatter.data) > new Date()
  )?.frontmatter;

  const nextMatchHour = parseInt(nextMatch?.godzina / 60);
  const nextMatchMinutes = nextMatch?.godzina % 60 > 9 ? nextMatch?.godzina % 60 : `0${nextMatch?.godzina % 60}`;

  function convertData(x) {
    
    const newData = new Date(x);
    return newData.toLocaleDateString("Pl", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }
  console.log(resultLatMatch)
  return (
    <Cointainer>
      <StyledDiv>
        <Bounce bottom>
          <MatchElIndex
            title="Ostatni mecz"
            data={convertData(resultLatMatch?.data)}
            letters={resultLatMatch?.gospodarze.slice(0, 3)}
            name={resultLatMatch?.gospodarze}
            score={resultLatMatch?.pftGoals}
            lettersEnemy={resultLatMatch?.przeciwnik.slice(0, 3)}
            nameEnemy={resultLatMatch?.przeciwnik}
            scoreEnemy={resultLatMatch?.enemyGoals}
            whatNext="Zobacz statystyki"
            link={`/mecze/${resultLatMatch?.gospodarze}-${resultLatMatch?.przeciwnik}-${resultLatMatch?.data}`}
            sign="-"
          />
        </Bounce>
        {nextMatch !== undefined ? (
          <Bounce bottom>
            <MatchElIndex
              title="Następny mecz"
              data={convertData(nextMatch?.data) === "Invalid date" ? "" : convertData(nextMatch?.data)}
              letters="PFT"
              name={nextMatch?.gospodarze}
              lettersEnemy={nextMatch?.przeciwnik.slice(0, 3)}
              nameEnemy={nextMatch?.przeciwnik}
              whatNext={`${nextMatchHour === 0 ? "" : nextMatchHour}${nextMatchHour === 0 ? "" : ":"}${nextMatchMinutes === 0 || "00" ? nextMatchMinutes  : nextMatchMinutes} ${nextMatch?.miejsce}`}
              sign="VS"
              color="black"
            />
          </Bounce>
        ) : (
          <Bounce bottom>
            <MatchElIndex sign="Brak następnych meczy" color="black" title="Następny mecz"/>
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
