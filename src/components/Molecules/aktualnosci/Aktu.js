import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import AktuEl from "./AktuEl";
import img from "../../../images/article.jpg";
import styled from "styled-components";

function Aktu() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              id
              naglowek
              tresc
              
              title
            }
          }
        }
      }
    }
  `);
  console.log(data);
  const dataElement = data.allMarkdownRemark.edges;
  const dataAtom = dataElement.slice().reverse();

  const text = dataAtom.map((element) => element.node.frontmatter.tresc);
  console.log(text.slice(0, 150));
  return (
    <StyledGrid className="grid">
      {dataAtom.map((element) => (
        <Link
          to={`/${element.node.frontmatter.id}`}
          key={element.node.frontmatter.id}
        >
          <AktuEl
            heading={element.node.frontmatter.naglowek}
            data={element.node.frontmatter.date}
            // img={element.node.frontmatter.zdjecia}
            text={`${element.node.frontmatter.tresc.slice(
              0,
              150
            )}...Czytaj dalej`}
            // img={element.node.frontmatter.zdjecia}
          />
        </Link>
      ))}
    </StyledGrid>
  );
}
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap:10px
`;

export default Aktu;
