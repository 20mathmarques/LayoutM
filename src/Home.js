// import logo from './logo.svg';
import React from "react";
import "./home.scss";
import Header from "./components/Header/Header";
import FirstBanner from "./components/FirstBanner/FirstBanner";
import ListMotivations from "./components/ListMotivations/ListMotivations";
import ListBrands from "./components/ListBrands/ListBrands";
import Vitrine from "./components/Vitrine/Vitrine";
import Banner from "./components/Banner/Banner";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
function Home() {

  
  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <FirstBanner />
        <p className="whyMaestra"> Por que comprar na Maeztra?</p>
        <ListMotivations />
        <p className="Brands"> Marcas Parceiras</p>
        <ListBrands />
        <p className="Brands"> As Mais Pedidas</p>
         <Vitrine /> 
        <Banner />
        <Newsletter />
      </body>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default Home;
