import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";
export default function RutaProtegida() {
  //******************* */
  const { auth, cargando } = useAuth();

  if (cargando) return "cargando....";

  return (
    <>
      {auth ? (
        <div className="bg-gray-100">
          <Header />
          <div className="md:flex md:min-h-screen">
            <Sidebar />
            <main className="p-10 flex-1">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
