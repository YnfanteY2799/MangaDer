import { RoutingObject, RouteChildren } from "../types/types";
import Home from "../pages/Home/Home";
import Login from "./Login/Login";
import Settings from "./Settings/Settings";



const homePageChildrends : RouteChildren[] = [
  {path:"/Settings", Element: Settings()}
]


const PagesList: RoutingObject[] = [
  { path: "/", Element: Home(), childrens: homePageChildrends },
  {path: "/Login", Element: Login()}
  
];

export default PagesList;
