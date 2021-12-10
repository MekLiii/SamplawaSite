import React from "react";
import styled from "styled-components";
import ProductCard from "../components/Atoms/ProductCard";
import Layout from "../components/Organism/Layout";
import { graphql } from "gatsby";

function Sklep({ data }) {
   
  return (
    <Layout>
      <Cointainer>
        <GridHolder>
          <ProductCard />
          
        </GridHolder>
      </Cointainer>
    </Layout>
  );
}
const Cointainer = styled.div`
  height: 82vh;
`;
const GridHolder = styled.div``;


export default Sklep;
