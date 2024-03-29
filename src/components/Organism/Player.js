import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import TableHero from "../Molecules/roles/TableHero";
// import data from "../../../content/mecz.json";
import players from "../../../content/druzyna.json";
import AccordionEl from "../Atoms/AccordionEl";
import { faFutbol, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Chart from "../Atoms/Chart";
import bgPattern from "../../../content/assets/bg-pattran.png";
import { useStaticQuery, graphql } from "gatsby";

function Player({ pageContext }) {
  const { slug } = pageContext;
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/mecze/" } }
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
            enemyGoals
            BramkiPFT {
              Zawodnicy
              minuta
            }
            Zmiany {
              ZmianaNa
              ZmianaZ
              minuta
            }
            Zawodnicy {
              Zawodnicy
              minuty
            }
            Sztab {
              zespolSenior
            }
            Kartki {
              Zawodnicy
              kartka
              minuta
            }
          }
        }
      }
    }
  `);
  let minuts = 0;
  let playedMatches = 0;
  let goals = 0;
  let yellowCards = 0;
  let redCards = 0;
  let sortedArrayWhichMatch = [];
  let test;

  const playerData = data.allMarkdownRemark.nodes.filter((el) =>
    el.frontmatter.Zawodnicy.some(
      (el) => el != undefined && el.Zawodnicy === slug.name
    )
  );

  // played minuts
  playerData.forEach(
    (el) =>
      (minuts += el.frontmatter.Zawodnicy?.find(
        (el) => el.Zawodnicy === slug.name
      ).minuty)
  );
  // played matches
  playedMatches = playerData.length;
  // goals
  const goalsArray = [];
  playerData.forEach((el) =>
    goalsArray.push(
      el.frontmatter.BramkiPFT?.find((el) => el.Zawodnicy === slug.name)?.minuta
    )
  );
  const chuj = [];
  const testChuj = playerData
    .map((el) => el.frontmatter.BramkiPFT)
    .filter((el) => el != null)
    .map((el) => el.filter((el) => el.Zawodnicy === slug.name))
    .filter((el) => el.length > 0)
    .map(el => el.forEach(el => chuj.push(el)))
  console.log(testChuj);
  console.log(chuj);

  const filterArrayGoals = goalsArray.filter((el) => el != undefined);

  goals = chuj.length;
  //function which check how many yellow cars player has
  const yellowCardsArray = [];
  playerData.forEach((el) =>
    yellowCardsArray.push(
      el.frontmatter.Kartki?.find(
        (el) => el.Zawodnicy === slug.name && el.kartka === "Żółta"
      )
    )
  );
  const filterArrayYellowCards = yellowCardsArray.filter(
    (el) => el != undefined
  );
  yellowCards = filterArrayYellowCards.length;
  //function which check how many red cards player has
  const redCardsArray = [];
  playerData.forEach((el) =>
    redCardsArray.push(
      el.frontmatter.Kartki?.find(
        (el) => el.Zawodnicy === slug.name && el.kartka === "czerwona"
      )
    )
  );
  const filterArrayRedCards = redCardsArray.filter((el) => el != undefined);
  redCards = filterArrayRedCards.length;
  // white matches player played
  sortedArrayWhichMatch = playerData;
  const imgageOfPlayer = players.team.find((el) => el.name === slug.name)
    .zdjecia[0];

  return (
    <Layout>
      <Box>
        <Cointainer>
          <Left>
            <TableHero
              pozycja={slug.pozycja}
              rola={slug.rola}
              name={slug.name}
              key={slug.name}
              img={`${imgageOfPlayer}`}
            />
            <ChartContainer>
              <Chart
                allMiuts={minuts}
                coutMatches={playedMatches * 90 - minuts}
                title={`Średni czas na boisku w ${playedMatches} meczach`}
              />
              <Chart
                allMiuts={(goals / playedMatches) * 100} // skutecznosc
                coutMatches={100 - (goals / playedMatches) * 100} // wszystkie mecze
                title={
                  playedMatches === 0
                    ? ""
                    : `Skuteczność zawodnika w ${playedMatches} meczach`
                }
              />
            </ChartContainer>
          </Left>
          <Right>
            <SezonBox style={{ minHeight: "10vh" }}>
              <span
                style={{
                  fontSize: "clamp(20px, 5vw, 25px)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Statystyki w karierze PFT Sampława
              </span>
              <Grid>
                <Pcointainer>
                  <P>Bramki: </P>{" "}
                  <P>
                    {goals}
                    <FontAwesomeIcon
                      icon={faFutbol}
                      style={{ marginLeft: "5px" }}
                    />
                  </P>
                </Pcointainer>
                <Pcointainer>
                  <P>Mecze: </P> <P>{playedMatches}</P>
                </Pcointainer>
                <Pcointainer>
                  <P>Żółte kartkii: {""}</P>{" "}
                  <P>
                    {" "}
                    {yellowCards}
                    <FontAwesomeIcon
                      icon={faSquare}
                      color="#ffe660"
                      style={{ marginLeft: "5px" }}
                    />
                  </P>
                </Pcointainer>
                <Pcointainer>
                  <P>Czerwone Kartki: </P>{" "}
                  <P>
                    {redCards}
                    <FontAwesomeIcon
                      icon={faSquare}
                      color="red"
                      style={{ marginLeft: "5px" }}
                    />
                  </P>
                </Pcointainer>
                <Pcointainer>
                  <P>Rozegrane minuty: </P> <P> {minuts}'</P>
                </Pcointainer>
              </Grid>
            </SezonBox>
            <SezonBox style={{ height: "70%" }}>
              <span
                style={{ color: "white", fontSize: "clamp(15px, 5vw, 30px)" }}
              >
                Rozegrane mecze w sezonie: {data.AktualnySezon}
              </span>
              <AccordionEl data={sortedArrayWhichMatch} slugName={slug} />
            </SezonBox>
          </Right>
        </Cointainer>
      </Box>
    </Layout>
  );
}
const Box = styled.div`
  width: 100%;
`;
const Cointainer = styled.div`
  ${"" /* max-height: 70vh; */}
  min-height: 77vh;
  width: 100%;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Left = styled.div`
  max-height: 80vh;
  min-height: 70vh;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 7vh;
  @media (max-width: 900px) {
    width: 100%;
    max-height: 170vh;
    min-height: 77vh;
  }
  @media (max-height: 900px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;
const Right = styled.div`
  width: 70%;
  /* max-height: 70vh; */
  min-height: 77vh;
  display: flex;

  align-items: center;
  flex-direction: column;
  @media (max-width: 1400px) {
    width: 100%;
    min-height: 70vh;
    max-height: 100vh;
  }
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
const SezonBox = styled.div`
  width: 70%;
  min-height: 200px;
  height: auto;
  background-color: black;
  background-image: url(${bgPattern});
  border: 1px solid #ffe600;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 5vh;
  @media (max-width: 900px) {
    width: 95%;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    min-height: 30vh;
  }
`;
const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 900px) {
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    min-height: 13vh;
  }
`;
const P = styled.p`
  color: white;
  font-size: clamp(10px, 3vw, 18px);
`;
const Pcointainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 10vh;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 0;
    margin: 50px;
  }
  @media (max-height: 900px) {
    width: auto;
  }
`;
export default Player;
