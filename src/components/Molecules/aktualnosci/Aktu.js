import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../../Organism/Layout";
import AktuEl from "./AktuEl";
import img from '../../../images/article.jpg'

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
              zdj_cia
              title
            }
          }
        }
      }
    }
  `);
  const dataEl = data.allMarkdownRemark.edges;
  console.log(dataEl.map((element) => element.node.frontmatter.naglowek));

  return (
    <div>
      <div>
        {dataEl.map((element) => (
          <Link to={`/${element.node.frontmatter.id}`}>
            <AktuEl
              heading={element.node.frontmatter.naglowek}
              data={element.node.frontmatter.date}
              text={element.node.frontmatter.tresc}
              img={img}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

const container = {
  width: "100%",
  minHeight: "5vh",
  backgroundColor: "#fed053",
};
export default Aktu;
