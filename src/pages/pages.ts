import { RoutingObject, RouteChildren } from "../types/types";
import Home from "../pages/Home/Home";
import Login from "./Login/Login";
import Settings from "./Settings/Settings";
import IndexingHome from "./Home/IndexingHome";
import Search from "./Search/Search";

export const HomeChildrends: Array<RouteChildren> = [
  { path: "Login", Element: Login },
  { path: "Settings", Element: Settings },
  { path: "Home", Element: IndexingHome, include: false },
  { path: "Search", Element: Search },
];

const PagesList: RoutingObject[] = [
  { path: "/", Element: Home, childrens: HomeChildrends },
  { path: "*", Element: IndexingHome },
];

export default PagesList;
