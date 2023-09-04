// import logo from './logo.svg';
import React from "react";
import "./style.scss";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function NewsletterMobile() {
  return (
    <div className="divNewsLetter">
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <h2 className="tittleNewsletter">Recebe Nossa Newsletter</h2>
        </Grid>
        <Grid item xs={12} className="gridInputs">
        <input className="InputNewsLetter" placeholder="Digite seu e-mail"></input>
          <Button className="BtnSend" variant="contained">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewsletterMobile;
