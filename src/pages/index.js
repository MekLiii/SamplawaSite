import * as React from "react";
import Results from "../components/Molecules/lastResults/Results";
import Layout from "../components/Organism/Layout";
import "./globalStyles.css";


// markup
const IndexPage = () => {
  
  return (
    <Layout>
      <div style={cointainer}>
        <section style={mainSectionLeft}>chujchuj</section>
        <section>
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
  gridTemplateAreas:'. .', 
  backgroundColor: "#00",
  height: "60vh",
  width: "100%",
  
};

const mainSectionLeft = {
  backgroundColor: "pink"
};

export default IndexPage;
