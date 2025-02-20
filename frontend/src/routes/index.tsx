import { Route, Routes } from "react-router-dom";
import { PersonProvider } from "../contexts/PersonContext";
import { Home } from "../pages/Home";
import { IMCPage } from "../pages/IMCPage";
import { LoginPage } from "../pages/Login";
import { MeasuresList } from "../pages/MeasuresList";
import { RegisterPerson } from "../pages/RegisterPerson";
import { DefaultLayout } from "../ui/components/DefaultLayout";
import { PrivateRoute } from "../ui/components/PrivateRoute";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPerson />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DefaultLayout.Root>
              <DefaultLayout.Navbar />
              <DefaultLayout.Header />
              <DefaultLayout.Container>
                <Home />
              </DefaultLayout.Container>
            </DefaultLayout.Root>
          </PrivateRoute>
        }
      />
      <Route
        path="/measures"
        element={
          <PrivateRoute>
            <DefaultLayout.Root>
              <DefaultLayout.Navbar />
              <DefaultLayout.Header />
              <DefaultLayout.Container>
                <MeasuresList />
              </DefaultLayout.Container>
            </DefaultLayout.Root>
          </PrivateRoute>
        }
      />
      <Route
        path="/imc"
        element={
          <PrivateRoute>
            <DefaultLayout.Root>
              <DefaultLayout.Navbar />
              <DefaultLayout.Header />
              <DefaultLayout.Container>
                <PersonProvider>
                  <IMCPage />
                </PersonProvider>
              </DefaultLayout.Container>
            </DefaultLayout.Root>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
