import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import emailIcon from "../../assets/newsletter-mail-icon.svg";
import SendIcon from "../../assets/send-icon.svg";
import "./style.scss";
import Grid from "@mui/material/Grid";
import BannerModal from "../../assets/bg-newsletter-modal.svg";

function ModalDesktop() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        className="ModalDesktop"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="BoxModalDesktop">
            
          <Grid container spacing={0} className="GridModalDesktop">
            <Grid item xs={7} className="DivImageModal">
              <img src={BannerModal} className="BannerNewsLetter"></img>
            </Grid>
            <Grid item xs={5} className="DivContentModal">
              <img src={emailIcon} className="emaiLogo"></img>
              <p className="BenvindoText">Bem Vindo à MAEZTRA</p>
              <p className="RecebaText">Receba em Primeira mão</p>
              <p className="DescontoText">desconto e ofertas Exclusivas</p>
              <div className="DivInputModalDesktop">
                <input
                  className="InputNewsLetterModal"
                  placeholder="Digite seu e-mail"
                ></input>
              </div>
              <div className="DivBtnModalDesktop">
                <Button
                  className="BtnSendDesktop"
                  variant="contained"
                  endIcon={<img src={SendIcon} />}
                >
                  Enviar
                </Button>
              </div>{" "}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalDesktop;
