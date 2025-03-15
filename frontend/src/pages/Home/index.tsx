import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { FaHome } from "react-icons/fa";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { GraphicContext } from "../../contexts/GraphicContext";
import { EmptyList } from "../../ui/components/EmptyList";
import { LoadingProgress } from "../../ui/components/LoadingProgress";
import { Title as MyTitle } from "../../ui/components/Title";
import "./styles.scss";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Home = () => {
  const { graphicData, handleGetData, isLoading, showGraphic } = useContext(GraphicContext);
  const { person } = useContext(AuthenticationContext)

  useEffect(() => {
    handleGetData();
  }, []);

  const colors = ["#1565C0", "#64B5F6", "#81C784", "#D32F2F", "#FFA726"];

  const generateChartData = (data: any, label: any, metric: string) => ({
    labels: data?.map((measure: any) =>
      `${measure?.value}${metric}`
    ),
    datasets: [{
      label,
      data: data?.map((measure: any) => measure?.value),
      backgroundColor: colors,
    }],
  });

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const chartConfigs = [
    { key: "hip", label: "Quadril" },
    { key: "abdomen", label: "Abdomen" },
    { key: "waist", label: "Cintura" },
    { key: "shoulder", label: "Ombro" },
    { key: "contractedChest", label: "Peitoral contraído" },
    { key: "relaxedChest", label: "Peitoral relaxado" },
    { key: "relaxedArmL", label: "Braço relaxado esquerdo" },
    { key: "relaxedArmR", label: "Braço relaxado direito" },
    { key: "contractedArmL", label: "Braço contraído esquerdo" },
    { key: "contractedArmR", label: "Braço contraído direito" },
    { key: "foreArmL", label: "Antebraço esquerdo" },
    { key: "foreArmR", label: "Antebraço direito" },
    { key: "haunchL", label: "Coxa esquerda" },
    { key: "haunchR", label: "Coxa direita" },
    { key: "calfL", label: "Panturrilha esquerda" },
    { key: "calfR", label: "Panturrilha direita" },
    { key: "currentWeight", label: "Peso atual" },
  ];

  return (
    <div className="home-page">
      <MyTitle text="Home" icon={<FaHome size={25} />} />
      <p>Olá, {person?.name?.split(' ')[0]}! Analise melhor seus resultados separadamente abaixo...</p>
      {showGraphic ? <div className="home-page-content">
        {chartConfigs?.map((item, index) => (
          <div className="home-page-graphic" key={index}>
            <Bar 
              data={generateChartData(graphicData?.[item?.key], item?.label, index === (chartConfigs?.length - 1) ? 'kg' : 'cm')} 
              options={options} 
            />
          </div>
        ))}
      </div> : 
      <div className="home-page-empty">
        <EmptyList text="Nenhuma medida encontrada..." />
      </div>}
      {isLoading && <LoadingProgress />}
    </div>
  );
};
