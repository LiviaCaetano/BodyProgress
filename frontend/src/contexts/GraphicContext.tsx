import { createContext, ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getMeasures } from "../services/api";

export const GraphicContext = createContext({
  isLoading: false,
  handleGetData: () => {},
  graphicData: {} as any,
  showGraphic: false
})

export const GraphicProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [graphicData, setGraphicData] = useState<any>({} as any);
  const { person } = useSelector((state: any) => state?.auth)
  const [showGraphic, setShowGraphic] = useState<boolean>(false);

  const handleGetData = () => {
    setIsLoading(true)
    getMeasures(person?.id).then((response) => {
      const { measures } = response.data
      
      const data = measures?.reduce((result: any, item: any) => {
        Object?.entries(item)?.forEach(([key, value]) => {
            if (!['id', 'personId', 'measurementDate', 'createdAt']?.includes(key)) {
                result[key] = result[key] || [];
                if(result[key]?.length < 5) {
                  result[key]?.push({ value, measurementDate: item?.measurementDate});
                }
            }
        });
        return result;
      }, {});

      setGraphicData(data)
      setShowGraphic(measures?.length > 0)
    }).catch((error) => {
      console.error(error)
      toast.error("Erro ao buscar dados!")
    }).finally(() => setIsLoading(false));
  }
  
  const values = {
    isLoading,
    handleGetData,
    graphicData,
    showGraphic
  }

  return (
    <GraphicContext.Provider value={values}>
      {children}
    </GraphicContext.Provider>
  )
}