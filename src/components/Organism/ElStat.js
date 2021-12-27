import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AtomicPlayer from "../Atoms/AtomicPlayer";
import Layout from "./Layout";
import data from "../../../content/mecz.json";
import LastMatchEl from "../Atoms/LastMatchEl";
import { ArrowUp } from "react-ionicons";
import { ArrowDown } from "react-ionicons";
import { TabletPortrait } from "react-ionicons";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";

function ElStat({ pageContext }) {
  const { slug } = pageContext;
  const [age, setAge] = useState("");
  const [whichMecz, setWhichMecz] = useState(slug);
 
 console.log(slug)
  console.log(whichMecz)

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
    stats.unshift("0");
  }

  const ActualSeson = data.AktualnySezon;
  const matches = data.sezon.find((el) => el.sezon === ActualSeson).mecz;
  // const findMatch = matches.find((el) => el.data === whichMecz);
  
  
  const today = new Date();
  const actualtDate = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
  const ifDate = (date) => {
    return new Date(date)
  }
  // if(ifDate(findMatch?.data) > (ifDate(actualtDate))){
  //   console.log("Większa")
    
  // }
  
  
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
`;

const Box = styled.div`
  width: 90%;
  min-height: 82vh;
  background-color: rgba(43, 43, 43, 0.95);
  margin: 50px;
`;
const SidebarTop = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SidebarBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;
`;
