import React, { useState } from "react";
import AktuEl from "../components/Molecules/aktualnosci/AktuEl";
import Layout from "../components/Organism/Layout";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ModalGalery from "../components/Molecules/galery/ModalGalery";

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
              czas
            }
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.edges.reverse();
  const [dataImage, setDataImage] = useState();
  const [modalShow, setModalShow] = useState(false);
  const dataAtom = data.allMarkdownRemark.edges.reverse();

  return (
    <Layout>
      <StyledElement>
        <StyledGrid>
          {dataAtom.map((el) => (
            <AktuEl
              key={el.node.frontmatter.opis}
              style={{ width: "100px" }}
              heading={el.node.frontmatter.opis}
              whatNext="Zobacz zdjecia"
              data={el.node.frontmatter.czas}
              img={`/${el.node.frontmatter.images[0].thumbnail.slice(8)}`}
              onClick={() => {
                setModalShow(true);
                setDataImage(el.node.frontmatter.images);
                
              }}
            />
          ))}
        </StyledGrid>
        <ModalGalery
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={dataImage}
        />
      </StyledElement>
    </Layout>
  );
}

export default Galeria;

const StyledElement = styled.div`
  height: auto;
  min-height: 71.3vh;
  height: auto;
  width: 100%;
  display: grid;
  place-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  height: 100%;
  gap: 10px;
  place-items: center;
  @media only screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;
