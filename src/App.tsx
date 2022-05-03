import PagesList from "./pages/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import { ReactNode } from "react";

export default function App(): JSX.Element {
  const PagesRedenring: ReactNode[] = PagesList.map(
    ({ path, Element, childrens = [] }, index) => {
      return childrens.length ? (
        <Route path={path} element={<Element />} key={index}>
          {childrens.map(
            ({ path: childPath, Element: ChildElement, include }, childIndex) =>
              !include && (
                <Route
                  path={childPath}
                  element={<ChildElement />}
                  key={childIndex}
                />
              )
          )}
        </Route>
      ) : (
        <Route path={path} element={<Element />} key={index} />
      );
    }
  );

  return (
    <BrowserRouter>
      <Routes>{PagesRedenring}</Routes>
    </BrowserRouter>
  );
}
