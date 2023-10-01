import { Navigate, Outlet } from "react-router-dom";
import { UseUserContext } from "../context/HeroContext";

export const PublicRouter = () => {
  const { user } = UseUserContext();
  return (
    <>
      {!user ?
      (
        <div className="container min-h-screen place-content-center grid text-center ">
          <Outlet />
        </div>
      ):
      <Navigate to='/dc' />
      }
    </>
  );
};
