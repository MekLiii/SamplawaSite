import React, { useState, useEffect } from "react";
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
      allMarkdownRemark(filter: { frontmatter: { date: { glob: "*" } } }) {
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
  `).allMarkdownRemark.edges;

  function convertData(x) {
    const newDataArray = x.split("-");
    return `${newDataArray[1]}-${newDataArray[0]}-${newDataArray[2]}`;
  }

  const [aktu, setAktu] = useState([]);
  useEffect(() => {
    setAktu(data);
    aktu.forEach(
      (el) => (el.node.frontmatter.date = convertData(el.node.frontmatter.date))
    );
    aktu.sort(
      (a, b) =>
        new Date(a.node.frontmatter.date) + new Date(b.node.frontmatter.date)
    );
    setAktu(prev => prev.reverse());
  }, []);

  const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#ffe600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    li: {
      textAlign: "center",
    },
  }));
  const classes = useStyles();

  const [slicer, setSlicer] = useState(0);
  const [slicerTwo, setSlicerTwo] = useState(4);
  const [page, setPage] = useState(1);

  const handleChange = (e,p) => {
    setPage(p);
    if (p > page) {
      setSlicer(() => slicer + 4);
      setSlicerTwo(() => slicerTwo + 4);
    }
    if (p < page) {
      setSlicer(() => slicer - 4);
      setSlicerTwo(() => slicerTwo - 4);
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
        {aktu.slice(slicer, slicerTwo).map((element ,index) => (
          <Bounce bottom key={index + element.node.frontmatter.date}>
            <Link to={`/${element.node.frontmatter.date}`}>
              <AktuEl
                key={element.node.frontmatter.naglowek}
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
        classes={{ ul: classes.ul, li: classes.li }}
        count={Math.ceil(aktu.length / 4)}
        onChange={handleChange}
        style={{
          height: "5vh",
          display: `${aktu.length <= 4 ? "none" : "inline"}`,
        }}
      />
    </div>
  );
}
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  width: 90vw;
  height: 90%;
  gap: 20px;
  place-items: center;
  ${"" /* column-gap:5%; */}
  align-items:center;
  justify-content: center;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1000px) {
  }
`;

export default Aktu;
