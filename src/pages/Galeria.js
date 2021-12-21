import React, { useState } from "react";
import AktuEl from "../components/Molecules/aktualnosci/AktuEl";
import Layout from "../components/Organism/Layout";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

function Galeria() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { opis: { glob: "*" } } }) {
        edges {
          node {
            frontmatter {
              opis
              images {
                thumbnail
              }
              data
            }
          }
        }
      }
    }
  `);
  console.log(data.allMarkdownRemark.edges.node);
  const dataAtom = data.allMarkdownRemark.edges.map((el) =>
    console.log(el.node.frontmatter.opis)
  );

  return (
    <Layout>
      <StyledElement>
        <StyledGrid>
          <div style={{ height: "82vh" }}>
            {data.allMarkdownRemark.edges.map((el) => (
              <AktuEl heading={el.node.frontmatter.opis} />
            ))}
          </div>
        </StyledGrid>
      </StyledElement>
    </Layout>
  );
}

function Carousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Galeria;

const StyledElement = styled.div`
  height: auto;
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 50px;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 90%;
  height: 90%;
  gap: 10px;
  ${"" /* column-gap:5%; */}
  align-items:center;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;
