import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import "../src/assets/styles/styles.scss";
import { AuthenticationProvider } from "./contexts/AuthenticationContext.tsx";
import { Routers } from "./routes/index.tsx";
import store, { persistor } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <AuthenticationProvider>
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
        </AuthenticationProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
