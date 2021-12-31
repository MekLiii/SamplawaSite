import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import mecz from "../../../content/mecz.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function MatchesSlider() {
    const match = mecz.sezon;
    const data = match.find((el) => el.sezon == mecz.AktualnySezon).mecz;
    console.log(data);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
        style={{ height: "200px" }}
      >
        <SwiperSlide style={{ height: "200px" }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ height: "200px" }}>
            <SliderElement />
        </SwiperSlide>
        <SwiperSlide style={{ height: "200px" }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ height: "200px" }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ height: "200px" }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ height: "200px" }}>Slide 1</SwiperSlide>
      </Swiper>
    </>
  );
}
const SliderElement = ({ date, srcPFT, srcEnemy }) => {
  return (
    <Box>
      <Top>{date}</Top>
      <Mid>
        <img src={srcPFT} alt={srcPFT} />
        <span>VS</span>
        <img src={srcEnemy} alt={srcEnemy} />
      </Mid>
      <Bot></Bot>
    </Box>
  );
};
const Box = styled.div``;
const Top = styled.div``;
const Mid = styled.div``;
const Bot = styled.div``;
