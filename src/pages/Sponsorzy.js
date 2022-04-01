import React from "react";
import Layout from "../components/Organism/Layout";
import styled from "styled-components";
import data from "../../content/sponsorzyNew.json";
import Bounce from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';


function Sponsorzy() {
  const titleSponsor = data.sponsTitle;
  const strategySponsor = data.sponsStrategy;
  const goldSponsor = data.sponsGold;
  const silverSponsor = data.sponsSilver;
  const bronzeSponsor = data.sponsBrown;
  const mediaSponsor = data.sponsMed;
  console.log(goldSponsor);
  return (
    <Layout currectSiteProp="sponsorzy">
      <Cointainer>
        <Box>
          <SponsorBox style={{ alignItems: "center" }}>
            <P>SPONSOR TYTULARNY</P>
            <SponsorHoldersBox>
              {titleSponsor.map((el) => (
                <SponsorEl key={el.nazwa} src={el.logo} name={el.nazwa} link={el.link} />
              ))}
            </SponsorHoldersBox>
          </SponsorBox>
          <SponsorBox style={{ alignItems: "flex-end" }}>
            <P>SPONSOR STRATEGICZNY</P>
            <Fade left>
            <SponsorHoldersBox>
              {strategySponsor.map((el) => (
                <SponsorEl key={el.nazwa} src={el.logo} name={el.nazwa} link={el.link}/>
              ))}
            </SponsorHoldersBox>
            </Fade>
          </SponsorBox>
          <SponsorBox style={{ alignItems: "flex-start" }}>
            <P>SPONSOR Gold</P>
            <Fade right>
            <SponsorHoldersBox>
              {goldSponsor.map((el) => (
                <SponsorEl key={el.nazwa} src={el.logo} name={el.nazwa} link={el.link}/>
              ))}
            </SponsorHoldersBox>
            </Fade>
          </SponsorBox>
          <SponsorBox style={{ alignItems: "flex-start" }}>
            <P>SPONSOR SILVER</P>
            <Fade right>
            <SponsorHoldersBox>
              {silverSponsor.map((el) => (
                <SponsorEl key={el.nazwa} src={el.logo} name={el.nazwa} link={el.link}/>
              ))}
            </SponsorHoldersBox>
            </Fade>
          </SponsorBox>
          <SponsorBox style={{ alignItems: "flex-end" }}>
            <P>SPONSOR BRĄZ</P>
            <Fade left>
            <SponsorHoldersBox style={{marginBottom:"20px"}}>
              {bronzeSponsor.map((el) => (
                <SponsorEl key={el.nazwa} src={el.logo} name={el.nazwa} link={el.link}/>
              ))}
            </SponsorHoldersBox>
            </Fade>
          </SponsorBox>
          <SponsorBox
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <P>PATRONI MEDIALNI</P>
            <Fade bottom>
            <SponsorHoldersBox>
              {mediaSponsor.map((el) => (
                <SponsorEl key={el.nazwa} src={el.logo} name={el.nazwa} link={el.link}/>
              ))}
            </SponsorHoldersBox>
            </Fade>
          </SponsorBox>
        </Box>
      </Cointainer>
    </Layout>
  );
}

const SponsorEl = ({ src, name, link }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a href={link === undefined ? "#" : link} target="_blank" style={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
        <StyledImg src={src} alt={src} />
        <PsponsName>{name}</PsponsName>
      </a>
    </div>
  );
};

const Cointainer = styled.div`
  width: 100%;
  min-height: 77vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const Box = styled.div`
  min-height: 50%;
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const SponsorBox = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ffe600;
  justify-content: center;
  &:last-child {
    border-bottom: none;
  }
  @media (max-width:1000px){
      
      justify-content: center;
      align-items: center !important;
  }
`;
const SponsorHoldersBox = styled.div`
  width: auto;
  /* height: 100%; */
  min-height: 20vh;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  @media (max-width:1000px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
`;
const P = styled.p`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffe600;
  font-family: poppins;
  font-size: 32px;
  text-align: center;
`;
const PsponsName = styled.p`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  font-family: poppins;
  font-size: 16px;
  text-align: center;
`;
export default Sponsorzy;
