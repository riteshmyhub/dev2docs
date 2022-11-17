import { Navigate, useRoutes } from "react-router-dom";
import Auth from "./app/auth/Auth";
import Docs from "./app/docs/Docs";
import { docsRoutes } from "./app/docs/docs.routes";
import Home from "./app/home/Home";
import NotFound from "./app/NotFound";

export default function Routing() {
   let routes = useRoutes([
      {
         path: "auth",
         element: <Auth />,
         caseSensitive: true,
         children: [
            { path: "", element: <Navigate to="login" replace /> },
            { path: "login", element: <p>login</p>, caseSensitive: true },
            { path: "register", element: <p>register</p>, caseSensitive: true },
         ],
      },
      {
         path: "/",
         element: <Home />,
         caseSensitive: true,
      },
      {
         path: "react",
         element: <Docs />,
         caseSensitive: true,
         children: docsRoutes,
      },
      {
         path: "*",
         element: <NotFound />,
         caseSensitive: true,
      },
   ]);
   return routes;
}
