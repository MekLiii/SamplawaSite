
import React from "react";
import Footer from "../Molecules/footer/Footer";

import NavBar from "../Molecules/navbar/NavBar";

function Layout({ children,pathSpons }) {
  return (
    <div style={cointainer}>
      <NavBar pathSpons={pathSpons}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

const cointainer = {
  height: 'auto',  
  backgroundColor: 'black',

  // backgroundColor: '#fed053'
}
export default Layout;
