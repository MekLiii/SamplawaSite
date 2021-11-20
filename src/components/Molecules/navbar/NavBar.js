import React from "react";
import { Link } from "gatsby";
import styles from './navbar.module.css'
import logo from '../../../images/logo.png'

function NavBar() {
  return (
    <nav style={nav} className={styles}>
      <ul style={ul}>
      <li>
          <img src={logo} alt="logo" style={{width:"80%"}}/>
      </li>
        <li>
          <Link to="/">Strona głowna</Link>
        </li>
        <li>
          <Link to="/Druzyna">Drużyna</Link>
        </li>
        <li>
          <Link to="/Galeria">Galeria</Link>
        </li>
        <li>
          <Link to="/Sponsorzy">Sponsorzy</Link>
        </li>
        <li>
          <Link to="/Kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

const nav = {
  width: "100%",
  height: "10vh",
  // backgroundColor: "#1e2328",
  backgroundColor: '#Fed053'
};
const ul = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%",
  listStyle: "none",
};

const li = {
  color: "#1e232b",
};

export default NavBar;
