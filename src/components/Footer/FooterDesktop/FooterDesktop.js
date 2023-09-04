import React from "react";
import "./style.scss";
import Grid from "@mui/material/Grid";

import facebook from "../../../assets/facebook.svg";
import linkedin from "../../../assets/linkedin.svg";
import instagram from "../../../assets/instagram.svg";
import youtube from "../../../assets/youtube.svg";
import visa from "../../../assets/visa.svg";
import mastercard from "../../../assets/mastercard.svg";
import poweredMaeztra from "../../../assets/powered-maeztra.svg";
import poweredVtex from "../../../assets/powered-vtex.svg";

function FooterDesktop() {
  return (
    <div className="divFooterFooterDesktop">
      <div className="FirstLine">
        <div className="Block">
          <ul className="group">
            <p className="TittleMenuFooter">Informações</p>
            <li className="ItemFooter">Quem Somos</li>

            <li className="ItemFooter">Prazo de Envio</li>
            <li className="ItemFooter">Trocas e Devoluções</li>
            <li className="ItemFooter">Promoções e Cupons</li>
          </ul>
        </div>
        <div className="Block">
          <ul className="group">
            <p className="TittleMenuFooter">Minha Conta</p>
            <li className="ItemFooter">Minha Conta</li>

            <li className="ItemFooter">Meus Pedidos</li>
            <li className="ItemFooter">Cadastre-se</li>
          </ul>
        </div>

        <div className="Block">
          <ul className="group">
            <p className="TittleMenuFooter">Onde nos Encontrar</p>
            <li className="ItemFooter">Lojas</li>
            <li className="ItemFooter">Endereço</li>
          </ul>
        </div>
      </div>

      <div className="SecondLine">
        <div className="divNetWork">
          <img className="imgs" src={facebook}></img>
          <img className="imgs" src={linkedin}></img>
          <img className="imgs" src={instagram}></img>
          <img className="imgs" src={youtube}></img>
        </div>

        <div className="divNetWork">
          {" "}
          <img src={mastercard} className="imgs"></img>
          <img src={visa} className="imgs"></img>
          <img src={mastercard} className="imgs"></img>
          <img src={visa} className="imgs"></img>
        </div>

        <div className="divNetWork">
          {" "}
          <img src={poweredVtex} ></img>
          <img src={poweredMaeztra}></img>
        </div>
      </div>
    </div>
  );
}

export default FooterDesktop;
