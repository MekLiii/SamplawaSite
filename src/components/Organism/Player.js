import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import TableHero from "../Molecules/roles/TableHero";
import data from "../../../content/mecz.json";
import AccordionEl from "../Atoms/AccordionEl";

import { useStaticQuery, graphql } from "gatsby";

function Player({ pageContext }) {
  const { slug } = pageContext;
  //aktualny sezon
  // strzelone bramki
  const matchWhoWhenScored = [];
  const matchWhenPlayersScored = [];
  data.sezon.forEach((el) =>
    el?.mecz.forEach((el) =>
      el?.Statystyki?.forEach((el) => matchWhoWhenScored.push(el?.BramkiPFT))
    )
  );
  matchWhoWhenScored.forEach((el) =>
    matchWhenPlayersScored.push(el?.find((el) => el?.Zawodnicy === slug.name))
  );

  //filtruje elementy które są undefined
  function filter(value) {
    return value != undefined;
  }
  // zagrane mecze
  const playedMatchesArray = data.sezon.find(
    (el) => el.sezon === "2021/2022"
  ).mecz;
  const objectToArray = [];
  playedMatchesArray.forEach((el) =>
    el.Zawodnicy ? objectToArray.push([el]) : []
  );
  // console.log(objectToArray)
  const playedMatechNotFilter = [];
  objectToArray.forEach((el) =>
    playedMatechNotFilter.push(
      el.find((result) =>
        result.Zawodnicy?.find((player) => player.Zawodnicy === slug.name)
      )
    )
  );
  const sortedArrayWhichMatch = playedMatechNotFilter.filter(filter);
  console.log(sortedArrayWhichMatch);

  //stała filtrująca tablice matchWhenPlayersScored
  const sortedArrayWhenScored = matchWhenPlayersScored.filter(filter);

  //ile meczy zagrał zawodnik
  const playedMatchesAllPlayers = [];
  data.sezon.forEach((el) =>
    el?.mecz.forEach((el) => playedMatchesAllPlayers.push(el.Zawodnicy))
  );

  const sortedplayedMatchesAllPlayers = playedMatchesAllPlayers.filter(filter);
  const howManyMatchesPlayed = [];
  sortedplayedMatchesAllPlayers.forEach((el) =>
    howManyMatchesPlayed.push(el.find((el) => el.Zawodnicy === slug.name))
  );
  const filterArray = howManyMatchesPlayed.filter(filter);
  //minuty
  let minuty = 0;
  filterArray.forEach((el) => (minuty += el.minuty));

  // Kartki
  const cards = [];
  data.sezon.forEach((el) =>
    el?.mecz.forEach((el) =>
      el?.Statystyki?.forEach((el) => cards.push(el?.Kartki))
    )
  );

  //żółte kartki
  const yellowCardsArray = [];

  cards.forEach((el) =>
    yellowCardsArray.push(el.find((el) => el.kartka === "żółta"))
  );
  const sortedYellowCards = yellowCardsArray.filter(filter);
  // czerowne kartki
  const redCardsArray = [];

  cards.forEach((el) =>
    redCardsArray.push(el.find((el) => el.kartka === "żółta"))
  );
  const sortedRedCards = redCardsArray.filter(filter);
  //Naprowione czerowne kartki
  const repairRedCars = [];
  cards.forEach((el) => repairRedCars.push(Object.values(el).find(el => el.Zawodnicy === slug.name && el.kartka === "czerowna")))
  const filterRepairRedCards = repairRedCars.filter(filter)
 //Naprawione zolte kartkii
 const repairYellowCars = [];
 cards.forEach((el) => repairYellowCars.push(Object.values(el).find(el => el.Zawodnicy === slug.name && el.kartka === "żółta")))
 
 const filterRepairYellowCards = repairYellowCars.filter(filter)
 //
  const goals = slug.bramki + sortedArrayWhenScored.length;
  const playedMatches = slug.mecze + filterArray.length;
  const yellowCards = slug.zKartki + filterRepairYellowCards.length;
  const redCards = slug.cKartki + filterRepairRedCards.length;
  const minuts = 0;
  function convertData(x) {
      const newData = new Date(x);
      return newData.toLocaleDateString("Pl", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    }
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
              img={`/${slug.zdjecia?.slice(8)}`}
            />
          </Left>
          <Right>
            <SezonBox style={{ minHeight: "10vh" }}>
              <span
                style={{ fontSize: "clamp(20px, 5vw, 25px)", color: "white",textAlign:"center" }}
              >
                Statystyki w karierze PFT Sampława
              </span>
              <Grid>
                <Pcointainer><P>Bramki: </P> <P>{goals}</P></Pcointainer>
                <Pcointainer><P>Mecze: </P> <P> {playedMatches}</P></Pcointainer>
                <Pcointainer><P>Żółte kartkii: {""}</P> <P> {yellowCards}</P></Pcointainer>
                <Pcointainer><P>Czerwone Kartki: </P> <P> {redCards}</P></Pcointainer>
                <Pcointainer><P>Rozegrane minuty: </P> <P> {minuty}'</P></Pcointainer>
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  max-height: 70vh;
  min-height: 77vh;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 70%;
  max-height: 70vh;
  min-height: 77vh;
  display: flex;

  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    max-height: 100vh;
    flex-direction: column-reverse;
  }
`;
const SezonBox = styled.div`
    width: 70%;
    min-height: 200px;
    background-color:black;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/bg-pattran.png?alt=media&token=8d50b11b-d328-466e-81e8-333962ee63c8");
    border 1px solid #ffe600;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    margin-top:5vh;
    @media (max-width: 768px) {
      width:100%;
      justify-content:flex-start;
      align-items:center;
    }
`;
const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    min-height: 13vh;
  }
`;
const P = styled.p`
  color: white;
`;
const Pcointainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

export default Player;
