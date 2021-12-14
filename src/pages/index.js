import * as React from "react";
import Results from "../components/Molecules/lastResults/Results";
import Layout from "../components/Organism/Layout";
import "./globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aktu from "../components/Molecules/aktualnosci/Aktu";
import MatchTable from "../components/Molecules/MatchTable/MatchTable";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";
import NextMatch from "../components/Molecules/lastResults/NextMatch";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SponsorEl from "../components/Atoms/SponsorEl";
import sponData from "../../content/sponsors/sponsors.json";
import CustomizedTables from "../components/Molecules/MatchTable/CustomizedTables";

const IndexPage = () => {
  console.log(sponData);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 2000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Layout>
      <StyledSlider>
        <h1 style={{ color: "#ffe600" }}>PFT Drewneks Sampława</h1>
      </StyledSlider>
      <StyledDiv className="indexAktu">
        <SyldedEl style={{ backgroundColor: "#222" }}>
          <Results className="indexMediaEl" />
        </SyldedEl>
        <SyldedEl>
          <CustomizedTables className="indexMediaEl" />
        </SyldedEl>
        <SyldedEl style={{ backgroundColor: "#222" }}>
          <NextMatch className="indexMediaEl" />
        </SyldedEl>
      </StyledDiv>

      <StyledAktu>
        <h1 id="aktu" style={{ color: "#ebebeb" }}>
          Aktualności
        </h1>
        <Aktu />
      </StyledAktu>
      <div style={{display:"flex", justifyContent:"center"}}>
        <h2 style={{color:"white"}}>Sponsorzy</h2>
      </div>
      <StyledSposnor>
        <div style={{ width: "100%" }}>
          <Carousel responsive={responsive}>
            {sponData.Sponsorzy.map((el) => (
              <SponsorEl name={el.name} img={el.logo} key={el.name} />
            ))}
          </Carousel>
        </div>
      </StyledSposnor>
    </Layout>
  );
};
const StyledAktu = styled.div`
  height: auto;
  min-height:70vh;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  margin-bottom:50px;
  margin-top:50px;
`;
const StyledSposnor = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: #ffe600;
  display: flex;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/bg-pattran.png?alt=media&token=8d50b11b-d328-466e-81e8-333962ee63c8");
  align-items: center;
  margin-bottom: 50px;
`;

const StyledDiv = styled.div`
  min-height: 50vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  background-color: grey;
  @media only screen and (max-width: 500px) {
    clip-path: none;
  }
`;
const StyledSlider = styled.div`
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/bg-pattran.png?alt=media&token=8d50b11b-d328-466e-81e8-333962ee63c8");
  background-color: black;
`;
const SyldedEl = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export default IndexPage;
