// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./style.scss";

import Produto1 from '../../assets/Produto01.jpg'
import Produto2 from '../../assets/Produto2.jpg'
import SliderVitrineMobile from "./components/SliderVitrineMobile/SliderVitrineMobile";
import SliderVitrineDesktop from "./components/SliderVitrineDesktop/SliderVitrineDesktop";

function Vitrine() {
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

  // fazer listas de prodiutos
  const produto = [
    {
      id: 1,
      colors:[
        '#3C3B79',
        '#6497D3',
        '#D37164',
        '#DEAC71'

      ],
      value:'R$ 500,00',
      name:'Faux Suede Mini Skirt',
      desc:'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      img: Produto1
    },{
    id: 2,
    colors:[
      '#1C1A19',
      '#D84E4B',
      '#CFC9B0',
      '#DEAC71'

    ],
    value:'R$ 320,00',
    name:'Ruched Rose Print Mini Skirt',
    desc:'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    img: Produto2

  },
    {
      id: 3,
      colors:[
        '#DEAC71',
        '#D37164',
        '##6497D3',
        '#3C3B79'

      ],
      value:'R$ 500,00',
      name:'Faux Suede Mini Skirt',
      desc:'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      img: Produto1

    },
    {
      id: 4,
      colors:[
        '#1C1A19',
        '#D84E4B',
        '#CFC9B0',
        '#DEAC71'

      ],
      value:'R$ 320,00',
      name:'Ruched Rose Print Mini Skirt',
      desc:'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      img: Produto2

    },
  ];



  return (
    <div className="divSlider">

      {SizePage <= 820 ?
            <SliderVitrineMobile products={produto}  productsPerSlide={1}/>

      :
      <SliderVitrineDesktop products={produto}  productsPerSlide={4}/>
      }


    </div>
  );
}

export default Vitrine;
