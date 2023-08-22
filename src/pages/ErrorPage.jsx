import { Link, useRouteError } from "react-router-dom";
import { Title } from "../components/Title";

export const ErrorPage = () => {
  const {status,statusText} = useRouteError();
  return (
    <div className=" min-h-screen grid place-content-center">
      <div className="flex flex-col g-3 items-center" >
        <Title title={status} />
        <p className="text-center text-lg mb-3" >
          Page - {statusText}
        </p>
        <Link to='/' className="w-full block text-center outline outline-indigo-600 outline-1 rounded-md text-white bg-indigo-600
        py-1 px-2 text-md hover:text-indigo-600 hover:bg-white transition-all duration-500" >
        Inicio
        </Link>
      </div>
    </div>
  );
};
