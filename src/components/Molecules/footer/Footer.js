import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer style={footer}>
      <div style={{display: 'flex',gap:'15px'}}>
        <a
          href="https://www.facebook.com/WyrownawczaAkademiaPilkarska"
          target="_blank"
        >
          <div
            style={{
              width: "37px",
              height: "37px",
              backgroundColor: "#ffe600",
              borderRadius: "11px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faFacebookF} size="1x" color="black" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/pft_drewneks_samplawa/"
          target="_blank"
        >
          <div
            style={{
              width: "37px",
              height: "37px",
              backgroundColor: "#ffe600",
              borderRadius: "11px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
          </div>
        </a>
      </div>
      <p
        style={{
          fontSize: "14px",
          fontFamily: "poppins",
          margin: 0,
          color: "white",
        }}
      >
        © {year} PFT Drewneks Sampława{" "}
      </p>
    </footer>
  );
}

const footer = {
  width: "100%",
  height: "13vh",
  // backgroundColor: "#ffe600",
  backgroundColor: "black",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",
};

export default Footer;
