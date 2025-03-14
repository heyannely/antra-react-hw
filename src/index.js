import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import CustomHooksStorage from "./CustomHooksStorage.jsx";
import TeslaClientHw from "./TeslaClientHw.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CustomHooksStorage />
    <TeslaClientHw />
  </StrictMode>
);
