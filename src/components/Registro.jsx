import { useState } from "react";
import SocialButton from "./SocialButton";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Formulario from "./Formulario";

const Registro = ({ error, setError }) => {
  return (
    <div className="registro-container" style={style.registro}>
      <h1 style={style.h1}>Crea una cuenta</h1>
      <SocialButton {...{ faFacebook, faGithub, faLinkedinIn }} />
      <Formulario {...{ error, setError }} />
    </div>
  );
};

const style = {
  registro: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    padding: "25px 25px",
    borderRadius: "15px",
  },
  h1: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "0",
  },
};

export default Registro;
