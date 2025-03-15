import { useContext, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoAddCircleOutline, IoBody } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { ConfirmModal } from "../../components/ConfirmModal";
import { RegisterMeasureModal } from "../../components/RegisterMeasureModal";
import { ViewMeasureModal } from "../../components/ViewMeasureModal";
import { PersonContext } from "../../contexts/PersonContext";
import { Measure } from "../../models/measures";
import { Button } from "../../ui/components/Button";
import { EmptyList } from "../../ui/components/EmptyList";
import { LoadingProgress } from "../../ui/components/LoadingProgress";
import { Search } from "../../ui/components/Search";
import { Table } from "../../ui/components/Table";
import { Title } from "../../ui/components/Title";
import "./styles.scss";

export const MeasuresList = () => {
  const { getMeasuresList, measureList, deleteMeasure, isLoading } = useContext(PersonContext)
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showExcludeModal, setShowExcludeModal] = useState<boolean>(false);
  const [showViewMeasureModal, setShowViewMeasureModal] = useState<boolean>(false);
  const [measure, setMeasure] = useState<Measure.Return | any>({} as Measure.Return);
  const [measureId, setMeasureId] = useState<number>(0);
  const isMobile = window.innerWidth <= 480;

  useEffect(() => {
    getMeasuresList()
  }, [])

  const handleExcludeMeasure = () => {
    deleteMeasure(measureId, () => {
      setShowExcludeModal(false);
      getMeasuresList();
    })
  }

  return (
    <div className="measures-list">
      <Title text="Medidas" icon={<TbRulerMeasure size={25} />} />
      <div className="measures-list-header">
        <Search.Root>
          <Search.Field
            onSearch={(e) => console.log(e)}
            placeholder="Buscar medidas..."
          />
          <Search.Icon />
        </Search.Root>
        <Button
          text={isMobile ? "" : "Adicionar medida"}
          icon={<IoAddCircleOutline />}
          variant="primary"
          size={isMobile ? "lg" : "md"}
          onClick={() => setShowModal(true)}
        />
      </div>
      <div className="measures-list-table">
        {!!measureList?.length ?
          <Table data={[
              ...measureList?.sort((a: any, b: any) => b?.id - a?.id)?.map((measure: any, index) => {
                return {
                  ...measure,
                  icon: <IoBody color="green" size={20} />,
                  name: `Minha ${measureList?.length - index }ª medição`,
                  weigth: `${measure?.currentWeight} kg`,
                  createdAt: new Date(measure?.measurementDate)?.toLocaleDateString(),
                  action: <FaTrashAlt color="red" size={20} onClick={() => {
                    setMeasureId(measure?.id);
                    setShowExcludeModal(true);
                  }} />
                }
              })
            ]} columns={[
              {
                header: "",
                key: "icon",
                width: '5%'
              },
              {
                header: 'Nome',
                key: 'name',
                width: '30%'
              },
              {
                header: 'Peso atual',
                key: 'weigth',
                width: '30%'
              },
              {
                header: 'Data da medição',
                key: 'createdAt',
                width: '30%'
              },
              {
                header: "",
                key: 'action',
                width: '5%'
              }
            ]}
            onRowClicked={(e) => {
              console.log(e)
              setMeasure(e);
              setShowViewMeasureModal(true);
            }}
          />
        : <EmptyList text="Nenhuma medida encontrada..." />}
      </div>
      {showModal && (
        <RegisterMeasureModal onClose={() => setShowModal(false)} />
      )}
      {showExcludeModal && <ConfirmModal onCancel={() => {
        setMeasureId(0);
        setShowExcludeModal(false);
      }}
      onConfirm={() => handleExcludeMeasure()}
      text={`Deseja excluir a medida de ID: ${measureId}`}
      title="Exclusão de medida"
      />}
      {showViewMeasureModal && <ViewMeasureModal measure={measure} onClose={() => setShowViewMeasureModal(false)} />}
      {isLoading && <LoadingProgress />}
    </div>
  );
};
