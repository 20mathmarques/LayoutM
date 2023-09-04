import React, { useState } from "react";
import "./style.scss";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";

import facebook from "../../../assets/facebook.svg";
import linkedin from "../../../assets/linkedin.svg";
import instagram from "../../../assets/instagram.svg";
import youtube from "../../../assets/youtube.svg";
import visa from  "../../../assets/visa.svg";
import mastercard from  "../../../assets/mastercard.svg"
import poweredMaeztra from "../../../assets/powered-maeztra.svg"
import poweredVtex from "../../../assets/powered-vtex.svg"


function FooterMobile() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    console.log(panel);
  };

  return (
    <div className="divFooterMobile">
      <div className="FirstLineFooterMobile">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<AddIcon className="PlusIcon" />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="AcordionSummary"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="TittleAccordion"
            >
              Informações
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="SubTittleAccordion">Quem Somos</Typography>
            <Typography className="SubTittleAccordion">
              Prazo de Envio
            </Typography>
            <Typography className="SubTittleAccordion">
              Trocas e Devoluções
            </Typography>

            <Typography className="SubTittleAccordion">
              Promoções e Cupons
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<AddIcon className="PlusIcon" />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className="AcordionSummary"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="TittleAccordion"
            >
              Minha Conta
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="SubTittleAccordion"> Minha Conta</Typography>
            <Typography className="SubTittleAccordion">
              Meus Pedidos{" "}
            </Typography>
            <Typography className="SubTittleAccordion">Cadastra-se </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<AddIcon className="PlusIcon" />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            className="AcordionSummary"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="TittleAccordion"
            >
              Onde Nos Encontrar
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="SubTittleAccordion"> Lojas</Typography>
            <Typography className="SubTittleAccordion">Endereços </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="SecondLineFooterMobile">
        <Grid container spacing={2} className="divNetWorkMobile">
          <Grid item xs={2} md={8}>
            <img src={facebook}></img>
          </Grid>
          <Grid item xs={2} md={8}>
            <img src={linkedin}></img>
          </Grid>
          <Grid item xs={2} md={8}>
            <img src={instagram}></img>
          </Grid>
          <Grid item xs={2} md={8}>
            <img src={youtube}></img>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="divNetWorkMobile">
          <Grid item xs={2} md={8}>
            <img src={mastercard}></img>
          </Grid>
          <Grid item xs={2} md={8}>
            <img src={visa}></img>
          </Grid>
          <Grid item xs={2} md={8}>
            <img src={mastercard}></img>
          </Grid>
          <Grid item xs={2} md={8}>
            <img src={visa}></img>
          </Grid>
        </Grid>

        <Grid container spacing={0} className="divNetWorkMobile">
          <Grid item xs={6} md={8}>
          <img src={poweredVtex}></img>

          </Grid>
          <Grid item xs={6} md={8}>
            <img src={poweredMaeztra}></img>

            
          </Grid>
     
        </Grid>
      </div>
    </div>
  );
}

export default FooterMobile;
