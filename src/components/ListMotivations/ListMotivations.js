// import logo from './logo.svg';
import React from "react";
import "./style.scss";

import Importados from "../../assets/Importados.svg";
import Estoque from "../../assets/Estoque.svg";
import Trocas from "../../assets/Trocas.svg";
import Promocao from "../../assets/Promocao.svg";
import FreteGratis from "../../assets/Frete-Gratis.svg";

function ListMotivations() {
  return (
    <div className="motivartionsDiv">
      <ul className="List">
        <li className="Btngroup">
          <img src={Importados} width="308px" height="64px"></img>
        </li>
        <li className="Btngroup">
          <img src={Estoque} width="308px" height="64px"></img>
        </li>
        <li className="Btngroup">
          <img src={Trocas} width="308px" height="64px"></img>
        </li>
        <li className="Btngroup">
          <img src={Promocao} width="308px" height="64px"></img>
        </li>
        <li className="Btngroup">
          <img src={FreteGratis} width="308px" height="64px"></img>
        </li>
      </ul>
    </div>
  );
}

export default ListMotivations;
