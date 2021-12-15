import React from "react";
import { graphql } from "gatsby";
import LayOut from "../components/Organism/Layout";
import img from "../images/slider/slider2.jpg";
import Results from "../components/Molecules/lastResults/Results";
import "./markdownAricle.css";
import MatchTable from "../components/Molecules/MatchTable/MatchTable";
import styled from "styled-components";

// import img from '../../content/blog/images/article.jpg'

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const image = frontmatter.zdjecia.substr(8);
  return (
    <LayOut style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box>
        <div className="blog-post">
          <div style={heading}>
            <h1 style={{ color:'white' }}>{frontmatter.naglowek}</h1>
            <p style={{ color:'white' }}>{frontmatter.date}</p>
          </div>
          <div className="contentBox">
            <div className="contentBoxImage">
              <img src={image} className="imgArticle" alt={image} />
            </div>
            <div className="contentBoxText">
              <p style={{ margin: "30px", color:'rgb(151, 151, 151)' }}>{frontmatter.tresc}</p>
            </div>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="LeftSide"></div>
      </Box>
    </LayOut>
  );
}

const heading = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const Box = styled.div`
  width: 90%;
  height: 90%;
  background-color: #1d1d1d;
  min-height: 80vh;
  
`;

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
        zdjecia
      }
    }
  }
`;
