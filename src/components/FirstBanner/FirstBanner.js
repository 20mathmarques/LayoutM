// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import bannerMobileFirst from "../../assets/bannerMobileFirst.png";
import BannerDesktop from "../../assets/BannerDesktopFirst.png";

import "./style.scss";

function FirstBanner() {
  useEffect(() => {
    // Adicione um ouvinte de evento de redimensionamento à janela
    window.addEventListener("resize", updateWindowWidth);

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const [SizePage, setSizePage] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setSizePage(window.innerWidth);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const imageMobile = [
    {
      img: bannerMobileFirst,
    },
    {
      img: bannerMobileFirst,
    },
    {
      img: bannerMobileFirst,
    },
  ];

  const imageDesktop = [
    {
      id: 1,
      img: BannerDesktop,
    },
    {
      id: 2,
      img: BannerDesktop,
    },
    {
      id: 3,
      img: BannerDesktop,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageDesktop.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageDesktop.length - 1 : prevIndex - 1
    );
  };

  const dots = imageDesktop.map((_, index) => (
    <span
      key={index}
      className={`dot ${index === currentIndex ? "active" : ""}`}
      onClick={() => handleDotClick(index)}
    />
  ));

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };


  
  const nextSlideMobile = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageDesktop.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlideMobile = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageMobile.length - 1 : prevIndex - 1
    );
  };

  const dotsMobile = imageMobile.map((_, index) => (
    <span
      key={index}
      className={`dot ${index === currentIndex ? "active" : ""}`}
      onClick={() => handleDotClickMobile(index)}
    />
  ));

  const handleDotClickMobile = (index) => {
    setCurrentIndex(index);
  };

  

  return (

    SizePage <=680 ?
      
      <div>
      <div className="product-carousel">
        <button className="carousel-button prev" onClick={prevSlideMobile}>
          &#10094;
        </button>
        <div className="carousel-content">
          {imageMobile.map((product, index) => (
            <div
              key={product.id}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={product.img} className="ImageBannerSlider" />
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextSlideMobile}>
          &#10095;
        </button>
      </div>
      <div className="dots-container">{dotsMobile}</div>
    </div>
      :
    
      <div>
      <div className="product-carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-content">
          {imageDesktop.map((product, index) => (
            <div
              key={product.id}
              className={`carousel-item-first-banner ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={product.img} className="ImageBannerSlider" />
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="dots-container">{dots}</div>
    </div>
    
  );
}

export default FirstBanner;
