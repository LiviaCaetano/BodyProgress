import { Route, Routes } from "react-router-dom";
import { SelectPerson } from "../pages/SelectPerson";
import { DefaultLayout } from "../shared/components/DefaultLayout";

export const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout.Root>
            <DefaultLayout.Navbar />
            <DefaultLayout.Header />
            <DefaultLayout.Container>
              <SelectPerson />
            </DefaultLayout.Container>
          </DefaultLayout.Root>
        }
      />
    </Routes>
  );
};
