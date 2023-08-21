import { Link, NavLink } from "react-router-dom";
import { UseUserContext } from "../context/HeroContext";

export const Navbar = () => {
  const { setuser } = UseUserContext();

  return (
    <div className="h-12 w-full bg-indigo-600">
      <nav className=" text-gray-400  text-xl container  flex items-center h-full justify-between ">
        <div className="flex  gap-3">
          <NavLink
            className="hover:text-white transition-all duration-500 "
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            className="hover:text-white transition-all duration-500 "
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className="hover:text-white transition-all duration-500 "
            to="/search"
          >
            Buscar
          </NavLink>
        </div>
        <div className="flex gap-3">
          <span className="text-white">User</span>
          <Link
            className="hover:text-white transition-all duration-500 "
            onClick={() => setuser(false)}
          >
            Salir
          </Link>
        </div>
      </nav>
    </div>
  );
};
