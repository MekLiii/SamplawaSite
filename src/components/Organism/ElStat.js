import React, { useState } from "react";
import styled from "styled-components";
import AtomicPlayer from "../Atoms/AtomicPlayer";
import Layout from "./Layout";
import data from "../../../content/mecz.json";
import LastMatchEl from "../Atoms/LastMatchEl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ElStat({ pageContext }) {
  const { slug } = pageContext;
  const [meczData, setMeczData] = useState(slug);

  const bramkiSamplawa = meczData.Statystyki[0].BramkiPFT;
  const bramkiEnemy = meczData.Statystyki[0].BramkiPrzeciwnika;

  const ActualSeson = data.AktualnySezon;
  const matches = data.sezon.find((el) => el.sezon === ActualSeson).mecz;
  const players = meczData.Zawodnicy;

  const howManyPlayerShootedGoals = bramkiSamplawa.find((el) => el.Zawodnicy === el.Zawodnicy)
  console.log(bramkiSamplawa.find((el) => el.Zawodnicy === el.Zawodnicy))
    console.log(bramkiSamplawa)
  return (
    <Layout>
      <Cointainer>
        <Box>
          <SidebarLeft>
            <LeftTop>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <StyledTitle>{meczData.gospodarze}</StyledTitle>
                <StyledTitle>-:-</StyledTitle>
                <StyledTitle>{meczData.przeciwnik}</StyledTitle>
              </div>
              <p>
                {bramkiSamplawa.length} - {bramkiEnemy.length}
              </p>
              <Players>
                <StylyedPlayer>
                  {bramkiSamplawa.map((el) => (
                    <AtomicPlayer
                      name={el.Zawodnicy}
                      minut={el.minuta}
                      key={el.Zawodnicy}
                    />
                  ))}
                </StylyedPlayer>

                <StylyedPlayer>
                  {bramkiEnemy.map((el) => (
                    <AtomicPlayer
                      name={el.Zawodnicy}
                      minut={el.minuta}
                      key={el.Zawodnicy}
                    />
                  ))}
                </StylyedPlayer>
              </Players>
            </LeftTop>
            <LeftBot>
              <TableContainer
                component={Paper}
                style={{
                  overflowX: "hidden",
                  overflowY: "auto",
                  height: "100%",
                  borderRadius: "0px",
                  maxWidth: "100%",
                  backgroundColor:'none'
                }}
              >
                <Table
                  sx={{ minWidth: 150 }}
                  size="small"
                  aria-label="a dense table"
                  style={{ height: "100%" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" width="30px">
                        Zawodnik
                      </TableCell>
                      <TableCell align="right">Bramki</TableCell>
                      <TableCell align="right">Kartki</TableCell>
                      <TableCell align="right">Minuty</TableCell>
                      <TableCell align="right">Zmiany</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {players.map((el) => (
                      <TableRow key={el.druzyna}>
                        <TableCell component="th" scope="row">
                          {el.Zawodnicy}
                        </TableCell>
                        <TableCell component="th" scope="row" align="right">
                          {(el.Zawodnicy === bramkiSamplawa.map((el) => el.Zawodnicy).toString() ?"tak" : "nie")}
                        </TableCell>
                        <TableCell align="right">{el.minuty}</TableCell>
                        <TableCell align="right">{el.punkty}</TableCell>
                        <TableCell align="right">{el.bramki}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </LeftBot>
          </SidebarLeft>
          <SidebarRight>
            <h1>Poprzednie mecze</h1>
            {matches.map((el) => (
              <LastMatchEl
                enemy={el.przeciwnik}
                date={el.data}
                onClick={() => setMeczData(el)}
                key={`${el.przeciwnik}`}
              />
            ))}
          </SidebarRight>
        </Box>
      </Cointainer>
    </Layout>
  );
}

export default ElStat;
const Cointainer = styled.div`
  min-height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 90%;
  height: 82vh;
  background-color: rgba(43, 43, 43, 0.95);
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-template-columns: 2fr 1fr;
`;
const SidebarLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const SidebarRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid yellow;
`;
const LeftTop = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LeftBot = styled.div`
  height: 50%;
  width: 100%;
`;
const Players = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StylyedPlayer = styled.div`
  height: 90%;
  width: 35%;
  display: flex;
  flex-direction: column;
`;
const StyledTitle = styled.p`
  font-size: 2rem;
`;
