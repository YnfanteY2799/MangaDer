import { ReactNode } from "react";

export type RouteChildren = {
  path: string;
  Element: Function;
  include?: boolean;
};

export type RoutingObject = {
  path: string;
  childrens?: Array<RouteChildren>;
  Element: Function;
};

export type LoginCreds = {
  userName: string;
  passWord: string;
  remember: boolean;
};

export type RequestResponse = {
  errorCode: number;
  error: string;
  critical: boolean;
};

export type NavbarRoute = {
  name:string;
  route:string;
}


export type NavbarPropTypes = {
  isTransparent?: boolean;
};
