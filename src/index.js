import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './Home';
import ModalMobile from './components/ModalMobile/ModalMobile';
import ModalDesktop from './components/ModalDesktop/ModalDesktop';


const root = ReactDOM.createRoot(document.getElementById('root'));

const SizePage = window.innerWidth


root.render(
  
  <React.StrictMode>
    {/* fazer validação de tamanho */}
    {SizePage <= 820 ? <ModalMobile/>  : <ModalDesktop/> }
    
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
