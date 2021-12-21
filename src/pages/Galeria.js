import React, { useState } from "react";
import AktuEl from "../components/Molecules/aktualnosci/AktuEl";
import Layout from "../components/Organism/Layout";
import { useStaticQuery, graphql } from "gatsby"


function Galeria() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {opis: {glob: "*"}}}) {
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
  `)
  console.log(data)
  return (
    <Layout>
      <div style={{ height: "82vh" }}>
        <AktuEl />
      </div>
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
