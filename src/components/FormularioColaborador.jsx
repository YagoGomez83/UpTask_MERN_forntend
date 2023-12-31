import { useState } from "react";
import useProyectos from "../hooks/useProyectos";
import Alerta from "./Alerta";
export default function FormularioColaborador() {
  //******************** */
  const [email, setEmail] = useState("");
  //************************ */
  const { alerta, mostrarAlerta, submitColaborador } = useProyectos();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      mostrarAlerta({
        msg: "El email es obligatorio",
        error: true,
      });

      return;
    }

    submitColaborador(email);
  };

  const { msg } = alerta;
  return (
    <form
      className="bg-white px-5 py-10 w-full md:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {msg && <Alerta alerta={alerta} />}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Email Colaborador
        </label>
        <input
          type="email"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          id="email"
          placeholder="Email del usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input
        type="submit"
        className="bg-sky-600 hover:bg-sky-800 transition-colors w-full p-3 text-white uppercase font-bold rounded-md hover:cursor-pointer text-sm"
        value="Buscar Colaborador"
      />
    </form>
  );
}
