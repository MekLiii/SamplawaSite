import * as React from "react";
import Results from "../components/Molecules/lastResults/Results";
import Slider from "../components/Molecules/slider/Slider";
import Layout from "../components/Organism/Layout";
import "./globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aktu from "../components/Molecules/aktualnosci/Aktu";
import MatchTable from "../components/Molecules/MatchTable/MatchTable";
import styled from "styled-components";
import img from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import scrollTo from 'gatsby-plugin-smoothscroll';

// markup
const IndexPage = () => {

  return (
    <Layout>
      <StyledDiv>
        <StyledUnderDiv>
          <h1 style={{ color: "#fed053" }}>PFT Drewneks Sampława</h1>
          <img src={img} style={{ width: "200px", height: "200px" }} />
        </StyledUnderDiv>
        <FontAwesomeIcon
          icon={faArrowDown}
          style={{ color: "#fed053", fontSize: "50px" }}
          onClick={() => scrollTo('#aktu')}
        />
      </StyledDiv>
      <div className="indexCointainer">
        <section style={mainSectionLeft}>
          <div style={mainCoinainer}>
            <h1 id="aktu" style={{ color: "#ebebeb" }}>Aktualności</h1>
            <Aktu />
          </div>
        </section>
        <section style={resultCointainer}>
          <Results />
          <MatchTable />
        </section>
      </div>
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
  minHeight: "500px",
  justifyContent: "flex-start",
  alignItems: "center",
};

const mainCoinainer = {
  padding: "10px",
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
  flex-direction: column;
`;
const StyledUnderDiv = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export default IndexPage;
