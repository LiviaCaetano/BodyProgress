import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { Measure } from "../models/measures";
import { Person } from "../models/person";
import { createMeasure } from "../services/api";

export const PersonContext = createContext<Person.Context>({
  isLoading: false,
  createMeasure: (data: Measure.Register, callback: () => void) => {},
  measureList: [] as Measure.List[],
});

export const PersonProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [measureList, setMeasureList] = useState<Measure.List[]>(
    [] as Measure.List[]
  );

  const handleCreateMeasure = (
    data: Measure.Register,
    callback: () => void
  ) => {
    setIsLoading(true);
    createMeasure(data)
      .then(() => {
        toast.success("Medida adicionada com sucesso!");
        callback();
      })
      .catch(() => toast.error("Erro ao adicionar medida!"))
      .finally(() => setIsLoading(false));
  };

  const value = {
    isLoading,
    createMeasure: handleCreateMeasure,
    measureList,
  };

  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
};
