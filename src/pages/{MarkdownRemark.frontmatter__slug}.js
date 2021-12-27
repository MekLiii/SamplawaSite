import React, { useState } from "react";
import { graphql } from "gatsby";
import LayOut from "../components/Organism/Layout";
import backGroundImage from "../../content/assets/e8fb669ffbde1c40061ce3d70931341d301230.jpg";

import "./markdownAricle.css";
import styled from "styled-components";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ModalGalery from "../components/Molecules/galery/ModalGalery";

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const image = frontmatter?.zdjecia?.substr(8);
  const galery = frontmatter?.images;
  const [dataImage, setDataImage] = useState();
  const [modalShow, setModalShow] = useState(false);
  console.log(frontmatter.AdditionalText);
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
                fontSize: "clamp(15px,5vw,33px)",
                fontFamily: "Poppins",
                padding: "10px",
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
                <Text>{frontmatter.tresc}</Text>
                {frontmatter.AdditionalText?.map((el) => (
                  <Text>{el.addText}</Text>
                ))}
              </Article>
            </SidePost>
            <SidePost style={{ flexDirection: "column" }}>
              {/* <img src={`/${image}`} className="imgArticle" alt={image} /> */}
              <ImageList
                sx={{ width: 'auto', height: 450, overFlowY: 'hidden' }}
                cols={3}
                rowHeight={164}
              >
                {galery?.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`/${item.thumbnail.slice(8)}`}
                      srcSet={`/${item.thumbnail.slice(8)}`}
                      alt={item.thumbnail.slice(8)}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
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
                Zobacz więcej
              </Button>
            </SidePost>
          </PostGriDholder>
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
  background: rgba(255, 230, 0, 0.7);
  border-radius: 5px;
  @media only screen and (max-width:765px){
    width:80%;
    height:75px;
  }
`;
const Post = styled.div`
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
        images {
          thumbnail
        }
        AdditionalText {
          addText
        }
      }
    }
  }
`;