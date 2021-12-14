import React, { useState } from "react";
import styled from "styled-components";
import AtomicPlayer from "../Atoms/AtomicPlayer";
import Layout from "./Layout";

function ElStat({ pageContext }) {
  console.log(pageContext);
  const { slug } = pageContext;
  const [mecz, setMecz] = useState(slug);
  console.log(mecz.Statystyki[0]);

  const bramkiSamplawa = mecz.Statystyki[0].BramkiPFT;
  const bramkiEnemy = mecz.Statystyki[0].BramkiPrzeciwnika;

  console.log(bramkiEnemy);
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
                <p>{mecz.gospodarze}</p>
                <p>-:-</p>
                <p>{mecz.przeciwnik}</p>
              </div>
              <p>
                {bramkiSamplawa.length} - {bramkiEnemy.length}
              </p>
              <Players>
                <StylyedPlayer>
                  {bramkiSamplawa.map((el) => (
                    <AtomicPlayer name={el.Zawodnicy} minut={el.minuta} />
                  ))}
                </StylyedPlayer>

                <StylyedPlayer>
                  {bramkiEnemy.map((el) => (
                    <AtomicPlayer name={el.Zawodnicy} minut={el.minuta} />
                  ))}
                </StylyedPlayer>
              </Players>
            </LeftTop>
            <LeftBot></LeftBot>
          </SidebarLeft>
          <SidebarRight>
            <h1>Poprzednie mecze</h1>
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
  justify-content: center;
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
