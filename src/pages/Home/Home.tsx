import { ReactNode } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function Home(): JSX.Element {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar/>
      <Outlet/>
      {pathname === "/" && <Navigate to="/Home"/>}
    </>
  );
}
