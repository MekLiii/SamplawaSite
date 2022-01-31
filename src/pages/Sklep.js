import React from "react";
import styled from "styled-components";
import ProductCard from "../components/Atoms/ProductCard";
import Layout from "../components/Organism/Layout";
import { useStaticQuery, graphql } from "gatsby";
import AdressEl from "../components/Atoms/AdressEl";

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
 

  return (
    <Layout currectSiteProp="sklep">
      <Cointainer>
        <Box>
          <GridHolder>
            {data.allMarkdownRemark.edges.map((el) => (
              <ProductCard
                name={el.node.frontmatter.name}
                price={el.node.frontmatter.price}
                key={el.node.frontmatter.name}
                img={`/${el.node.frontmatter.thumbnail.slice(8)}`}
              />
            ))}
          </GridHolder>
          <Info>
            <div>
              <p style={{ color: "rgb(255, 230, 0)", fontSize: "15px" }}>
                Uwaga!
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "auto",
                width: "100%",
              }}
            >
              <p style={{ color: "#979797",textAlign:"center" }}>
                Zamówienia można składać telefonicznie lub przez adres email
              </p>
              <AdressEl
                
                prop="710 777 358"
                style={{ display: "flex" }}
              />
              <AdressEl
                
                prop="profootballteam2019@gmail.com"
                style={{ display: "flex" }}
              />
            </div>
          </Info>
        </Box>
      </Cointainer>
    </Layout>
  );
}
const Cointainer = styled.div`
  min-height: 82vh;
  margin-top:50px;
`;
const GridHolder = styled.div`
  height: 100%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
  place-items: center;
`;
const Box = styled.div`
  height: auto;
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
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

export default Sklep;
