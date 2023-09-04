// import logo from './logo.svg';
import React from "react";
import "./style.scss";
import Grid from "@mui/material/Grid";
import Banner from "../../../assets/banner-mobile.svg";

function BannerMobile() {
  return (
    <div className="divBanner">
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <h2 className="tittleBanner">Lorem ipsum</h2>

          <p className="paragraphBanner">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque .
          </p>
        </Grid>
        <Grid item xs={12}>

        <img src={Banner} width="300px" height="185px" className="BannerMobile"></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default BannerMobile;
