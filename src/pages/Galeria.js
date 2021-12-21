import React, { useState } from "react";
import Layout from "../components/Organism/Layout";
import FigureImage from "react-bootstrap/FigureImage";
import Figure from "react-bootstrap/Figure";

function Galeria({ slides }) {
  return (
    <Layout>
      <div style={{ height: "82vh" }}>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/76197820_521478975074999_7537339340129566720_n%20(1).png?alt=media&token=ae3b0d58-3cd6-41b6-9415-a9b54a1fd2aa"
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
      </div>
    </Layout>
  );
}


function Carousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Galeria;
