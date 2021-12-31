import * as React from "react";
import Layout from "../components/Organism/Layout";
import "./globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aktu from "../components/Molecules/aktualnosci/Aktu";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SponsorEl from "../components/Atoms/SponsorEl";
import sponData from "../../content/sponsors/sponsors.json";
import CustomizedTables from "../components/Molecules/MatchTable/CustomizedTables";
import backGroundImage from "../../content/assets/unsplash_JP0qiWQzjrgbackground.png";
import MatchIndex from "../components/Molecules/IndexMatch/MatchIndex";
import ProductsMain from "../components/Atoms/ProductsMain"
import MatchesSlider from "../components/Atoms/MatchesSlider"

import "mdb-react-ui-kit/dist/css/mdb.min.css";

const IndexPage = () => {
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
        <StyledSliderElement>
          <h1
            id="aktu"
            style={{
              color: "#ebebeb",
              fontSize: "clamp(40px,5vw,60px)",
              fontFamily: "Poppins",
            }}
          >
            PFT Drewneks Sampława
          </h1>
        </StyledSliderElement>
      </StyledSlider>
      <StyledDiv style={{minHeight:"200px"}}>
        <MatchesSlider />
      </StyledDiv>
      <StyledDiv>
        <MatchIndex />
      </StyledDiv>
      <StyledAktu style={{marginTop:0}}>
        <h2 style={{ fontSize: "32px", fontFamily: "poppins", color: "white" }}>
          Aktualności
        </h2>
        <Aktu />
      </StyledAktu>
      <StyledAktu style={{height: "10vh"}}>
        <ProductsMain />
      </StyledAktu>
      <StyledAktu style={{ minHeight: "30vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CustomizedTables />
        </div>
      </StyledAktu>
      
      <StyledSposnor>
        <SponsorsTitle>Sponsorzy</SponsorsTitle>
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
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 50px;
  @media only screen and (max-width: 490px) {
  }
`;
const StyledSposnor = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: #ffe600;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/bg-pattran.png?alt=media&token=8d50b11b-d328-466e-81e8-333962ee63c8");
  display: flex;
  background-image: back;
  align-items: center;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  position: relative;
  top: -10vh;
  min-height: 70vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

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
  background-image: url(${backGroundImage});
  background-repeat: no-repeat;
  ${"" /* background-color: black; */}
  position: relative;
  top: -10vh;
  z-index: 1;
  background-size: cover;
`;
const StyledSliderElement = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width:765px){
    justify-content: center;
    text-align: center;
  }
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
const SponsorsTitle = styled.p`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
  font-family: poppins;
  font-size: 32px;
`;


export default IndexPage;

{
  /* <StyledDiv className="indexAktu">
  <SyldedEl style={{ backgroundColor: "#222" }}>
    <Results className="indexMediaEl" />
  </SyldedEl>
  <SyldedEl>
    <CustomizedTables className="indexMediaEl" />
  </SyldedEl>
  <SyldedEl style={{ backgroundColor: "#222" }}>
    <NextMatch className="indexMediaEl" />
  </SyldedEl>
</StyledDiv>; */
}
