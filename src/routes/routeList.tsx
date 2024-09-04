import { RouteObject } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, NotFoundPage } from "../pages";

export type ExtendedRouteObject = RouteObject & {
  access: string[];
};

export const routeList: ExtendedRouteObject[] = [
  {
    path: "/",
    access: [],
    loader: (): any => {
      console.log("loader function :");
      return 0;
    },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/kola",
        element: "<HomePage />",
      },
    ],
  },
  {
    path: "/sign-in",
    access: [],
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    access: [],
    element: <SignUpPage />,
  },
  {
    path: "*",
    access: [],
    element: <NotFoundPage />,
  },
];
