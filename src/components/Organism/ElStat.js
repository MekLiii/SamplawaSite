import React, { useState } from "react";
import styled from "styled-components";
import AtomicPlayer from "../Atoms/AtomicPlayer";
import Layout from "./Layout";
import data from "../../../content/mecz.json";
import LastMatchEl from "../Atoms/LastMatchEl";
import { ArrowUp } from "react-ionicons";
import { ArrowDown } from "react-ionicons";
import { TabletPortrait } from "react-ionicons";

function ElStat({ pageContext }) {
  const { slug } = pageContext;
  const [meczData, setMeczData] = useState(slug);

  const bramkiSamplawa = meczData.Statystyki[0].BramkiPFT;
  const bramkiEnemy = meczData.Statystyki[0].BramkiPrzeciwnika;

  const ActualSeson = data.AktualnySezon;
  const matches = data.sezon.find((el) => el.sezon === ActualSeson).mecz;
  const players = meczData.Zawodnicy;

  console.log(meczData)
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
                <StyledTitle>
                  <p style={{ color: "rgb(255, 230, 0)" }}>
                    {meczData.gospodarze}
                  </p>{" "}
                  <p style={{ color: "white" }}>{(bramkiSamplawa.length != undefined) ? bramkiSamplawa.length : "0"}</p>
                </StyledTitle>
                <StyledTitle>
                  <p style={{ color: "white" }}>-:-</p>
                </StyledTitle>
                <StyledTitle>
                  <p style={{ color: "rgb(255, 230, 0)" }}>
                    {meczData.przeciwnik}
                  </p>
                  <p style={{ color: "white" }}>{(bramkiEnemy.length != undefined) ? bramkiEnemy.length : "0"}</p>
                </StyledTitle>
              </div>

              <Players>
                <StylyedPlayer>
                  {bramkiSamplawa.map((el) => (
                    <AtomicPlayer
                      name={el.Zawodnicy}
                      minut={el.minuta}
                      key={el.Zawodnicy + el.minuta}
                    />
                  ))}
                </StylyedPlayer>

                <StylyedPlayer>
                  {bramkiEnemy.map((el) => (
                    <AtomicPlayer
                      style={{ flexDirection: "row-reverse" }}
                      name={el.Zawodnicy}
                      minut={el.minuta}
                      key={el.Zawodnicy + el.minuta}
                    />
                  ))}
                </StylyedPlayer>
              </Players>
            </LeftTop>
            <LeftBot>
              <LeftBotEl>
                <H1>Zawodnicy</H1>
                {players.map((el) => (
                  <AtomicPlayer
                    name={el.Zawodnicy}
                    key={el.Zawodnicy}
                    minut={el.minuty}
                  />
                ))}
              </LeftBotEl>
              <LeftBotEl>
                <H1>Kartki</H1>
                {meczData.Statystyki[0]?.Kartki?.map((el) => (
                  <AtomicPlayer
                    name={el.Zawodnicy}
                    key={el}
                    minut={el.minuta}
                    other={
                      <TabletPortrait
                        color={(el.kartka === "czerwona") ? "red" : "yellow"}
                      />
                    }
                  />
                ))}
              </LeftBotEl>
              <LeftBotEl>
                <H1>Zmiany</H1>
                {meczData.Statystyki[0]?.Zmiany?.map((el) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <ArrowDown color={"red"} height="25px" width="25px" />
                    <p style={{ color: "white" }}>{el.ZmianaZ}</p>

                    <p style={{ color: "white" }}>{el.ZmianaNa}</p>
                    <p style={{ color: "white" }}>{el.minuta}'</p>
                    <ArrowUp color={"green"} height="25px" width="25px" />
                  </div>
                ))}
              </LeftBotEl>
            </LeftBot>
          </SidebarLeft>
          <SidebarRight>
            <H1>Poprzednie mecze</H1>
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
  display: flex;
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
const StyledTitle = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
const LeftBotEl = styled.div`
  flex: 1;
  display: flex;
  ${"" /* justify-content: center; */}
  align-items: center;
  flex-direction: column;
`;
const H1 = styled.h1`
  color: #979797;
`;
