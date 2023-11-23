import "./css/alerta.css";

const Alerta = ({ error }) => {
  let paraAlerta = "";
  if (!error.mistake) {
    paraAlerta = <p>Registro exitoso</p>;
  } else if (!error.conditions.boolNombre) {
    paraAlerta = <p>El nombre es obligatorio</p>;
  } else if (!error.conditions.boolEmail) {
    paraAlerta = <p>El email debe ser válido</p>;
  } else if (!error.conditions.boolPass) {
    paraAlerta = (
      <p>
        La contrasena debe tener al menos:
        <br />1 letra
        <br />1 numero
        <br />1 caracter especial
        <br />
        al menos 8 caracteres
      </p>
    );
  } else if (!error.conditions.boolRepeatPass) {
    paraAlerta = <p>Las contrasenas no coinciden</p>;
  }

  return (
    <section
      className={`alert m-3 w-100  ${error.load ? "visible" : "hidden"} ${
        error.mistake ? "alert-danger" : "alert-success"
      }`}
    >
      {paraAlerta}
    </section>
  );
};

export default Alerta;
