// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./style.scss";
import NewsletterMobile from "./NewsletterMobile/NewsletterMobile";
import NewsletterDesktop from "./NewsletterDesktop/NewsletterDesktop";

function Newsletter() {
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
    <div className="divNewsletter">
      {SizePage <= 820 ? <NewsletterMobile /> : <NewsletterDesktop />}
    </div>
  );
}

export default Newsletter;
