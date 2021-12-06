import React from "react";
import { graphql } from "gatsby";
import LayOut from "../components/Organism/Layout";
import img from "../images/slider/slider2.jpg";
import Results from "../components/Molecules/lastResults/Results";
import './markdownAricle.css'
import MatchTable from "../components/Molecules/MatchTable/MatchTable";
// import img from '../../content/blog/images/article.jpg'

export default function Template({data}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  console.log(frontmatter.zdjecia);
  
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
              <img src={frontmatter.zdjecia} className="imgArticle" alt={frontmatter.zdjecia} />
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
        zdjecia
      }
    }
  }
`;
