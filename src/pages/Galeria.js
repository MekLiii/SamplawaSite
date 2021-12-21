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
  const [dataImage, setDataImage] = useState(data.allMarkdownRemark.edges.map((el) => el.node.frontmatter.images));
  console.log(dataImage);
  // data.allMarkdownRemark.edges.map((el) =>
  //   console.log(el.node.frontmatter.images.map((el) => el))
  // );
  // console.log(data.allMarkdownRemark.edges.map((el) => el.node.frontmatter.images))
  return (
    <Layout>
      <StyledElement>
        <StyledGrid>
          {data.allMarkdownRemark.edges.map((el) => (
            <AktuEl
              style={{ width: "100px" }}
              heading={el.node.frontmatter.opis}
              whatNext="Zobacz zdjecia"
              data={el.node.frontmatter.czas}
              img={`/${el.node.frontmatter.images.map((el) =>
                el.thumbnail.slice(8)
              )}`}
              onClick={() => {setModalShow(true); setDataImage(el.node.frontmatter.images)}}
            />
          ))}
        </StyledGrid>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button> */}

        <ModalGalery show={modalShow} onHide={() => setModalShow(false)} data={dataImage}/>
      </StyledElement>
    </Layout>
  );
}

function Carousel() {
  return (
    <div>
      
    </div>
  );
}

export default Galeria;

const StyledElement = styled.div`
  height: auto;
  min-height: 70vh;
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
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
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
