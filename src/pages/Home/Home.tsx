import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}
