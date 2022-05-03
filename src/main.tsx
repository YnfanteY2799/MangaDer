import { createRoot } from "react-dom/client";
import App from "./App";

const documentFalse: DocumentFragment | HTMLDivElement =
  document.createElement("div");
documentFalse.setAttribute("root", "Div1");

const container: HTMLElement | DocumentFragment =
  document.getElementById("root") ?? documentFalse;
createRoot(container).render(<App />);
