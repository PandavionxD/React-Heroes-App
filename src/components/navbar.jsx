import { Link, NavLink } from "react-router-dom";
import { UseUserContext } from "../context/HeroContext";

export const Navbar = () => {
  const { setuser } = UseUserContext();

  return (
    <nav>
      <NavLink to="/">Marvel</NavLink>
      <NavLink to="/dc">DC</NavLink>
      <NavLink to="/search">Buscar</NavLink>
      <span>User</span>
      <Link onClick={() => setuser(false)} to="/login">
        
        Salir
      </Link>
    </nav>
  );
};
