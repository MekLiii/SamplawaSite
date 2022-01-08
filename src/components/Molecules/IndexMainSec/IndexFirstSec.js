import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import "./firstsec.css";


// import backGroundImage from "../../content/assets/unsplash_JP0qiWQzjrgbackground.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import CoutingDown from "../../Atoms/CoutingDown";

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation, Autoplay]);

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
  // console.log(dataAtom.map((el) => el.node.frontmatter.zdjecia.slice(7)));
  return (
    <Box>
      <Swiper
        style={{
          "--swiper-navigation-color": "#ffe600",
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
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
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
          key={el.node.frontmatter.data + el.node.frontmatter.naglowek}
            style={{
              backgroundImage: `url(${el.node.frontmatter.zdjecia?.slice(7)})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
            
          >
            <Shadow>
              <ShadowText>{el.node.frontmatter.naglowek}</ShadowText>
              <Link to={`/${el.node.frontmatter.date}`}>
                <Button></Button>
              </Link>
            </Shadow>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
const Box = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
    height: 110%;
  }
`;
const Shadow = styled.div`
  width: 100%;
  min-height: 20%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 50%;
  }
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
`;
const Button = () => {
  return (
    <div className="center">
      <button className="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>Czytaj dalej</span>
      </button>
    </div>
  );
};
