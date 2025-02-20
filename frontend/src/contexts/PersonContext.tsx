import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { IMC } from "../models/imc";
import { Measure } from "../models/measures";
import { Person } from "../models/person";
import { createMeasure } from "../services/api";
import { optionsIMC } from "../utils/constants";

export const PersonContext = createContext<Person.Context>({
  isLoading: false,
  createMeasure: (data: Measure.Register, callback: () => void) => {},
  measureList: [] as Measure.List[],
  calcIMC: (data: IMC.Params) => {},
  imcResult: {} as IMC.Result | undefined,
});

export const PersonProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [measureList, setMeasureList] = useState<Measure.List[]>(
    [] as Measure.List[]
  );
  const [imcResult, setIMCResult] = useState<IMC.Result | undefined>(
    {} as IMC.Result
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

  const handleCalcIMC = (data: IMC.Params) => {
    setIsLoading(true);

    const result = data?.weight / (data?.height * data?.height);

    const imc = optionsIMC(data)?.find(
      (option: IMC.Result) => result <= option?.value
    );

    setIMCResult({ result, ...imc } as IMC.Result);
    setIsLoading(false);
  };

  const value = {
    isLoading,
    createMeasure: handleCreateMeasure,
    measureList,
    calcIMC: handleCalcIMC,
    imcResult,
  };

  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
};
