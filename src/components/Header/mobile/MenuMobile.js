// import logo from './logo.svg';
import React from "react";
import "./style.scss";

import iconMenu from '../../../assets/icon-menu.svg'
import logo from '../../../assets/logo-mobile.svg'
import lupa from '../../../assets/lupa.svg'
import logoCart from '../../../assets/logo-carrinho-mobile.svg'


function MenuMobile() {
  return (
    <div className="div">
      <img src={iconMenu} width="32" height="32"/>
      <img src={logo} width="110" height="88"/>
      <img src={lupa} width="32" height="32"/>
      <img src={logoCart} width="32" height="32"/>


    </div>
  );
}

export default MenuMobile;
