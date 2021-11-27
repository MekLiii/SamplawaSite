import React from "react";
import { graphql } from "gatsby";
import LayOut from "../components/Organism/Layout";
import img from "../images/slider/slider2.jpg";
import Results from "../components/Molecules/lastResults/Results";
import './markdownAricle.css'
import MatchTable from "../components/Molecules/MatchTable/MatchTable";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <LayOut>
      <div className="blog-post-container">
        <div className="blog-post">
          <div style={heading}>
            <h1>{frontmatter.naglowek}</h1>
            <p>{frontmatter.date}</p>
          </div>
          <div className="contentBox">
            <div className="contentBoxImage">
              <img src={img} className="imgArticle" />
            </div>
            <div className="contentBoxText">
              <p style={{ margin: "30px" }}>{frontmatter.tresc}</p>
            </div>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="LeftSide">
          <Results />
          <MatchTable />
        </div>
      </div>
    </LayOut>
  );
}

const MainCointainer = {
  minHeight: "80vh",
  width: "100%",
  backgroundColor: "white",
  // display: "flex",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridTemplateRows: "1fr",
  gap: "0px 0px",
  gridTemplateAreas: ". .",
  backgroundColor: "#00",
  // height: "60vh",
  width: "100%",
};
const heading = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};



export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        id
        naglowek
        title
        tresc
        zdj_cia
      }
    }
  }
`;
