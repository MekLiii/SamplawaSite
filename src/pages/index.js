import * as React from "react";
import Layout from "../components/Organism/Layout";
import "./globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aktu from "../components/Molecules/aktualnosci/Aktu";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SponsorEl from "../components/Atoms/SponsorEl";
import sponData from "../../content/sponsorzyNew.json";
import CustomizedTables from "../components/Molecules/MatchTable/CustomizedTables";
import backGroundImage from "../../content/assets/unsplash_JP0qiWQzjrgbackground.webp";
import MatchIndex from "../components/Molecules/IndexMatch/MatchIndex";
import MatchesSlider from "../components/Atoms/MatchesSlider";
import IndexFirstSec from "../components/Molecules/IndexMainSec/IndexFirstSec";
import bgPattern from "../../content/assets/bg-pattran.png";
import { useStaticQuery, graphql, Link } from "gatsby";

// install Swiper modules

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import CoutingDown from "../components/Atoms/CoutingDown";
import mecze from "../../content/mecz.json";
import Shotters from "../components/Atoms/Shotters";
import teamData from "../../content/druzyna.json";

SwiperCore.use([Autoplay, Navigation]);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/mecze/" }
        frontmatter: {}
      }
    ) {
      nodes {
        frontmatter {
          BramkiPFT {
            Zawodnicy
            minuta
          }
          
          
        
        }
      }
    }
  }
  `).allMarkdownRemark.nodes;
  const dataWitoutNull =  data.filter((el) => el.frontmatter.BramkiPFT !== null);
  const copyData = dataWitoutNull.map((el) => el.frontmatter.BramkiPFT);
  const arrayOfPlayerWhosScored = []
  copyData.forEach((el) => el.forEach((el2) => arrayOfPlayerWhosScored.push(el2.Zawodnicy)));
  // new array that include player object if he scored and how goals he scored  and inclue in teamdata.team
  const arrayOfPlayerWhosScoredWithGoals = []
  copyData.forEach((el) => el.forEach((el2) => arrayOfPlayerWhosScoredWithGoals.push({
    Zawodnicy: el2.Zawodnicy,
    minuta: el2.minuta,
  })));
  const whoScored = []
   arrayOfPlayerWhosScoredWithGoals.forEach((el, index) => 
    teamData.team.some((el2) => el2.name === el.Zawodnicy) ? whoScored.push(el) : null
  )
  const onlyNames = [];
  whoScored.map((el) => onlyNames.push(el.Zawodnicy))
  // arrray which include how many Zawodnik is repiting
  const arrayOfPlayerWhosScoredWithGoalsCount = []
  onlyNames.forEach((el) => arrayOfPlayerWhosScoredWithGoalsCount.push({
    Zawodnicy: el,
    count: onlyNames.filter((el2) => el2 === el).length,

  }))
  // filter arrayOfPlayerWhosScoredWithGoalsCount by unique value Zawodnik
  
  const uniqueArrayOfPlayerWhosScoredWithGoalsCount = arrayOfPlayerWhosScoredWithGoalsCount.filter((el, index, self) =>{
    return index === self.findIndex((t) => (
      t.Zawodnicy === el.Zawodnicy
    ))
  })

 
  // sort arrayOfPlayerWhosScoredWithGoalsCount by count
  const sortedArrayOfPlayerWhosScoredWithGoalsCount = uniqueArrayOfPlayerWhosScoredWithGoalsCount.sort((a, b) => b.count - a.count)
  
  console.log(sortedArrayOfPlayerWhosScoredWithGoalsCount  )

  //filtry

  
  //sortuje obiekt
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 2000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log(teamData.team)
  return (
    <Layout currectSiteProp="main">
      <StyledSlider style={{ flexDirection: "column" }}>
        <StyledSliderElement>
          <IndexFirstSec />
        </StyledSliderElement>
        <CoutingDown />
      </StyledSlider>
      <StyledDiv
        style={{
          minHeight: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <MatchesSlider />
      </StyledDiv>
      <StyledAktu style={{ marginTop: 0, minHeight: "40vh" }}>
        <SponsorsTitle style={{ color: "white" }}>Aktualności</SponsorsTitle>

        <Aktu />
      </StyledAktu>
      <StyledDiv style={{ minHeight: "60vh", marginTop: "10vh" }}>
        <MatchIndex />
      </StyledDiv>

      {/* <StyledAktu style={{ marginTop: 0, marginBottom: 0, minHeight: "40vh" }}>
        <ProductsMain />
      </StyledAktu> */}
      <StyledAktu
        style={{
          backgroundColor: "#ffe600",
          minHeight: "45vh",
          backgroundImage: `url(${bgPattern})`,
          justifyContent: "flex-start",
        }}
      >
        <SponsorsTitle>Strzelcy PFT Sampława</SponsorsTitle>
        <ShootersBox>
          <Shotters
            name={sortedArrayOfPlayerWhosScoredWithGoalsCount[2].Zawodnicy}
            goals={sortedArrayOfPlayerWhosScoredWithGoalsCount[2].count}
            src={
              teamData.team.find(
                (el) => el.name === sortedArrayOfPlayerWhosScoredWithGoalsCount[2].Zawodnicy
              ).zdjeciaBetter[0]
            }
          />
          <Shotters
            name={sortedArrayOfPlayerWhosScoredWithGoalsCount[0].Zawodnicy}
            goals={sortedArrayOfPlayerWhosScoredWithGoalsCount[0].count}
            src={
                            teamData.team.find(
                              (el) => el.name ===sortedArrayOfPlayerWhosScoredWithGoalsCount[0].Zawodnicy
                            )?.zdjeciaBetter[0]
              
            }
          />
          <Shotters
            name={sortedArrayOfPlayerWhosScoredWithGoalsCount[1].Zawodnicy}
            goals={sortedArrayOfPlayerWhosScoredWithGoalsCount[1].count}
            src={
              teamData.team.find(
                (el) => el.name === sortedArrayOfPlayerWhosScoredWithGoalsCount[1].Zawodnicy
              )?.zdjeciaBetter[0]
            }
          />
        </ShootersBox>
      </StyledAktu>
      <StyledAktu style={{ minHeight: "30vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CustomizedTables />
        </div>
      </StyledAktu>

      <StyledSposnor>
        <SponsorsTitle>Sponsorzy</SponsorsTitle>
        <div style={{ width: "100%" }}>
          <Link to="/Sponsorzy">
            <Swiper
              slidesPerView={1}
              spaceBetween={5}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
                color: "black",
              }}
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
              {sponData.sponsTitle.map((el, index) => (
                <SwiperSlide style={{ background: "none" }} key={index}>
                  <SponsorEl img={el.logo} key={el.name + el.logo} />
                </SwiperSlide>
              ))}
              {sponData.sponsStrategy.map((el,index) => (
                <SwiperSlide style={{ background: "none" }}  key={index}>
                  <SponsorEl img={el.logo} key={el.name + el.logo} />
                </SwiperSlide>
              ))}
              {sponData.sponsSilver.map((el,index) => (
                <SwiperSlide style={{ background: "none" }}  key={index}>
                  <SponsorEl img={el.logo} key={el.name + el.logo} />
                </SwiperSlide>
              ))}
              {sponData.sponsBrown.map((el,index) => (
                <SwiperSlide style={{ background: "none" }}  key={index}>
                  <SponsorEl img={el.logo} key={el.name + el.logo} />
                </SwiperSlide>
              ))}
              {sponData.sponsMed.map((el,index) => (
                <SwiperSlide style={{ background: "none" }}  key={index}>
                  <SponsorEl img={el.logo} key={el.name + el.logo} />
                </SwiperSlide>
              ))}
              {sponData.sponsGold.map((el,index) => (
                <SwiperSlide style={{ background: "none" }}  key={index}>
                  <SponsorEl img={el.logo} key={el.name + el.logo} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Link>
        </div>
      </StyledSposnor>
    </Layout>
  );
};
const StyledAktu = styled.div`
  height: auto;
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 50px;
  @media only screen and (max-width: 490px) {
  }
