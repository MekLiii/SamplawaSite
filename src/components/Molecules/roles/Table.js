import React from "react";
import "./table.module.css";
import TableHero from "./TableHero";
import styled from "styled-components";
import { Link } from "gatsby";

// import chuj from '../../../../static/players/'

function Table({ data, title }) {
  return (
    <div style={mainCoinainer}>
      <div style={heading}>
        <h1 style={{ color: "white" }}>{title}</h1>
      </div>
      <GridHolder>
        {data?.map((el) => (
          <Link to={`/kadra/${el.name}`} key={el.name} style={{color: "black"}}>
            <TableHero
              pozycja={el.pozycja}
              rola={el.rola}
              name={el.name}
              key={el.name}
              img={`/${el.zdjecia?.slice(8)}`}
            />
          </Link>
        ))}
      </GridHolder>
    </div>
  );
}
const heading = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "7vh",
};
const mainCoinainer = {
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const GridHolder = styled.div`
  display: inline-grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  height: auto;
  gap: 10px;
  row-gap: 2.5em;
  width: 90%;
  margin-bottom: 50px;
  place-items: center;

  @media (max-width: 500px) {
  }
`;

export default Table;
