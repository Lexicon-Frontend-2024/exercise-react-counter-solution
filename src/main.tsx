import "./css/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components";

// The purpose of the main.tsx is just to mount our root component. Which is the App in this case.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
