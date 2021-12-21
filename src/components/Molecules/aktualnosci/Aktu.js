import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import AktuEl from "./AktuEl";
// import img from "../../../images/article.jpg";
import styled from "styled-components";

function Aktu() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { date: { glob: "*" } } }) {
        edges {
          node {
            frontmatter {
              date
              id
              naglowek
              tresc
              title
              zdjecia
            }
          }
        }
      }
    }
  `);

  const dataElement = data.allMarkdownRemark.edges;
  const dataAtom = dataElement.slice().reverse();
  return (
    <StyledGrid>
      {dataAtom.map((element) => (
        <Link
          to={`/${element.node.frontmatter.date}`}
          key={element.node.frontmatter.naglowek}
        >
          <AktuEl
            key={element.node.frontmatter.naglowek}
            heading={element.node.frontmatter.naglowek}
            data={element.node.frontmatter.date}
            img={`${element.node.frontmatter.zdjecia?.slice(8)}`}
           
          />
        </Link>
      ))}
    </StyledGrid>
  );
}
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
  ${"" /* overflow:auto ; */}
`;

export default Aktu;
