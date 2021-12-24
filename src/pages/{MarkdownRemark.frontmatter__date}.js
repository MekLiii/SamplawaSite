import React from "react";
import { graphql } from "gatsby";
import LayOut from "../components/Organism/Layout";
import backGroundImage from "../../content/assets/unsplash_JP0qiWQzjrgbackground.png";


import "./markdownAricle.css";
import styled from "styled-components";

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const image = frontmatter?.zdjecia?.substr(8);
  return (
    <LayOut
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Box>
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
        {/* <div className="blog-post">
          <div style={heading}>
            <h1 style={{ color: "white" }}>{frontmatter?.naglowek}</h1>
            <p style={{ color: "white" }}>{frontmatter?.date}</p>
          </div>
          <div className="contentBox">
            <div className="contentBoxImage">
              <img src={image} className="imgArticle" alt={image} />
            </div>
            <div className="contentBoxText">
              <p style={{ margin: "30px", color: "rgb(151, 151, 151)" }}>
                {frontmatter.tresc}
              </p>
            </div>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="LeftSide"></div> */}
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
  width: 100%;
  height: 90%;
  background-color: #1d1d1d;
  min-height: 80vh;
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
`;

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id, ne: "*" }) {
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
