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
      name: "Info",
      element: lazyLoadRoutes("Info"),
    },
    {
      path: "/foredrag",
      name: "Foredrag",
      element: lazyLoadRoutes("Foredrag"),
    },
    {
      path: "/pamelding",
      name: "Påmelding",
      element: lazyLoadRoutes("SignUp"),
    },
  ];

  return useRoutes(routes);
}
