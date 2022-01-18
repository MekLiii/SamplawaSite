import React, { useState } from "react";
import Table from "../components/Molecules/roles/Table";
import Layout from "../components/Organism/Layout";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import data from "../../content/druzyna.json";
import zdjecie from "../../content/assets/seniorzy.jpg";
import { graphql } from "gatsby";
import styled from "styled-components";

// export const query1 = graphql`
//   {
//     allContentJson(limit: 1) {
//       nodes {
//         team {
//           asysty
//           bramki
//           mecze
//           cKartki
//           name
//           pozycja
//           numer
//           zKartki
//           zdjecia
//         }
//       }
//     }
//   }
// `;

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

function Druzyna() {
  
  const [kadra, setKadra] = useState(data.team);
  const [zespol, setZespol] = useState(data.zespolSenior);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
console.log(kadra)
  const classes = useStyles();
  return (
    <Layout>
      <div style={cointainer}>
        <FormControl
          sx={{ margin: "20px", width: "90%" }}
          className={classes.root}
        >
          <InputLabel id="demo-simple-select-label" sx={{ color: "#ffe600" }}>
            Wybierz kadre
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
            <MenuItem
              onClick={() => {
                setKadra(data.team);
                setZespol(data.zespolSenior);
              }}
              value={"Seniorzy"}
            >
              Seniorzy
            </MenuItem>
            <MenuItem
              onClick={() => {
                setKadra(data.mlodzik);
                setZespol(data.zespolJunior);
              }}
              value={"Młodzik"}
            >
              Młodzik
            </MenuItem>
          </Select>
        </FormControl>
        <Table data={kadra} title="Zawodnicy" />
        <Table data={zespol} title="Zespół" />
      </div>
    </Layout>
  );
}

const cointainer = {
  minHeight: "82vh",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const Img = styled.img`
  width: 65%;
  height: 65%;
`;
export default Druzyna;
