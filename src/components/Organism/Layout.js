import { Link } from "gatsby";
import React from "react";
import Footer from "../Molecules/footer/Footer";
import Header from "../Molecules/header/Header";
import NavBar from "../Molecules/navbar/NavBar";

function Layout({ children }) {
  return (
    <div style={cointainer}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

const header = {
  width: '100%',
  backgroundColor: "#f5b301"
}
const cointainer = {
  height: 'auto',
  // backgroundColor: '#fed053'
}
export default Layout;
