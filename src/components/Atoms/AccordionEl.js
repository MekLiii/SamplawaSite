import React, { useState } from "react";
import { Accordion, useAccordionButton, Card } from "react-bootstrap";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

function AccordionEl({ data, slugName }) {
  // rozegrane minuty

  const howMuchMinutes = (data) => {
    let minutes = 0;

    const newData = data.filter((el) => el.Zawodnicy === slugName.name);

    newData.forEach((match) => {
      minutes += match.minuty;
    });
    return minutes;
  };
  const [toogleIcon, setToogleIcon] = useState(true);
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
        setToogleIcon(eventKey)
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
          {data.map(({ frontmatter }, index) => (
            <Card key={index}>
              <CustomToggle eventKey={index}>
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
                    <P>{frontmatter.przeciwnik}</P>
                    <img
                      src={frontmatter.logoEnemy}
                      alt={frontmatter.logoEnemy}
                      style={{ width: "50%", maxWidth: "30px", height: "auto" }}
                    />
                  </TeamsElement>
                </Teams>
                <div
                  style={
                    toogleIcon === data.indexOf(frontmatter)
                      ? styleRotate.rotate
                      : styleRotate.unRotate
                  }
                >
                  <IoIosArrowDown />
                </div>
              </CustomToggle>

              <Accordion.Collapse eventKey={index}>
                <Card.Body
                  style={{
                    color: "white",
                    backgroundColor: "rgba(0,0,0, 0.8)",
                  }}
                >
                  <Body>
                    <P style={{}}>{convertData(frontmatter.data)}</P>
                    <P style={{}}>
                      wynik: {frontmatter.pftGoals}-{frontmatter.enemyGoals}
                    </P>
                    <P style={{}}>
                      Rozegrane minuty: {howMuchMinutes(frontmatter.Zawodnicy)}'
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
  border-radius: 0;
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
