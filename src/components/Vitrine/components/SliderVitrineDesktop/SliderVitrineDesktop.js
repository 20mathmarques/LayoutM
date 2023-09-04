import React, { useState } from "react";
import "./style.scss";

function SliderVitrineDesktop({ products, productsPerSlide }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(products.length / productsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const sliceStart = currentIndex * productsPerSlide;
  const sliceEnd = sliceStart + productsPerSlide;
  const slicedProducts = products.slice(sliceStart, sliceEnd);

  const dots = Array.from({ length: totalSlides }).map((_, index) => (
    <span
      key={index}
      className={`dot ${index === currentIndex ? "active" : ""}`}
      onClick={() => handleDotClick(index)}
    />
  ));

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="product-carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-content">
          {slicedProducts.map((product) => (
            <div key={product.id} className="carousel-item">
              <img src={product.img} className="ProductImage" />
              <div className="InformationsProduct">

              <div className="DivColors">
                {product.colors.map((color) => (
                  <button
                    className="BtnColors"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <p className="PriceProduct">{product.value}</p>

              <p className="NameProduct">{product.name}</p>
              <p className="DescProduct">{product.desc}</p>
              <btn className="BtnAddProduct">Adicionar</btn>

              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </>
  );
}

export default SliderVitrineDesktop;
