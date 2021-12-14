import React from "react";
import Layout from "../components/Organism/Layout";
import styled from "styled-components";
import logo from "../../content/assets/logo.jpg";
import AdresEL from "../components/Atoms/AdressEl";
import data from "../../content/oKlubieData.json";

function Oklubie() {
  
  return (
    <Layout>
      
      <Cointainer>
        <h2 style={{ color: "rgb(255, 230, 0)" }}>O klubie</h2>
        <StyledBox>
          <StyledOklubie>
            <div style={OpisTop}>
              <h2 style={{ color: "rgb(255, 230, 0)" }}>
                PFT DREWNEKS SAMPŁAWA
              </h2>
              <img src={logo} alt={logo} />
            </div>
            <OpisBottom>
              <div style={adres}>
                <p
                  style={{
                    borderBottom: "1px solid rgb(255, 230, 0)",
                    color: "#979797",
                  }}
                >
                  Adres
                </p>
                <AdresEL
                  desc="Ulica i numer lokalu"
                  prop="Sampława 4"
                  style={flex}
                />
                <AdresEL desc="Kod Pocztowy" prop="14-260" style={flex} />
                <AdresEL desc="Miasto" prop="Lubawa " style={flex} />
                <AdresEL
                  desc="Województwo"
                  prop="Warmińsko-mazurskie"
                  style={flex}
                />
              </div>
              <div style={kontakt}>
                <p
                  style={{
                    borderBottom: "1px solid rgb(255, 230, 0)",
                    color: "#979797",
                  }}
                >
                  Kontakt
                </p>
                <AdresEL desc="Telefon" prop="710 777 358" style={flex} />
                <AdresEL
                  desc="adres email"
                  prop="profootballteam2019@gmail.com"
                  style={flex}
                />
              </div>
            </OpisBottom>
          </StyledOklubie>
          <GridHolder>
          <StyledOpis>
            <Opis>
              <div style={OpisTopEL} id="OpisTotpEl">
                {data.zarzad.map((el) => (
                  <AdresEL
                    prop={el.name}
                    desc={el.funkcja}
                    style={{ display: "flex", justifyContent: "space-between" }}
                    
                  />
                ))}
                <AdresEL prop={data.tekst} />
              </div>
              <div style={OpisBotEL}>
                {data.Osiagniecia.map((el) => (
                  <div>
                    <AdresEL prop={el.year} />
                    {el.osiagniecie.map((el) => (
                      <AdresEL desc={`-${el.osiagniecie}`} />
                    ))}
                  </div>
                ))}
              </div>
            </Opis>
          </StyledOpis>
          </GridHolder>
        </StyledBox>
      </Cointainer>
      
    </Layout>
  );
}
const flex = {
  display: "flex",
};
const Cointainer = styled.div`
  width: 100%;
   min-height: 120vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const StyledBox = styled.div`
  background-color: rgba(43, 43, 43, 0.8);
  min-height: 120vh;
  width: 95vw;
  display: grid;
  grid-auto-rows: minmax(800px,auto);
  ${'' /* grid-template-columns: 2.5fr 3fr; */}
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 0px;
  height: 100%;
  ${"" /* backdrop-filter: blur(5px); */}
  @media only screen and (max-width: 768px) {
    ${'' /* display: flex;
    flex-direction: column;
    min-height: 350vh;
    height:auto; */}
    grid-template-columns:1fr;
    grid-auto-rows: .5fr 1fr;
  }
`;
const StyledOklubie = styled.div`
@media only screen and (max-width: 768px) {
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
`;
const StyledDruzyny = styled.div``;
const StyledOpis = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  @media only screen and (max-width: 768px) {
    display:flex;
    justify-content: center;
    align-items: center;
  }
`;
const OpisTop = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "50%",
  width: "100%",
};

const OpisBottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    width: 90%;
    
  }
`;
const adres = {
  minWidth: "45%",
  width:'auto,'
};
const kontakt = {
  minWidth: "45%",
  width:'auto,'

};
const Opis = styled.div`
  height: 80%;
  width: 90%;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const OpisEl = styled.div`
  width: 50%;
`;
const OpisTopEL = {
  minWidth: "38%",
  height: "100%",
  margin: "2%",
};
const OpisBotEL = {
  minWidth: "60%",
  height: "100%",
  // backgroundColor: "violet",
};
const GridHolder = styled.div`
height: auto;
  min-height:70vh;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  

`
export default Oklubie;
