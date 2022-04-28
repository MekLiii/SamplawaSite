import React from "react";
import styled from "styled-components";
import { TabletPortrait, CaretUpOutline } from "react-ionicons";
import { Link } from "gatsby";
import bgPattern from "../../../content/assets/bg-pattran.png";
import { FootballOutline } from "react-ionicons";

function PlayerSec({
  minuts,
  src,
  name,
  color,
  StyleIcon,
  colorArrow,
  StyleArrow,
  link,
  styleMinuts,
  rola,
  styleRola,
  scored = false,
}) {
  console.log(scored);

  return (
    <PlayersHolder>
      <Bottom>
        {src != "/players/test.jpg" && <Img src={src} alt={src} />}
        <Link to={link} style={{ color: "black" }}>
          <span>{name}</span>
        </Link>
        <span style={styleMinuts}>
          {minuts}'
          <TabletPortrait color={color} style={StyleIcon} />
          <CaretUpOutline color={colorArrow} style={StyleArrow} />
          {scored && (
            <FootballOutline
              color={"#00000"}
              title={"scored"}
              height="15px"
              width="15px"
            />
          )}
        </span>
        <span style={styleRola}>{rola}</span>
      </Bottom>
    </PlayersHolder>
  );
}
const PlayersHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;
const Top = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Bottom = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  border: 1px solid #ffe600;
  color: black;
  background-color: rgba(255, 230, 0, 0.8);
  background-image: url(${bgPattern});
  border: 1px solid black;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Img = styled.img`
  width: auto;
  height: 75px;
  border-radius: 50%;
`;
export default PlayerSec;
