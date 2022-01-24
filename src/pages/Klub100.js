import React from "react";
import Layout from "../components/Organism/Layout";
import styled from "styled-components";
import data from "../../content/klub100.json";
import klub from "../../content/assets/klub100.jpg";
import wzor from "../../content/assets/plakietka.jpg";

function Klub100() {
  return (
    <Layout>
      <StyledDiv>
        <StyledBox>
          <StyledCard>
            <StyledSection
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "#ffe600" }}>KLUB 100</h1>
              <Img src={klub} alt="logo" />
            </StyledSection>
            <StyledSection>
              <P>{data.klubSto}</P>
            </StyledSection>
            <StyledSection>
              <Title>
                <h2 style={{ color: "#979797" }}>Regulamin "Klubu 100"</h2>
              </Title>
              <P>{data.zasadyOgolne.ttitle}</P>
              <P>{data.zasadyOgolne[1]}</P>
              <P>{data.zasadyOgolne[2]}</P>
              <P>{data.zasadyOgolne[3]}</P>
              <P>{data.zasadyOgolne[4]}</P>
              <P>{data.zasadyOgolne[5]}</P>
            </StyledSection>
            <StyledSection>
              <P>{data.Obowiazki.title}</P>
              <P>{data.Obowiazki[1]}</P>
              <P>{data.Obowiazki[2]}</P>
              <P>{data.Obowiazki[3]}</P>
            </StyledSection>
            <StyledSection>
              <Title>
                <h2 style={{ color: "#979797" }}> {data.Korzyści.title}</h2>
              </Title>
              <P>{data.Korzyści.OsobaPrywatna.title}</P>
              <P>{data.Korzyści.OsobaPrywatna[1]}</P>
              <P>{data.Korzyści.OsobaPrywatna[2]}</P>
              <P>{data.Korzyści.OsobaPrywatna[3]}</P>
            </StyledSection>
            <StyledSection>
              <P>{data.Korzyści.DlaFirmy.title}</P>

              <P>{data.Korzyści.DlaFirmy[1]}</P>
              <P>{data.Korzyści.DlaFirmy[2]}</P>
              <P>{data.Korzyści.DlaFirmy[3]}</P>
              <P>{data.Korzyści.DlaFirmy[4]}</P>
              <P>{data.Korzyści.DlaFirmy[5]}</P>
              <P>{data.Korzyści.DlaFirmy[6]}</P>
            </StyledSection>
            <StyledSection
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <P>{data.Pozostale.title}</P>
              <P>{data.Pozostale.Link}</P>
            </StyledSection>
            <StyledSection
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <P>Wzór karty członkowskiej</P>
              <img src={wzor} alt="wzor" style={{ width: "100%" }} />
            </StyledSection>
            <StyledSection></StyledSection>
          </StyledCard>
        </StyledBox>
      </StyledDiv>
    </Layout>
  );
}
const StyledDiv = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const StyledBox = styled.div`
  width:60%;
  min-height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledCard = styled.div`
  margin: 10px;
  background-color: #1d1d1d;
  border: 10px solid #2b2b2b;
  padding: 20px;
`;
const StyledSection = styled.div`
  width: 100%;
`;
const P = styled.p`
  color: #979797;
`;
const Img = styled.img`
  width: 100px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Klub100;
