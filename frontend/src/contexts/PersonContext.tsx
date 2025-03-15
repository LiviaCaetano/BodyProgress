import { createContext, ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { IMC } from "../models/imc";
import { Measure } from "../models/measures";
import { Person } from "../models/person";
import { createMeasure, excludeMeasureById, getMeasures } from "../services/api";
import { optionsIMC } from "../utils/constants";

export const PersonContext = createContext<Person.Context>({
  isLoading: false,
  createMeasure: (data: Measure.Register, callback: () => void) => {},
  getMeasuresList: () => {},
  measureList: [] as Measure.List[],
  deleteMeasure: (id: number, callback: () => void) => {},
  calcIMC: (data: IMC.Params) => {},
  imcResult: {} as IMC.Result | undefined,
});

export const PersonProvider = ({ children }: { children: ReactNode }) => {
  const { id } = useSelector((state: any) => state.auth.person)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [measureList, setMeasureList] = useState<Measure.List[]>(
    [] as Measure.List[]
  );
  const [imcResult, setIMCResult] = useState<IMC.Result | undefined>(
    {} as IMC.Result
  );

  //Measures
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

  const getMeasuresList = () => {
    setIsLoading(true)
    getMeasures(id).then((response) => setMeasureList(response?.data?.measures)).catch((error) => {
      console.error(error)
      toast.error("Erro ao buscar medidas!")
    }).finally(() => setIsLoading(false));
  }

  const handleDeleteMeasure = (id: number, callback: () => void) => {
    setIsLoading(true);
    excludeMeasureById(id).then(() => {
      toast.success("Medida excluída com sucesso!");
      callback();
    }).catch((error) => {
      toast.error("Erro ao excluir medida!");
      console.error(error);
    }).finally(() => setIsLoading(false));
  }

  //IMC
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
    getMeasuresList,
    deleteMeasure: handleDeleteMeasure,
    measureList,
    calcIMC: handleCalcIMC,
    imcResult,
  };

  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
};
