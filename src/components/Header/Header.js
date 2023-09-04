// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./header.scss";
import MenuMobile from "./mobile/MenuMobile";
import MenuDesktop from "./desktop/MenuDesktop";

function Header() {
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
    <div className="header">
      <div className="firstBanner">
        <p className="tittleFirstBanner">
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </p>
      </div>
      {SizePage <= 820 ? <MenuMobile /> : <MenuDesktop />}
    </div>
  );
}

export default Header;
