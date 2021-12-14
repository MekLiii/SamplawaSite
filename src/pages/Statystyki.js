import * as React from "react";
import Layout from "../components/Organism/Layout";
import styled from "styled-components";
import data from '../../content/mecz.json'
import StatsEl from '../components/Molecules/Stats/StatsEl'
import { graphql } from "gatsby"

export default function ControlledAccordions() {

  return (
    <Layout>
      <Box>
        <Holder>
          {}
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
