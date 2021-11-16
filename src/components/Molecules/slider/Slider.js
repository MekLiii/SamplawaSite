import React from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "../../../images/slider/slider1.jpg";
import pic2 from "../../../images/slider/slider2.jpg";
import pic3 from "../../../images/slider/slider3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./slider.module.css";

function Slider() {
  return (
    <div style={cointainer}>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={pic3}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={pic3}
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

const cointainer = {
  width: "60%",
  padding: '20px'
  
};

export default Slider;
