import { useRoutes } from "react-router-dom";
import { lazyLoadRoutes } from "./LazyLoadRoutes";

export function RouterElement() {
  const routes = [
    {
      path: "/",
      name: "Home",
      element: lazyLoadRoutes("Home"),
    },
    {
      path: "/program",
      name: "Program",
      element: lazyLoadRoutes("Program"),
    },
    {
      path: "/info",
      name: "Praktisk Info",
      element: lazyLoadRoutes("Info"),
    },
    {
      path: "/utstillere",
      name: "Utstillere",
      element: lazyLoadRoutes("Utstillere"),
    },
    {
      path: "/pamelding",
      name: "Påmelding",
      element: lazyLoadRoutes("SignUp"),
    },
  ];

  return useRoutes(routes);
}
