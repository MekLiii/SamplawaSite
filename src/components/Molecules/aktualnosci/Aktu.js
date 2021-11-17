import React from "react";
import { graphql } from "gatsby";
import Layout from "../../Organism/Layout";

function Aktu({ data }) {
  const { allMarkdownRemark } = data;
  const {frontmatter, html} = allMarkdownRemark;
  console.log(frontmatter)
  return (
    <Layout>
      <div></div>
      <div></div>
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      <div dangerouslySetInnerHTML={{__html:html}}/>
    </Layout>
  );
}

const container = {
  width: "100%",
  minHeight: "5vh",
  backgroundColor: "#fed053",
};

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          date
          id
          naglowek
          path
          tresc
          zdj_cia
          title
        }
      }
    }
  }
}
`;

export default Aktu;
