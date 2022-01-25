import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import mecz from "../../../content/mecz.json";
import logo from "../../../content/assets/logo.webp";
import "./app.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules

SwiperCore.use([Autoplay, Navigation]);

export default function MatchesSlider() {
  const match = mecz.sezon;
  const data = match.find((el) => el.sezon == mecz.AktualnySezon).mecz;

  const today = new Date();
  const currentDay =
    today.getDate() > "9" ? today.getDate() : "0" + today.getDate();
  const currentDate =
    today.getMonth() + 1 + "/" + currentDay + "/" + today.getFullYear();
  const resultNextMatch = data.find(({ data }) => data < currentDay);
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
      style={{ height: "200px", backgroundColor: "inherit" }}
    >
      {data.map((el) => (
        <SwiperSlide
          style={{
            height: "200px",
            boderRadius: "50%",
            backgroundColor: "inherit",
          }}
          key={el.data}
        >
          <SliderElement
            date={convertData(el.data)}
            srcPFT={logo}
            srcEnemy={el.logoEnemy.slice(7)}
            style={{ backgroundColor: "#ffe600" }}
            name={el.gospodarze}
            nameEnemy={el.przeciwnik}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
const SliderElement = ({ date, srcPFT, srcEnemy, style, name, nameEnemy }) => {
  return (
    <Box style={style}>
      <Top>{date}</Top>
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
      <Bot></Bot>
    </Box>
  );
};
const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  ${'' /* -webkit-box-shadow: 0px 0px 29px -16px rgba(255, 230, 0, 1);
  -moz-box-shadow: 0px 0px 29px -16px rgba(255, 230, 0, 1);
  box-shadow: 0px 0px 29px -16px rgba(255, 230, 0, 1); */}
`;
const Top = styled.div``;
const Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const P = styled.p``;
const Bot = styled.div``;
