import React from "react";
import styled from "styled-components";
import ProductCard from "../components/Atoms/ProductCard";
import Layout from "../components/Organism/Layout";
import { useStaticQuery, graphql } from "gatsby";

function Sklep() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { name: { glob: "*" } } }) {
        edges {
          node {
            frontmatter {
              price
              name
            }
          }
        }
      }
    }
  `);
  console.log(data.allMarkdownRemark.edges);

  return (
    <Layout>
      <Cointainer>
        <GridHolder>
          {data.allMarkdownRemark.edges.map((el) => (
            <ProductCard name={el.node.frontmatter.name} price={el.node.frontmatter.price} />
          ))}
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
