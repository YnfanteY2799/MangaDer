import { ReactNode } from "react";

export type RouteChildren = {
  path: string;
  Element: ReactNode;
};

export type RoutingObject = {
  path: string;
  childrens?: Array<RouteChildren>;
  Element: ReactNode;
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
