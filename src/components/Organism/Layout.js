import { Link } from "gatsby";
import React from "react";
import Footer from "../Molecules/footer/Footer";
import Header from "../Molecules/header/Header";
import NavBar from "../Molecules/navbar/NavBar";

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

const header = {
  width: '100%',
  height: '70vh',
  backgroundColor: "#f5b301"
}
export default Layout;
