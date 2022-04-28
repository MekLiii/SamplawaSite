import React,{ useState} from "react";

import styled from "styled-components";
import "./app.css";
import loadable from "@loadable/component";
import { useStaticQuery, graphql } from "gatsby";

const OtherComponent = loadable(() => import("./CoutingDownEl"));

function CoutingDown() {
  
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
        }
      }
    }
  }
`);

  const [lastMatchData] = useState(lastMatch.allMarkdownRemark.nodes);
  lastMatchData.sort(
    (a, b) => new Date(a.frontmatter.data) - new Date(b.frontmatter.data)
  );
  const nextMatch = lastMatchData.find(
    (el) => new Date(el.frontmatter.data) > new Date()
  )?.frontmatter === undefined ? undefined : lastMatchData.find(
    (el) => new Date(el.frontmatter.data) > new Date()
  )?.frontmatter;

  const nextMatchHour = parseInt(nextMatch?.godzina / 60);
  const nextMatchMinutes = nextMatch?.godzina % 60 > 9 ? nextMatch?.godzina % 60 : `0${nextMatch?.godzina % 60}`;

    
  
  if (nextMatch?.data === new Date()) {
    return (
      <Box>
        <P>
          Mecz odbędzie się dziś, {nextMatch.godzina}{" "}
          {nextMatch.miejsce}
        </P>
      </Box>
    );
  }
  
  const dateHourMinut = nextMatchHour + ":" + nextMatchMinutes;
  const dataWithHours = new Date(`${dateHourMinut} ${nextMatch.data}`);

  
  return (
    <div style={{width: '100%'}}>
      {nextMatch != undefined && (
        <Box>
          <P>Na boisku widzimy się za:</P>
          <OtherComponent dateTo={dataWithHours} />
        </Box>
      )}
    </div>
  );
}

const Box = styled.div`
  width: 100%;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`;
const P = styled.p`
  font-size: clamp(20px, 3vw, 50px);
  color: white;
  font-family: poppins;
`;
export default CoutingDown;
