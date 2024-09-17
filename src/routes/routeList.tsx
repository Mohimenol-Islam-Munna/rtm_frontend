import { RouteObject } from "react-router-dom";
import { SignInPage, SignUpPage, NotFoundPage, ChatPage } from "../pages";
import { MainLayout } from "../components/Layout/MainLayout";
import { UserPage } from "../pages/UserPage";
import { GroupsPage } from "../pages/GroupsPage";
import ChatLayout from "../components/Layout/ChatLayout";
import { NoChatViewPage } from "../pages/NoChatViewPage";
import UsersLayout from "../components/Layout/UsersLayout";
import { NoUserViewPage } from "../pages/NoUserViewPage";
import { NoGroupViewPage } from "../pages/NoGroupViewPage";
import GroupLayout from "../components/Layout/GroupLayout";
import { CreateGroupPage } from "../pages/CreateGroupPage";

export const routeList: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "users",
        element: <UsersLayout />,
        children: [
          {
            index: true,
            element: <NoUserViewPage />,
          },
          {
            path: ":id",
            element: <UserPage />,
          },
        ],
      },
      {
        path: "groups",
        element: <GroupLayout />,
        children: [
          {
            index: true,
            element: <NoGroupViewPage />,
          },
          {
            path: "create",
            element: <CreateGroupPage />,
          },
          {
            path: ":id",
            element: <GroupsPage />,
          },
        ],
      },
      {
        path: "/",
        element: <ChatLayout />,
        children: [
          {
            index: true,
            element: <NoChatViewPage />,
          },
          {
            path: ":id",
            element: <ChatPage />,
          },
        ],
      },
    ],
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
