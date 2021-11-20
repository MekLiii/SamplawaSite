import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer style={footer}>
      <p style={{ fontSize: "1rem" }}>© {year} PFT Drewneks Sampława </p>
    </footer>
  );
}

const footer = {
  width: "100%",
  height: "8vh",
  backgroundColor: "#fed053",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#ebebeb",
};

export default Footer;
