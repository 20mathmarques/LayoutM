// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./style.scss";
import BannerMobile from "./BannerMobile/BannerMobile";
import BannerDesktop from "./BannerDesktop/BannerDesktop";

function Banner() {
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
    <div className="divBanner">
      {SizePage <= 820 ? <BannerMobile /> : <BannerDesktop />}
    </div>
  );
}

export default Banner;
