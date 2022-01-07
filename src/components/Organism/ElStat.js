import React, { useState } from "react";
import styled from "styled-components";

import Layout from "./Layout";
import data from "../../../content/mecz.json";
import team from "../../../content/druzyna.json";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import PlayerSec from "../Atoms/PlayerSec";
import { faArrowUp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ElStat({ pageContext }) {
  const { slug } = pageContext;
  const [age, setAge] = useState("");
  const [whichMecz, setWhichMecz] = useState(slug);
  const [matchArray, setMatchArray] = useState([]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const useStyles = makeStyles({
    root: {
      width: 380,

      "& .MuiOutlinedInput-input": {
        color: "#ffe600",
      },
      "& .MuiInputLabel-root": {
        color: "#ffe600",
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffe600",
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "#ffe600",
      },
      "&:hover .MuiInputLabel-root": {
        color: "#ffe600",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffe600",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#ffe600",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#ffe600",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffe600",
      },
    },
  });

  const classes = useStyles();

  const stats = [whichMecz.Statystyki];

  if (whichMecz.Statystyki == undefined) {
    stats.unshift("0");
  }

  const ActualSeson = data.AktualnySezon;
  const matches = data.sezon.find((el) => el.sezon === ActualSeson).mecz;
  console.log(matches);
  const sortArray = () => {};
  const today = new Date();

  const currentDay =
    today.getDate() > "9" ? today.getDate() : "0" + today.getDate();
  const currentMonth =
    today.getMonth() + 1 > "9"
      ? today.getMonth() + 1
      : "0" + (today.getMonth() + 1);

  const currentDate =
    currentMonth + "/" + currentDay + "/" + today.getFullYear();
  matchArray.push(currentDate);
  const newSortedArray = [];
  matchArray.forEach((el) => newSortedArray.push(new Date(el)));
  newSortedArray.sort((a, b) => b - a);
  newSortedArray.reverse();
  const newArray = [];
  newSortedArray.forEach((el) =>
    newArray.push(
      el.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    )
  );

  const whoScored = whichMecz.Statystyki;

  return (
    <Layout>
      <Cointainer>
        <Box>
          <SidebarTop>
            <FormControl
              sx={{ margin: "30px", width: "90%" }}
              className={classes.root}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "#ffe600" }}
              >
                Wybierz mecz
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Wybierz kadre"
                sx={{ color: "#ffe600" }}
                onChange={handleChange}
                classes={{ root: classes.selectRoot }}
              >
                {matches?.map((el) => (
                  <MenuItem
                    value={el.data}
                    key={`${el.data}/${el.przeciwnik}`}
                    onClick={() => setWhichMecz(el)}
                  >
                    {el.gospodarze} - {el.przeciwnik} {el.data}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </SidebarTop>
          <SidebarBottom>
            <WhoPlayBox>
              <WhoPlayText style={{ flex: 1 }}>
                {whichMecz.gospodarze}
              </WhoPlayText>

              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <WhoPlayText>
                  {whichMecz.pftGoals == undefined ? "0" : whichMecz.pftGoals}
                </WhoPlayText>

                <WhoPlayText>-:-</WhoPlayText>
                <WhoPlayText>
                  {whichMecz.enemyGoals == undefined
                    ? "0"
                    : whichMecz.enemyGoals}
                </WhoPlayText>
              </div>
              <WhoPlayText style={{ flex: 1 }}>
                {whichMecz.przeciwnik}
              </WhoPlayText>
            </WhoPlayBox>
            <WhoScoredBox>
              <div style={{ flex: 1 }}>
                {whoScored?.map((el) =>
                  el.BramkiPFT?.map((el) => (
                    <div
                      key={el.Zawodnicy}
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flex: 1,
                      }}
                    >
                      <WhoScoredText>{el.Zawodnicy}</WhoScoredText>
                      <WhoScoredText>{`${el.minuta}'`}</WhoScoredText>
                    </div>
                  ))
                )}
              </div>
              <span>{whichMecz.data}</span>
              <div style={{ flex: 1 }}>
                {whoScored?.map((el) =>
                  el.BramkiPrzeciwnika?.map((el) => (
                    <div
                      key={el.BramkiPrzeciwnika}
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "row-reverse",
                        flex: 1,
                      }}
                    >
                      <WhoScoredText>{el.Zawodnicy}</WhoScoredText>
                      <WhoScoredText>{`${el.minuta}'`}</WhoScoredText>
                    </div>
                  ))
                )}
              </div>
            </WhoScoredBox>
            <PlayersBox>
              <PlayersHolder>
                <Title>Skład wyjściowy</Title>
                {whichMecz.Zawodnicy?.map((el) => (
                  <PlayerSec
                    name={el.Zawodnicy}
                    key={el.Zawodnicy}
                    src={team.team
                      .find((element) => element.name === el.Zawodnicy)
                      ?.zdjecia.slice(7)}
                    minuts={el.minuty}
                    StyleIcon={{ display: "none" }}
                    StyleArrow={{ display: "none" }}
                  />
                ))}
              </PlayersHolder>
              <PlayersHolder>
                <Title>Zmiany</Title>
                {whichMecz.Statystyki?.map((el) =>
                  el.Zmiany?.map((el) => (
                    <div style={{ width: "100%" }} key={el.ZmianaNa}>
                      <PlayerSec
                        name={el.ZmianaNa}
                        src={team.team
                          ?.find((element) => element.name === el.ZmianaNa)
                          ?.zdjecia.slice(7)}
                        minuts={el.minuta}
                        StyleIcon={{ display: "none" }}
                        colorArrow="green"
                      />
                      <PlayerSec
                        name={el.ZmianaZ}
                        src={team.team
                          ?.find((element) => element.name === el.ZmianaZ)
                          ?.zdjecia.slice(7)}
                        minuts={el.minuta}
                        StyleIcon={{ display: "none" }}
                        StyleArrow={{ transform: "rotate(180deg)" }}
                        colorArrow="red"
                      />
                    </div>
                  ))
                )}
              </PlayersHolder>
              <PlayersHolder>
                <Title>Kary</Title>
                {whichMecz.Statystyki?.map((el) =>
                  el.Kartki?.map((el) => (
                    <PlayerSec
                      name={el.Zawodnicy}
                      key={el.ZmianaNa}
                      src={team.team
                        ?.find((element) => element.name === el.Zawodnicy)
                        ?.zdjecia.slice(7)}
                      minuts={el.minuta}
                      color={el.kartka === "czerwona" ? "red" : "yellow"}
                      StyleArrow={{ display: "none" }}
                    />
                  ))
                )}
              </PlayersHolder>
            </PlayersBox>
          </SidebarBottom>
        </Box>
      </Cointainer>
    </Layout>
  );
}

export default ElStat;
const Cointainer = styled.div`
  min-height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Box = styled.div`
  width: 90%;
  min-height: 82vh;
  ${"" /* background-color: rgba(43, 43, 43, 0.95); */}
  margin: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 765px) {
    margin: 10px;
    width: 100%;
  }
`;
const SidebarTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20%;
`;
const SidebarBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
`;
const WhoPlayBox = styled.div`
  width: 100%;
  height: 30%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffe600;
  border-bottom: 1px solid black;
`;
const WhoScoredBox = styled.div`
  width: 100%;
  height: 30%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffe300;
`;
const WhoScoredText = styled.p`
  font-family: poppins;
  font-size: clamp(10px, 3vw, 20px);
  margin-bottom: 0;
  margin-left: 10px;
  margin-right: 10px;
`;
const WhoPlayText = styled.p`
  font-family: poppins;
  font-size: clamp(15px, 5vw, 33px);
  margin-bottom: 0;
  text-align: center;
`;
const PlayersBox = styled.div`
  width: 100%;
  min-height: 65vh;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;
const PlayersHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.p`
  margin-bottom: 0;
  font-family: poppins;
  color: white;
  font-size: clamp(15px, 5vw, 33px);
`;
