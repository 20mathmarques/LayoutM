// import logo from './logo.svg';
import React from "react";
import "./style.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';


function NewsletterDesktop() {
  return (
    <div className="divNewsletterDesktop">

        <Grid item xs={12} className="NewsLetterDesktop">
          <h2 className="tittleNewsletter">Recebe Nossa Newsletter</h2>

          <div>
          <input className="inputEmail" placeholder="Digite seu e-mail"></input>

          <Button className="BtnSendDesktop" variant="contained">
            Enviar
          </Button>

          </div>
        </Grid>
    </div>
  );
}

export default NewsletterDesktop;
