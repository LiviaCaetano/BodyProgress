import { useState } from "react";
import { TbRulerMeasure } from "react-icons/tb";
import { Button } from "../../shared/components/Button";
import { Search } from "../../shared/components/Search";
import { Title } from "../../shared/components/Title";
import "./styles.scss";

export const MeasuresList = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="measures-list">
      <Title text="Medidas" icon={<TbRulerMeasure size={25} />} />
      <div className="measures-list-header">
        <Search
          onSearch={(e) => console.log(e)}
          placeholder="Buscar medidas..."
        />
        <Button
          text="Adicionar medida"
          variant="primary"
          onClick={() => setShowModal(true)}
        />
      </div>
    </div>
  );
};
