import React, { useEffect, useState } from "react";
import "./style.scss";
import FooterMobile from "./FooterMobile/FooterMobile";
import FooterDesktop from "./FooterDesktop/FooterDesktop";

function Footer() {
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
    <div className="divFooter">
      {SizePage <= 820 ? <FooterMobile /> : <FooterDesktop />}
    </div>
  );
}

export default Footer;
