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

function ElStat({ pageContext }) {
  const { slug } = pageContext;
  const [age, setAge] = useState("");
  const [whichMecz, setWhichMecz] = useState(slug);

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
  // const findMatch = matches.find((el) => el.data === whichMecz);
  console.log(team.team);
  //Porównanie daty, czy mecz się odbył
  // const today = new Date();
  // const actualtDate =
  //   today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  // const ifDate = (date) => {
  //   return new Date(date);
  // };
  // if(ifDate(findMatch?.data) > (ifDate(actualtDate))){
  //   console.log("Większa")

  // }
  const whoScored = whichMecz.Statystyki;
  console.log(whoScored.map((el) => el.BramkiPFT.map((el) => el)));

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
                {matches.map((el) => (
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
              <div style={{display: 'flex', flexDirection: "column"}}>
                <WhoPlayText>{whichMecz.gospodarze}</WhoPlayText>
                <span>
                  {whoScored.map((el) =>
                    el.BramkiPFT.map((el) => (
                      <div>
                      {el.Zawodnicy}{el.minuta}
                      </div>
                    ))
                  )}
                </span>
              </div>

              <WhoPlayText>
                {whichMecz.pftGoals == undefined ? "0" : whichMecz.pftGoals}
              </WhoPlayText>

              <WhoPlayText>-:-</WhoPlayText>
              <WhoPlayText>
                {whichMecz.enemyGoals == undefined ? "0" : whichMecz.enemyGoals}
              </WhoPlayText>
              <WhoPlayText>{whichMecz.przeciwnik}</WhoPlayText>
            </WhoPlayBox>
            <PlayersBox>
              <PlayersHolder>
                <h1>Skład wyjściowy</h1>
                {whichMecz.Zawodnicy?.map((el) => (
                  <PlayerSec
                    name={el.Zawodnicy}
                    key={el.Zawodnicy}
                    src={team.team
                      .find((element) => element.name === el.Zawodnicy)
                      ?.zdjecia.slice(7)}
                    minuts={el.minuty}
                    StyleIcon={{ display: "none" }}
                  />
                ))}
              </PlayersHolder>
              <PlayersHolder>
                <h1>Zmiany</h1>
                {whichMecz.Statystyki?.map((el) =>
                  el.Zmiany?.map((el) => (
                    <PlayerSec
                      name={el.ZmianaNa}
                      key={el.ZmianaNa}
                      src={team.team
                        .find((element) => element.name === el.ZmianaNa)
                        ?.zdjecia.slice(7)}
                      minuts={el.minuta}
                      StyleIcon={{ display: "none" }}
                    />
                  ))
                )}
              </PlayersHolder>
              <PlayersHolder>
                <h1>Kary</h1>
                {whichMecz.Statystyki?.map((el) =>
                  el.Kartki?.map((el) => (
                    <PlayerSec
                      name={el.Zawodnicy}
                      key={el.ZmianaNa}
                      src={team.team
                        .find((element) => element.name === el.Zawodnicy)
                        ?.zdjecia.slice(7)}
                      minuts={el.minuta}
                      color={el.kartka === "czerwona" ? "red" : "yellow"}
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
  background-color: rgba(43, 43, 43, 0.95);
  margin: 50px;
  display: flex;
  flex-direction: column;
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
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffe600;
`;
const WhoPlayText = styled.p`
  ${"" /* font-size: 32px; */}
  font-family: poppins;
  font-size: clamp(15px, 5vw, 33px);
  margin-bottom: 0;
`;
const PlayersBox = styled.div`
  width: 100%;
  min-height: 65vh;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
const PlayersHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
