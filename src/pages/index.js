import * as React from "react";
import Results from "../components/Molecules/lastResults/Results";
import Slider from "../components/Molecules/slider/Slider";
import Layout from "../components/Organism/Layout";
import "./globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, graphql } from "gatsby";
import Test from "../components/Test";
import Aktu from "../components/Molecules/aktualnosci/Aktu";


// markup
const IndexPage = () => {
  return (
    <Layout>
      <div style={cointainer}>
        <section style={mainSectionLeft}>
          <Slider />
          <div style={mainCoinainer}>
            <h1 style={{color: '#ebebeb'}}>Aktualności</h1>
            <Aktu />
          </div>
        </section>
        <section style={resultCointainer}>
          <Results />
        </section>
      </div>
    </Layout>
  );
};

const cointainer = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridTemplateRows: "1fr",
  gap: "0px 0px",
  gridTemplateAreas: ". .",
  backgroundColor: "#00",
  // height: "60vh",
  width: "100%",
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
  height: '50%',
}

const mainCoinainer = {
  padding: "10px",
  display: 'flex',
  flexDirection: 'column-reverse',
};
export default IndexPage;
