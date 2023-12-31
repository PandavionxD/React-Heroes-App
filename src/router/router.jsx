import { createBrowserRouter } from "react-router-dom";
import { PublicRouter, PrivateRouter } from "../layout";
import { ErrorPage } from "../pages/ErrorPage";

import { LoginPage } from "../public/pages/LoginPage";

import { MarvelPage, SearchPage, DcPage, HeroIdPage } from "../private/pages";


export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRouter />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index:true,
            element: <LoginPage/>,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRouter />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/marvel",
            element: <MarvelPage />,
          },
          {
            path:'/hero/:id',
            element: <HeroIdPage />,
          },
          {
            path: "/dc",
            element: <DcPage />,
          },
          {
            path: "/search",
            element: <SearchPage />,
          },
        ],
      },
    ],
  },
]);
