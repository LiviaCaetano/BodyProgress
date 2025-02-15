import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { MeasuresList } from "../pages/MeasuresList";
import { RegisterPerson } from "../pages/RegisterPerson";
import { DefaultLayout } from "../shared/components/DefaultLayout";
import { PrivateRoute } from "../shared/components/PrivateRoute";

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
    </Routes>
  );
};
