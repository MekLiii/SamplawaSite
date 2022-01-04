import React, { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import AdressEl from "./AdressEl";
import { useStaticQuery, graphql } from "gatsby";


export default function App() {
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
  return (
    <Box>
      <GridHolder>
        {data.allMarkdownRemark.edges.map((el) => (
          <ProductCard
            name={el.node.frontmatter.name}
            key={el.node.frontmatter.name}
            img={`/${el.node.frontmatter.thumbnail.slice(8)}`}
            onMouseOver={(e) => e.target.style.display = 'none'}
          />
        ))}
      </GridHolder>
    </Box>
  );
}
const Box = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
const GridHolder = styled.div`
  height: 100%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
  place-items: center;
`;
const Info = styled.div`
  width: 80%;
  min-height: 5vh;
  background-color: #1d1d1d;
  border: 10px solid #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  padding: 5px;
`;
