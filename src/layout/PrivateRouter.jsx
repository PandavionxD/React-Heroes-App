import { Navigate, Outlet } from "react-router-dom";
import { UseUserContext } from "../context/HeroContext";
import { Footer, Navbar } from "../components";

export const PrivateRouter = () => {
  
  const {user} = UseUserContext()

  return (
    <>
      <Navbar/>
    {
      user ? <Outlet /> : <Navigate to="/login" />
    }
    <Footer/>
    </>
  );
};