`;
const StyledSposnor = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: #ffe600;
  ${
    "" /* background-image: url("https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/bg-pattran.png?alt=media&token=891eaf0a-cf35-409a-b706-b751f8f44f95"); */
  }
  background-image: url(${bgPattern});
  display: flex;
  background-image: back;
  align-items: center;
  flex-direction: column;
`;
const ShootersBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  align-items: center;
  justify-items: center;
  @media only screen and (max-width: 1200px) {
    padding-bottom: 50px;
    flex-direction: column;
  }
`;

const StyledDiv = styled.div`
  position: relative;
  top: -10vh;
  min-height: 70vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  width: 98%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 765px) {
    justify-content: center;
    text-align: center;
    width: 90%;
  }
  @media (max-width: 990px) {
    justify-content: center;
    text-align: center;
    width: 90%;
  }
`;
const SponsorsTitle = styled.p`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
  font-family: poppins;
  font-size: 32px;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 32px;
  font-family: poppins;
  color: white;
  @media only screen and (max-width: 765px) {
    margin-top: 50px;
  }
`;

export default IndexPage;

{
  /* <StyledDiv className="indexAktu">
  <SyldedEl style={{ backgroundColor: "#222" }}>
    <Results className="indexMediaEl" />
  </SyldedEl>
  <SyldedEl>
    <CustomizedTables className="indexMediaEl" />
  </SyldedEl>
  <SyldedEl style={{ backgroundColor: "#222" }}>
    <NextMatch className="indexMediaEl" />
  </SyldedEl>
</StyledDiv>; */
}
