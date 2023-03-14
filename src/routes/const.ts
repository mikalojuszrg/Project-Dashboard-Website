import { AuthLayoutRoutes, MainLayoutRoutes } from "../types/route";

import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import MainLayout from "../layouts/MainLayout/MainLayout";

export const LOGIN_PATH = "/";

export const DASHBOARD_PATH = "/";

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [{ path: DASHBOARD_PATH, Component: Dashboard }],
};

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: AuthLayout,
  routes: [{ path: LOGIN_PATH, Component: Login }],
};
