import React, { useState } from "react";
import AktuEl from "../components/Molecules/aktualnosci/AktuEl";
import Layout from "../components/Organism/Layout";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ModalGalery from "../components/Molecules/galery/ModalGalery";


function Galeria() {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {opis: {glob: "*"}}}) {
      edges {
        node {
          frontmatter {
            opis
            czas
            imagesGal
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
    <Layout currectSiteProp="galeria">
      <StyledElement>
        <StyledGrid>
          {dataAtom.map((el) => (
            <AktuEl
              key={`${el.node.frontmatter.opis}+${el.node.frontmatter.czas}`}
              style={{ width: "100px" }}
              heading={el.node.frontmatter.opis}
              whatNext="Zobacz zdjecia"
              data={el.node.frontmatter.czas}
              img={`${el.node.frontmatter.imagesGal[0]}`}
              onClick={() => {
                setModalShow(true);
                setDataImage(el.node.frontmatter.imagesGal);
                
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
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 80%;
  height: 100%;
  gap: 10px;
  place-items: center;
  ${'' /* @media only screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  } */}
`;
