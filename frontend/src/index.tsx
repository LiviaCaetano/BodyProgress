import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../src/assets/styles/styles.scss";
import { Routers } from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routers />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      closeButton={false}
    />
  </BrowserRouter>
);
