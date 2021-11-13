import React from "react";
import { Link } from "gatsby";
import styles from './navbar.module.css'

function NavBar() {
  return (
    <nav style={nav} className={styles}>
      <ul style={ul}>
      <li>
          <img src="/logo.png" alt="logo" style={{width:"80%"}}/>
      </li>
        <li>
          <Link to="/">Strona głowna</Link>
        </li>
        <li>
          <Link to="/Aktualnosci">Aktualności</Link>
        </li>
        <li>
          <Link to="/zawodnicy">Galeria</Link>
        </li>
        <li>
          <Link to="/zawodnicy">Sponsorzy</Link>
        </li>
        <li>
          <Link to="/zawodnicy">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

const nav = {
  width: "100%",
  height: "10vh",
  backgroundColor: "#1e2328",
};
const ul = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%",
  listStyle: "none",
};

const li = {
  color: "white",
};

export default NavBar;
