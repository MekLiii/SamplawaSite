import React from "react";
import { graphql } from "gatsby";
import LayOut from "../components/Organism/Layout";
import img from "../images/slider/slider2.jpg";
import Results from "../components/Molecules/lastResults/Results";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <LayOut>
      <div className="blog-post-container" style={MainCointainer}>
        <div className="blog-post">
          <div style={heading}>
            <h1>{frontmatter.naglowek}</h1>
            <p>{frontmatter.date}</p>
          </div>
          <div style={contentBox}>
            <div style={contentBoxImage}>
              <img src={img} style={imgStyle} />
            </div>
            <div style={contentBoxText}>
              <p style={{margin: '30px'}}>{frontmatter.tresc}</p>
            </div>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="LeftSide">
            <Results />
        </div>
      </div>
    </LayOut>
  );
}

const MainCointainer = {
  height: "80vh",
  width: "100%",
  backgroundColor: "white",
  display: 'flex',
};
const heading = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const contentBox = {
  width: "90%",
  height: "auto",
};
const contentBoxImage = {
  height: "60vh",
  width: "60vw",
};
const imgStyle = {
  height: "100%",
  width: "100%",
  marginLeft: '30px'
};
const contentBoxText = {
  width: '75%'
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
