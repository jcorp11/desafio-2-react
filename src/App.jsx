import "bootstrap/dist/css/bootstrap.min.css";
import "./normalize.css";
import { useState } from "react";
import Registro from "./components/Registro";

import "./App.css";

function App() {
  const [error, setError] = useState(0);
  return (
    <>
      <Registro {...{ error, setError }} />
    </>
  );
}

export default App;
