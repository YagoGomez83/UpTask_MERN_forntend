import useProyectos from "../hooks/useProyectos";
export default function Colaborador({ colaborador }) {
  const { nombre, email } = colaborador;

  const { handleModalElminarColaborador } = useProyectos();
  return (
    <div className="border-b p-5 flex justify-between items-center  ">
      <div className="">
        <p className="">{nombre}</p>
        <p className="text-sm text-gray-700">{email}</p>
      </div>
      <div className="">
        <button
          type="button"
          className=" bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
          onClick={() => handleModalElminarColaborador(colaborador)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
