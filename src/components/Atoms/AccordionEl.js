import React, { useState } from "react";
import { Accordion, useAccordionButton, Card } from "react-bootstrap";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

function AccordionEl({ data, slugName }) {
  // rozegrane minuty
  function howMuchMinutes(index) {
    const playerObject = data[index].Zawodnicy.find(
      (el) => el.Zawodnicy === slugName.name
    );
    return playerObject.minuty;
  }
  const [toogleIcon, setToogleIcon] = useState(true);
  console.log(toogleIcon);
  function convertData(x) {
    const newData = new Date(x);
    return newData.toLocaleDateString("Pl", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }
  const styleRotate = {
    rotate: {
      transform: "rotate(0deg)",
    },
    unRotate: {
      transform: "rotate(180deg)",
    },
  };
  function MapELement() {
    function CustomToggle({ children, eventKey }) {
      const decoratedOnClick = useAccordionButton(eventKey, () =>
        setToogleIcon(toogleIcon ? false : true)
      );

      return (
        <AccorrdionButton type="button" onClick={decoratedOnClick}>
          {children}
        </AccorrdionButton>
      );
    }
    if (data.length != 0) {
      return (
        <div>
          {data.map((el) => (
            <Card key={el.przeciwnik}>
              <CustomToggle eventKey={data.indexOf(el)}>
                <Teams>
                  <TeamsElement>
                    <img
                      src="/logo/logo.jpg"
                      alt="/logo/logo.jpg"
                      style={{ width: "50%", maxWidth: "30px", height: "auto" }}
                    />
                    <P>PFT Sampława</P>
                  </TeamsElement>
                  <P style={{ width: "10%" }}>-</P>
                  <TeamsElement>
                    <P>{el.przeciwnik}</P>
                    <img
                      src={el.logoEnemy.slice(7)}
                      alt={el.logoEnemy.slice(7)}
                      style={{ width: "50%", maxWidth: "30px", height: "auto" }}
                    />
                  </TeamsElement>
                </Teams>
                <div
                  style={toogleIcon ? styleRotate.rotate : styleRotate.unRotate}
                >
                  <IoIosArrowDown />
                </div>
              </CustomToggle>

              <Accordion.Collapse eventKey={data.indexOf(el)}>
                <Card.Body
                  style={{
                    color: "white",
                    backgroundColor: "rgba(0,0,0, 0.8)",
                  }}
                >
                  <Body>
                    <P style={{}}>data: {convertData(el.data)}</P>
                    <P style={{}}>
                      wynik: {el.pftGoals}-{el.enemyGoals}
                    </P>
                    <P style={{}}>
                      Rozegrane minuty: {howMuchMinutes(data.indexOf(el))}'
                    </P>
                  </Body>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </div>
      );
    } else {
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <p style={{ color: "white" }}>Brak danych</p>
        </div>
      );
    }
  }
  return (
    <Box>
      <Accordion defaultActiveKey="0">
        <MapELement />
      </Accordion>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
`;
export default AccordionEl;
const AccorrdionButton = styled.div`
  width: 100%;
  borderradius: 0;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
`;
const Teams = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TeamsElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const P = styled.p`
  color: white;
  font-size: clamp(10px, 3vw, 20px);
  width: 90%;
  text-align: center;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
