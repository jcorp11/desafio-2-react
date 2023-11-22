import { useState } from "react";
import { useEffect } from "react";

const Formulario = ({ error, setError }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");

  useEffect(() => console.log({ error }), [error]);

  const validarInput = async (e) => {
    e.preventDefault();
    console.log({ nombre, email, password, confirmarPassword });

    const boolNombre = /^[A-Za-z]+ [A-Za-z]+$/.test(nombre);
    const boolEmail =
      /^([a-zA-Z0-9_\-]+)(\.[a-zA-Z0-9_\-]+)*@(([a-zA-Z0-9\-]+)\.)+([a-zA-Z]{2,})$/.test(
        email
      );
    const boolPass =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      );
    const boolRepeatPass = password === confirmarPassword;

    console.log({ boolNombre, boolEmail, boolPass, boolRepeatPass });
    if (!boolNombre || !boolEmail || !boolPass || !boolRepeatPass) {
      setError(2);
      return;
    }
    setError(1);
  };

  return (
    <section className="formContainer">
      <form className="formulario" onSubmit={validarInput}>
        <section className="form-group mt-3">
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="form-control"
            placeholder="Tu Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </section>
        <section className="form-group mt-2">
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            placeholder="tuemail@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className="form-group mt-2">
          <input
            type="password"
            name="contrasena"
            id="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <section className="form-group mt-2">
          <input
            type="password"
            name="repeatpass"
            id="repeatpass"
            className="form-control"
            placeholder="Repite la contraseña"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
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
