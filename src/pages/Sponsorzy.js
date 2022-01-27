import React from "react";
import Layout from "../components/Organism/Layout";
import styled from "styled-components";
import data from "../../content/sponsors.json";

function Sponsorzy() {
  console.log(data);
  return (
    <Layout currectSiteProp="sponsorzy">
      <Cointainer>
      <Box>
          {data.Sponsorzy.map((el) => <SponsorEl name={el.name} src={el.logo}/>)}
      </Box>
      </Cointainer>
    </Layout>
  );
}

const SponsorEl = ({src,name}) => {
  return (
    <div>
      <StyledImg src={src} alt={src}/>
      <p>{name}</p>
    </div>
  );
};

const Cointainer = styled.div`
    width: 100%;
    min-height: 77vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
  min-height: 50%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const StyledImg = styled.img`
    width:200px;
    height: auto;
`

export default Sponsorzy;
