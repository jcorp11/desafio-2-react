import { useState } from "react";
import { useEffect } from "react";
import "./css/formulario.css";
import { validarInput } from "../utils/validate";

const Formulario = ({ error, setError }) => {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const changeInput = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => console.log({ error }), [error]);

  return (
    <section className="formContainer">
      <form
        className="formulario"
        onSubmit={(e) => validarInput(e, formState, setError)}
      >
        <section className="form-group mt-3">
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="form-control"
            placeholder="Tu Nombre"
            value={formState.nombre}
            onChange={changeInput}
          />
        </section>
        <section className="form-group mt-2">
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            placeholder="tuemail@ejemplo.com"
            value={formState.email}
            onChange={changeInput}
          />
        </section>
        <section className="form-group mt-2">
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Contraseña"
            value={formState.password}
            onChange={changeInput}
          />
        </section>
        <section className="form-group mt-2">
          <input
            type="password"
            name="confirmarPassword"
            id="repeatpass"
            className="form-control"
            placeholder="Repite la contraseña"
            value={formState.confirmarPassword}
            onChange={changeInput}
          />
        </section>
        <button
          type="submit"
          className="btn mt-4
    btn-success d-block w-100"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Formulario;
