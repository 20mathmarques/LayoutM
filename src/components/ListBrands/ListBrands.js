// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./style.scss";

import Comma from "../../assets/comma.svg";
import Melissa from "../../assets/melissa.svg";
import Forever from "../../assets/forever.svg";
import Zara from "../../assets/zara.svg";
import Anntaylor from "../../assets/anntaylor.svg";

function ListBrands() {
  const [SizePage, setSizePage] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setSizePage(window.innerWidth);
  };

  useEffect(() => {
    // Adicione um ouvinte de evento de redimensionamento à janela
    window.addEventListener("resize", updateWindowWidth);

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <div className="brandDiv">
      {SizePage <= 820 ? (
        <ul className="List">
          <li className="Btngroup">
            <img src={Forever} width="308px" height="64px"></img>
          </li>

          <li className="Btngroup">
            <img src={Comma} width="308px" height="64px"></img>
          </li>
          <li className="Btngroup">
            <img src={Melissa} width="308px" height="64px"></img>
          </li>

          <li className="Btngroup">
            <img src={Zara} width="308px" height="64px"></img>
          </li>
          <li className="Btngroup">
            <img src={Anntaylor} width="308px" height="64px"></img>
          </li>
        </ul>
      ) : (
        <ul className="List">
          <li className="Btngroup">
            <img src={Comma} width="308px" height="64px"></img>
          </li>
          <li className="Btngroup">
            <img src={Melissa} width="308px" height="64px"></img>
          </li>
          <li className="Btngroup">
            <img src={Forever} width="308px" height="64px"></img>
          </li>
          <li className="Btngroup">
            <img src={Zara} width="308px" height="64px"></img>
          </li>
          <li className="Btngroup">
            <img src={Anntaylor} width="308px" height="64px"></img>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ListBrands;
