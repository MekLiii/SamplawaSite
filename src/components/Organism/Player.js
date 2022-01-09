import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import TableHero from "../Molecules/roles/TableHero";
import data from "../../../content/mecz.json";

function Player({ pageContext }) {
  const { slug } = pageContext;

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
  console.log(cards);

  const goals = slug.bramki + sortedArrayWhenScored.length;
  const playedMatches = slug.mecze + filterArray.length;
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
            <SezonBox>
              <p>Bramki:{goals}</p>
              <p>Mecze:{playedMatches}</p>
              <p>Żółte kartki:{slug.cKartki}</p>
              <p>Czerwone Kartki:{slug.zKartki}</p>
            </SezonBox>
            {data.sezon.map((el) => (
              <SezonBox key={el.sezon}>
                <p>{el.sezon}</p>
              </SezonBox>
            ))}
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
  max-height: 70vh;
  min-height: 77vh;
  width: 100%;
  display: flex;
`;
const Left = styled.div`
  max-height: 70vh;
  min-height: 77vh;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  width: 70%;
  max-height: 70vh;
  min-height: 77vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
const SezonBox = styled.div`
    width: 70%;
    height: 200px;
    background-color:black;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/bg-pattran.png?alt=media&token=8d50b11b-d328-466e-81e8-333962ee63c8");
    border 1px solid #ffe600;
`;

export default Player;
