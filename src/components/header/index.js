import React from "react";

import "./index.css";

function Header({ onSearchInput }) {
  return (
    <header className="cabecalho">
      <h1>SILOC</h1>
      <p>
        Sistema Integrado de
        <br />
        Localização Cadavérica
      </p>

      <a href="index.html">
        <h1 className="logo"> SILOC </h1>
      </a>

      <div className="search-box">
        <input
          className="search-txt"
          type="text"
          name=""
          onChange={(e) => {
            onSearchInput(e.target.value);
          }}
          placeholder="Pesquisar cadáver pelo NIC"
        />
        <a className="search-btn" href="#"></a>
      </div>
    </header>
  );
}

export default Header;
