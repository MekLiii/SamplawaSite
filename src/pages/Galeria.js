import React, { useState } from "react";
import AktuEl from "../components/Molecules/aktualnosci/AktuEl";
import Layout from "../components/Organism/Layout";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ModalGalery from "../components/Molecules/galery/ModalGalery";
import { Button } from "react-bootstrap";

function Galeria() {
  const [modalShow, setModalShow] = useState(false);

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
  const [dataImage, setDataImage] = useState();
  const dataAtom = data.allMarkdownRemark.edges.reverse()
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
                console.log(dataImage);
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: auto;
  height: 90%;
  gap: 10px;
  place-items: center;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;
