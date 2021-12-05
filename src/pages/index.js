import * as React from "react";
import Results from "../components/Molecules/lastResults/Results";
import Layout from "../components/Organism/Layout";
import "./globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aktu from "../components/Molecules/aktualnosci/Aktu";
import MatchTable from "../components/Molecules/MatchTable/MatchTable";
import styled from "styled-components";
import img from "../images/logo.png";
import scrollTo from "gatsby-plugin-smoothscroll";
import NextMatch from "../components/Molecules/lastResults/NextMatch";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SponsorEl from "../components/Atoms/SponsorEl";
import sponData from "../../content/sponsors/sponsors.json";

// markup
const IndexPage = () => {
  console.log(sponData)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Layout >
      <StyledSlider>
        <h1 style={{ color: "#ffe600", transform: "rotate(-5.0deg)" }}>
          PFT Drewneks Sampława
        </h1>
      </StyledSlider>
      <StyledDiv>
        <SyldedEl style={{ backgroundColor: "#222" }}>
          <Results />
        </SyldedEl>
        <SyldedEl style={{ backgroundColor: "#ddd" }}>
          <NextMatch />
        </SyldedEl>
        <SyldedEl style={{ backgroundColor: "#eee" }}>
          <MatchTable />
        </SyldedEl>
      </StyledDiv>
      <div className="indexCointainer">
        <h1 id="aktu" style={{ color: "#ebebeb" }}>
          Aktualności
        </h1>
        <Aktu />
      </div>
      <SponsorSections >
          <Carousel responsive={responsive} style={{display:'flex',alignItems: 'center'}}>
            {sponData.Sponsorzy.map((el) => (
              <SponsorEl name={el.name} img={el.logo} key={el.name}/>
            ))}
          </Carousel>

      </SponsorSections>
    </Layout>
  );
};



const mainSectionLeft = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  // border: "2px solid grey",
  // backgroundColor: 'grey',
};
const resultCointainer = {
  display: "flex",
  flexDirection: "column",
  minHeight: "800px",
  justifyContent: "flex-start",
  alignItems: "center",
};

const mainCoinainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const StyledDiv = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  clip-path: polygon(0 33%, 100% 10%, 100% 72%, 0 95%);
`;
const StyledUnderDiv = styled.div`
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledSlider = styled.div`
  height: 20vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SyldedEl = styled.div`
  flex: 1;
  height: 100%;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SponsorSections = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default IndexPage;
