import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import "./firstsec.scss";

// import backGroundImage from "../../content/assets/unsplash_JP0qiWQzjrgbackground.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Parallax, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation]);

export default function App() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { date: { glob: "*" } } }) {
        edges {
          node {
            frontmatter {
              date

              naglowek
              tresc
              title
              zdjecia
            }
          }
        }
      }
    }
  `);
  const dataElement = data.allMarkdownRemark.edges;
  const dataAtom = dataElement.slice().reverse();
  console.log(dataAtom.map((el) => el.node.frontmatter.zdjecia.slice(7)));
  return (
    <Box>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#ffe600",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        {dataAtom.map((el) => (
          <SwiperSlide
            style={{
              backgroundImage: `url(${el.node.frontmatter.zdjecia?.slice(7)})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
            key={el.node.frontmatter.data}
          >
            <Shadow>
              <ShadowText>{el.node.frontmatter.naglowek}</ShadowText>

              <div class="container">
                <h1>Pure Css Button Hover effect</h1>
                <a href="#" class="button">
                  Hover me
                </a>
                <span>
                  Made by{" "}
                  <a href="http://alticreation.com/en">alticreation.com</a>
                </span>
              </div>
            </Shadow>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
const Box = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Shadow = styled.div`
  width: 100%;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ShadowText = styled.p`
  font-size: clamp(10px, 5vw, 20px);
  color: white;
`;
const ShadowButton = styled.button`
  ${
    "" /* width:120px;
    height: 50px; */
  }
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid #ffe600;
  background: linear-gradient(45deg, #ffe600 50%, #ffe600 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  color: #fff; /*For IE*/
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(45deg, orangeRed 50%, transparent 50%);
    z-index: -1;
  }
  &:hover {
    background-position: 0;
    font-size: 1.1em;

    color: orangeRed; /*For IE*/
  }
  &:hover:after {
    background-position: 0;
    font-size: 1.1em;
    color: orangeRed; /*For IE*/
  }
`;
