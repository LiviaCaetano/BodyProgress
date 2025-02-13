import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../src/assets/styles/styles.scss";
import { Routers } from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
);
