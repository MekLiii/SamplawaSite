import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from "../components/Organism/Layout";
import styled from "styled-components";
import data from '../../content/mecz.json'
import StatsEl from '../components/Molecules/Stats/StatsEl'

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

console.log(data.sezon.map((el) => el.mecz.map((el) => el.przeciwnik)))
  return (
    <Layout>
      <Box>
        <Holder>
          <StatsEl />
        </Holder>
      </Box>
    </Layout>
  );
}
const Box = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content:center;
  align-items:center;
`;
const Holder = styled.div`
  width: 60%;
  height: 80%;
`;
