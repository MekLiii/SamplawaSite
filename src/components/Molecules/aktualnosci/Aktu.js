import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
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
  const dataElement = data.allMarkdownRemark.edges;
  const dataAtom = dataElement.slice().reverse();

  const text = dataAtom.map((element) => element.node.frontmatter.tresc);
  console.log(text.slice(0,150))
  return (
    <div>
      <div>
        {dataAtom.map((element) => (
          <Link to={`/${element.node.frontmatter.id}`} key={element.node.frontmatter.id}>
            <AktuEl
              heading={element.node.frontmatter.naglowek}
              data={element.node.frontmatter.date}
              text={`${element.node.frontmatter.tresc.slice(0, 150)}...Czytaj dalej`}
              img={img}
              
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Aktu;
