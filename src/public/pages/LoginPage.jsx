import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../../context/HeroContext";
import { useEffect } from "react";

export const LoginPage = () => {
  const { user, setuser } = UseUserContext();
  const navigate = useNavigate();
  console.log({ user });

  useEffect(() => {
    if (user===true) {
      navigate("/marvel");
    }
  }, [user]);

  return (
    <div className=" max-w-md border border-indigo-600 p-4 rounded-md shadow-md grid gap-3 ">
      <h1 className="text-2xl  text-indigo-600">Ingresar</h1>
      <hr />
      <p className="text-sm font-light">
        Bienvenido a mi pagina de Heros - Marvel y Dc
      </p>
      <button
        onClick={() => setuser(true)}
        type="button"
        className="outline outline-1  text-white bg-indigo-600 rounded-md py-1 px-2  outline-indigo-600 hover:bg-white hover:text-indigo-600 transition-all duration-500   "
      >
        Entrar
      </button>
    </div>
  );
};
