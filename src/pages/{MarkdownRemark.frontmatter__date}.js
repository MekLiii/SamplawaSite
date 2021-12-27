import React from "react";
import { graphql } from "gatsby";
import LayOut from "../components/Organism/Layout";
import backGroundImage from "../../content/assets/e8fb669ffbde1c40061ce3d70931341d301230.jpg";

import "./markdownAricle.css";
import styled from "styled-components";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const image = frontmatter?.zdjecia?.substr(8);
  console.log(data)
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
              }}
            >
              {frontmatter.naglowek}
            </h1>
          </StyledSliderElement>
        </StyledSlider>
        <Post>
          <PostGriDholder>
            <SidePost>{frontmatter.tresc}</SidePost>
            <SidePost>
              {/* <img src={`/${image}`} className="imgArticle" alt={image} /> */}
              <ImageList
                sx={{ width: 500, height: 450 }}
                variant="woven"
                cols={3}
                gap={8}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=161&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
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
`;
const Post = styled.div`
  width: 100%;
  height: 60vh;
`;
const PostGriDholder = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
`;
const SidePost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const pageQuery = graphql`
query ($id: String) {
  markdownRemark(id: {eq: $id, ne: "*"}) {
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
    }
  }
}
`;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
];
