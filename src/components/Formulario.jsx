import { useState } from "react";
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState(false);

  return (
    <section className="formContainer">
      <form>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Tu Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="tuemail@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="contrasena"
          id="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Formulario;
