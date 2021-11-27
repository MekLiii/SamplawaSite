
import React from "react";
import Footer from "../Molecules/footer/Footer";

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

const cointainer = {
  height: 'auto',
  backgroundColor: '#1e232b'
  

  // backgroundColor: '#fed053'
}
export default Layout;
