import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import TableHero from "../Molecules/roles/TableHero";
import data from "../../../content/mecz.json";
import players from "../../../content/druzyna.json";
import AccordionEl from "../Atoms/AccordionEl";
import { faFutbol, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Chart from "../Atoms/Chart";
import bgPattern from "../../../content/assets/bg-pattran.png";

function Player({ pageContext }) {
  const { slug } = pageContext;
  //aktualny sezon
  // strzelone bramki
  //filter
  function filter(value) {
    return value != undefined;
  }
  //
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
  const scoredGoals = []
  function filterNames(element){
    return (element.Zawodnicy === slug.name && element.length != 0);
  }
  
  let chuj = [];
  matchWhoWhenScored.forEach((el) =>
  chuj.push((el?.filter(filterNames))?.length) 
  );
  const filtredCHuj =  chuj.filter(filter)
  
  let sum = 0;
  
  for (let i = 0; i < filtredCHuj.length; i++) {
      sum += filtredCHuj[i];
  }
  
  //filtruje elementy które są undefined
  
  // zagrane mecze
  const playedMatchesArray = data.sezon.find(
    (el) => el.sezon === "2021/2022"
  ).mecz;
  const objectToArray = [];
  playedMatchesArray.forEach((el) =>
    el.Zawodnicy ? objectToArray.push([el]) : []
  );

  const playedMatechNotFilter = [];
  objectToArray.forEach((el) =>
    playedMatechNotFilter.push(
      el.find((result) =>
        result.Zawodnicy?.find((player) => player.Zawodnicy === slug.name)
      )
    )
  );
  const sortedArrayWhichMatch = playedMatechNotFilter.filter(filter);

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
    
  // Kartki
  const cards = [];
  data.sezon.forEach((el) =>
    el?.mecz.forEach((el) =>
      el?.Statystyki?.forEach((el) => cards.push(el?.Kartki))
    )
  );

  //żółte kartki
  const yellowCardsArray = [];
  yellowCardsArray.filter(filter);
  cards.forEach((el) =>
    yellowCardsArray.push(el?.find((el) => el.kartka === "żółta"))
  );
  const sortedYellowCards = yellowCardsArray.filter(filter);
  // czerowne kartki
  const redCardsArray = [];

  cards.forEach((el) =>
    redCardsArray.push(el?.find((el) => el.kartka === "żółta"))
  );
  const sortedRedCards = redCardsArray.filter(filter);
  //Naprowione czerowne kartki
  const repairRedCars = [];
  cards.forEach((el) =>
    repairRedCars.push(
      el != undefined ? Object.values(el).find(
        (el) => el.Zawodnicy === slug.name && el.kartka === "czerowna"
      ) : console.log()
    )
  );
  const filterRepairRedCards = repairRedCars.filter(filter);
  //Naprawione zolte kartkii
  const repairYellowCars = [];
  cards.forEach((el) =>
    repairYellowCars.push(
      el != undefined ? Object.values(el).find(
        (el) => el.Zawodnicy === slug.name && el.kartka === "żółta"
      ) : console.log()
    )
  );

  const filterRepairYellowCards = repairYellowCars.filter(filter);
  //data z zawodnicy.json
  const playerData = players.team.find((el) => el.name === slug.name);
  const playerGoals = playerData.bramki;
  
  //minuty
  let minuty = 0;
  filterArray.forEach((el) => (minuty += el.minuty));
  //

  // const goals =  scoredGoals.length;
  const goals =  sum;
  const playedMatches =  sortedArrayWhichMatch.length;
  const yellowCards =  filterRepairYellowCards.length;
  const redCards =  + filterRepairRedCards.length;
  const minuts = minuty;
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
              img={`${playerData.zdjecia}`}
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
              {/* <span
                style={{ color: "white", fontSize: "clamp(15px, 5vw, 30px)" }}
              >
                Rozegrane mecze w sezonie: {data.AktualnySezon}
              </span> */}
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
    min-height: 70vh;
    max-height: 100vh;
    flex-direction: column-reverse;
  }
`;
const SezonBox = styled.div`
    width: 70%;
    min-height: 200px;
    background-color:black;
    background-image: url(${bgPattern});
    border 1px solid #ffe600;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    margin-top:5vh;
    @media (max-width: 900px) {
      width:95%;
      justify-content:flex-start;
      align-items:center;
      border-radius:5px;
      min-height:30vh;
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
  }
`;
export default Player;
