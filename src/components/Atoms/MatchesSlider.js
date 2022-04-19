import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import mecz from "../../../content/mecz.json";
import logo from "../../../content/assets/logo.webp";
import "./app.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { useStaticQuery, graphql } from "gatsby";
// install Swiper modules

SwiperCore.use([Autoplay, Navigation]);

export default function MatchesSlider() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/mecze/" } }
      ) {
        nodes {
          frontmatter {
            czas
            data
            gospodarze
            logoEnemy
            pftGoals
            miejsce
            pftGoals
            przeciwnik
            thumbnail
            godzina
          }
        }
      }
    }
  `);
  const [matchesData, setMatchesData] = useState(data.allMarkdownRemark.nodes);

  // const match = mecz.sezon;
  // const data = match.find((el) => el.sezon == mecz.AktualnySezon).mecz;

  // const sortedArrayDates = [];
  // data.forEach((el) =>
  //   el.Zawodnicy?.length > 0 ? "" : sortedArrayDates.push(el)
  // );
  function convertData(x) {
    const newData = new Date(x);
    return newData.toLocaleDateString("Pl", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    
  }
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      // pagination={{
      //   clickable: true,
      // }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
      style={{
        height: "300px",
        backgroundColor: "inherit",
        display: "flex",
        alignItems: "center",
      }}
    >
      {matchesData.map(({frontmatter}) => (

        <SwiperSlide
          style={{
            height: "200px",
            boderRadius: "50%",
            backgroundColor: "inherit",
          }}
          key={frontmatter.data}
        >
          <SliderElement
            date={convertData(frontmatter.data)}
            srcPFT={logo}
            srcEnemy={frontmatter.logoEnemy}
            style={{ backgroundColor: "#ffe600" }}
            name={frontmatter.gospodarze}
            nameEnemy={frontmatter.przeciwnik}
            // time={frontmatter.godzina}
            place={frontmatter.miejsce}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
const SliderElement = ({
  date,
  srcPFT,
  srcEnemy,
  style,
  name,
  nameEnemy,
  time,
  place,
}) => {
  return (
    <Box style={style}>
      <Mid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "50%",
          }}
        >
          <img
            src={srcPFT}
            alt={srcPFT}
            style={{ width: "50%", maxWidth: "111px", height: "auto" }}
          />
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "clamp(10px,5vw,20px)",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            {name}
          </p>
        </div>
        <span>VS</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "50%",
          }}
        >
          <img
            src={srcEnemy}
            alt={srcEnemy}
            style={{ width: "50%", maxWidth: "111px", height: "auto" }}
          />
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "clamp(10px,5vw,20px)",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            {nameEnemy}
          </p>
        </div>
      </Mid>
      <Bot>
        <P>Boisko: {place}</P>
        <P>{date}</P>
      </Bot>
    </Box>
  );
};
const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: space-around;
  flex-direction: column;
  border-radius: 11px;
`;

const Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const P = styled.p`
  color: #ffe600;
`;
const Bot = styled.div`
  width: 100%;
  background-color: black;
  border-bottom-right-radius: 9px;
  border-bottom-left-radius: 9px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
