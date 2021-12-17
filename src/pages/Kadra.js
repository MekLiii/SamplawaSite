import React from "react";
import Table from "../components/Molecules/roles/Table";
import Layout from "../components/Organism/Layout";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "#fed053",
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "#fed053",
    },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "#fed053",
    },
  [`& .${outlinedInputClasses.input}`]: {
    color: "#fed053",
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "#fed053",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      color: "#fed053",
    },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "#fed053",
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "#fed053",
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "##fed053",
  },
});

function Druzyna() {
  return (
    <Layout>
      <div style={cointainer}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <StyledTextField {...params} label="Wybierz kadre" variant="outlined" defaultValue="My Default Value"/>}
        />
        <Table />
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
export default Druzyna;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];
