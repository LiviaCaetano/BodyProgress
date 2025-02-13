import { createContext, ReactNode, useState } from "react";

export const PersonContext = createContext({
  isLoading: false,
  createPerson: () => {},
  createMeasure: () => {},
});

export const PersonProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreatePerson = () => {};

  const handleCreateMeasure = () => {};

  const value = {
    isLoading,
    createPerson: handleCreatePerson,
    createMeasure: handleCreateMeasure,
  };

  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
};
