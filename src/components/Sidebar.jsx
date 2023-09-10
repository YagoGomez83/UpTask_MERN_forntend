import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function Sidebar() {
  const { auth } = useAuth();
  const { nombre } = auth;

  return (
    <aside className="md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10">
      <p className="text-xl font-bold">Hola: {nombre}</p>
      <Link
        to="crear-proyecto"
        className="bg-sky-600 w-full text-white uppercase font-bold p-3 block mt-5 rounded-lg text-center hover:bg-sky-800 transition-colors"
      >
        Nuevo Proyecto
      </Link>
    </aside>
  );
}
