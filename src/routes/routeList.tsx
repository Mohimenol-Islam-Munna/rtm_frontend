import { RouteObject } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, NotFoundPage } from "../pages";

export const routeList: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
