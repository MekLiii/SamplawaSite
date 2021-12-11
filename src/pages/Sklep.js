import React from "react";
import styled from "styled-components";
import ProductCard from "../components/Atoms/ProductCard";
import Layout from "../components/Organism/Layout";
import { useStaticQuery, graphql } from "gatsby";
import img from '../../content/blog/Produkty/szalik.png'

function Sklep() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { name: { glob: "*" } } }) {
        edges {
          node {
            frontmatter {
              price
              name
              thumbnail
            }
          }
        }
      }
    }
  `);
  console.log(data.allMarkdownRemark.edges.map((el) => el.node.frontmatter.thumbnail));

  return (
    <Layout>
      <Cointainer>
        <Box>
          <GridHolder>
            {data.allMarkdownRemark.edges.map((el) => (
              <ProductCard
                name={el.node.frontmatter.name}
                price={el.node.frontmatter.price}
                key={el.node.frontmatter.name}
                img={el.node.frontmatter?.thumbnail}
                
              />
            ))}
          </GridHolder>
        </Box>
      </Cointainer>
    </Layout>
  );
}
const Cointainer = styled.div`
  min-height: 82vh;
`;
const GridHolder = styled.div`
    height:100%;
    width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap:50px;
  justify-content:center;
  align-items:center;
`;
const Box = styled.div`
  height: auto;
  min-height:70vh;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  
`;

export default Sklep;
