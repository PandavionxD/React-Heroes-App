import { Outlet } from "react-router-dom"

export const PublicRouter = () => {
  return (
    <div className="container min-h-screen place-content-center grid text-center " >
    <Outlet/>
    </div>
    )
}
