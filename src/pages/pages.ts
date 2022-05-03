import { RoutingObject, RouteChildren, NavbarRoute } from "../types/types";
import Home from "../pages/Home/Home";
import Login from "./Login/Login";
import Settings from "./Settings/Settings";

export const HomeChildrends: Array<RouteChildren> = [
  { path: "Home", Element: Home, include: false },
  { path: "Login", Element: Login },
  { path: "Settings", Element: Settings },
];

const PagesList: RoutingObject[] = [
  { path: "/", Element: Home, childrens: HomeChildrends },
  { path: "*", Element: Home },
];

export default PagesList;
