import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import AktuEl from "./AktuEl";
// import img from "../../../images/article.jpg";
import styled from "styled-components";
import Bounce from "react-reveal/Zoom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/core/styles";

function Aktu() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { date: { glob: "*" } } }
        sort: { fields: frontmatter___date }
      ) {
        edges {
          node {
            frontmatter {
              date
              naglowek
              tresc
              title
              imagesGal
            }
          }
        }
      }
    }
  `);

  const dataElement = data.allMarkdownRemark.edges.sort((a, b) => a - b);
  const dataAtom = dataElement;
  const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#ffe600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
    },
    li:{
      textAlign: "center",
    }
  }));
  const classes = useStyles();
 
 
  const [slicer, setSlicer] = useState(0);
  const [slicerTwo, setSlicerTwo] = useState(4);
  const [page, setPage] = useState(1);
  const handleChange = (e, p) => {
    setPage(p);
    if(p > page){
      setSlicer(()=> (slicer + 4))
      setSlicerTwo(()=> (slicerTwo + 4))
    }
    if(p< page){
      setSlicer(()=> (slicer - 4))
      setSlicerTwo(()=> (slicerTwo - 4))
    }
    
  };
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledGrid>
        {dataAtom.slice(slicer,slicerTwo).map((element) => (
          <Bounce bottom key={dataAtom.indexOf(element)}>
            <Link to={`/${element.node.frontmatter.date}`}>
              <AktuEl
                // key={element.node.frontmatter.naglowek}
                heading={element.node.frontmatter.naglowek}
                data={element.node.frontmatter.date}
                img={`${element.node.frontmatter.imagesGal[0]}`}
                whatNext="Czytaj dalej"
              />
            </Link>
          </Bounce>
        ))}
      </StyledGrid>
      <Pagination
        page={page}
        classes={{ ul: classes.ul,li: classes.li }}
        count={Math.ceil(dataAtom.length / 4)}
        onChange={handleChange}
        style={{height:'5vh',display:`${dataAtom.length <= 4 ? 'none' : 'inline'}`}}
      />
    </div>
  );
}
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  width: 90vw;
  height: 90%;
  gap: 20px;
  place-items: center;
  ${"" /* column-gap:5%; */}
  align-items:center;
  justify-content: center;

  @media only screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

export default Aktu;
