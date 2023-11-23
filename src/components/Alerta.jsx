import "./css/alerta.css";

const Alerta = ({ error }) => {
  let paraAlerta = "";

  const errorMessages = {
    boolNombre: "El nombre es obligatorio",
    boolEmail: "El email debe ser válido",
    boolPass: (
      <div style={{ margin: "0 auto" }}>
        <p style={{ textAlign: "left" }}>
          La contraseña debe tener al menos:
          <br />1 Letra
          <br />1 Número
          <br />1 Caracter especial
          <br />
          Al menos 8 caracteres
        </p>
      </div>
    ),
    boolRepeatPass: "Las contraseñas no coinciden",
  };

  // caso default exitoso
  paraAlerta = <p>Registro exitoso</p>;

  for (const condition in error.conditions) {
    if (!error.conditions[condition]) {
      paraAlerta = <p>{errorMessages[condition]}</p>;
      break;
    }
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
