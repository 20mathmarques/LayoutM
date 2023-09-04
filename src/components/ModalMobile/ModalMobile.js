import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import emailIcon from "../../assets/newsletter-mail-icon.svg";
import SendIcon from "../../assets/send-icon.svg";
import "./style.scss";

function ModalMobile() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        className="ModalMobile"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="BoxModalMobile">
          <p onClick={handleClose} className="CloseModalText">
            Fechar
          </p>

          <img src={emailIcon} className="emaiLogo"></img>

          <p className="BenvindoText">Bem Vindo à MAEZTRA</p>
          <p className="RecebaText">Receba em Primeira mão</p>
          <p className="DescontoText">desconto e ofertas Exclusivas</p>
          <div className="DivInputModalMobile">
            <input
              className="InputNewsLetterModal"
              placeholder="Digite seu e-mail"
            ></input>
          </div>
          <div className="DivBtnModalMobile">
            <Button
              className="BtnSendMobile"
              variant="contained"
              endIcon={<img src={SendIcon} />}
            >
              Enviar
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalMobile;
