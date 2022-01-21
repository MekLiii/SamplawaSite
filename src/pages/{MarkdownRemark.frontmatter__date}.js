import React, { useState } from "react";
import { graphql } from "gatsby";
import LayOut from "../components/Organism/Layout";
import backGroundImage from "../../content/assets/e8fb669ffbde1c40061ce3d70931341d301230.jpg";

import "./markdownAricle.css";
import styled from "styled-components";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ModalGalery from "../components/Molecules/galery/ModalGalery";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const image = frontmatter?.zdjecia?.substr(8);
  const galery = frontmatter?.images;
  const [modalShow, setModalShow] = useState(false);
  // pattern: /^<details>$\s*?<summary>(.*?)<\/summary>\n\n(.*?)\n^<\/details>$/ms
  const random = Math.random();
  console.log(data);
  const Galery = () => {
    if (galery === null) {
      return <p style={{ color: "grey", textAlign: "center" }}>Brak zdjęć</p>;
    } else {
      return galery?.map((item) => (
        <ImageListItem key={`${item.img}+ ${galery.indexOf(item)}`}>
          <img
            key={`${item.img}+${item.thumbnail}+${random}`}
            src={`/${item.thumbnail.slice(8)}`}
            srcSet={`/${item.thumbnail.slice(8)}`}
            alt={item.thumbnail.slice(8)}
            loading="lazy"
          />
        </ImageListItem>
      ));
    }
  };
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
                color: "black",
                fontSize: "clamp(17px,3vw,33px)",
                fontFamily: "Poppins",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {frontmatter.naglowek}
            </h1>
          </StyledSliderElement>
        </StyledSlider>
        <Post>
          <PostGriDholder>
            <SidePost>
              <Article>
                
                <ReactMarkdown>{frontmatter.tresc}</ReactMarkdown>
                {/* {frontmatter.AdditionalText?.map((el) => (
                  <ReactMarkdown key={el.addText}>
                    {el.addText}
                  </ReactMarkdown>
                ))} */}
              </Article>
            </SidePost>
            <SidePost style={{ flexDirection: "column" }}>
              <ImageHolder>
                <ImageList
                  sx={{ width: "auto", height: 450, overFlowY: "hidden" }}
                  cols={2}
                  rowHeight={164}
                >
                  <Galery />
                  <ModalGalery
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={galery}
                  />
                </ImageList>
                <Button
                  onClick={() => {
                    setModalShow(true);
                    // setDataImage(galery);
                  }}
                >
                  Powiększ zdjęcia
                </Button>
              </ImageHolder>
            </SidePost>
          </PostGriDholder>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Post>
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
  ${"" /* background-color: #1d1d1d; */}
  min-height: 80vh;
`;
const StyledSlider = styled.div`
  height: 467px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backGroundImage});
  background-repeat: no-repeat;

  position: relative;
  top: -10vh;
  z-index: 1;
  background-size: cover;
`;
const StyledSliderElement = styled.div`
  width: 615px;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 230, 0, 0.8);
  border-radius: 5px;
  @media only screen and (max-width: 765px) {
    width: 80%;
    height: 75px;
    padding: 50px;
  }
`;
const Post = styled.header`
  width: 100%;
  min-height: 60vh;
`;
const PostGriDholder = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
const SidePost = styled.div`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;
const Article = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Text = styled.p`
  font-family: poppins;
  font-weight: 300;
  font-size: 16px;
  color: white;
  line-height: 30px;
  margin-bottom: 10px !important;
`;
const Button = styled.div`
  width: 140px;
  height: 33px;
  background-color: #ffe600;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Cytat = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-left: 3px solid grey;
  padding-left: 10px;
`;
const CytatText = styled.p`
  color: grey;
`;
const ImageHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 80%;

    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id, ne: "*" }) {
      html
      frontmatter {
        date
        naglowek
        title
        tresc
        zdjecia
        images {
          thumbnail
        }
        AdditionalText {
          addText
        }
        cytat
      }
    }
  }
`;
