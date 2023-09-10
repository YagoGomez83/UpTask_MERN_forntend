import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import Alerta from "../components/Alerta";
export default function ConfirmarCuenta() {
  const [alerta, setAlerta] = useState({});
  const [confirmada, setConfirmada] = useState(false);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        // const url = `${
        //   import.meta.env.VITE_BACKEND_URL
        // }/api/usuarios/confirmar/${id}`;

        const { data } = await clienteAxios(`/usuarios/confirmar/${id}`);
        setAlerta({
          msg: data.msg,
          error: false,
        });
        setConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    return () => {
      confirmarCuenta();
    };
  }, []);
  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Confirma tu cuenta y empieza a crear tus{" "}
        <span className="text-slate-700"> proyectos</span>
      </h1>
      <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        {confirmada && (
          <Link
            to="/"
            className="block text-center my-5 text-slate-500 uppercase text-sm"
          >
            Inicia Sesión
          </Link>
        )}
      </div>
    </>
  );
}
