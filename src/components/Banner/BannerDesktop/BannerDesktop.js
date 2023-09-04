// import logo from './logo.svg';
import React from "react";
import "./style.scss";
import Grid from "@mui/material/Grid";
import Banner from "../../../assets/banner-desktop.svg";

function BannerDesktop() {
  return (
    <div className="divBannerDesktop">
      <Grid container >
        <Grid item xs={3} className="DivLoren">
          <h2 className="tittleBanner">Lorem ipsum</h2>

          <p className="paragraphBannerDestkop">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque .
          </p>
        </Grid>
        <Grid item xs={9}>

        <img src={Banner} className="BannerDesktop"></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default BannerDesktop;
