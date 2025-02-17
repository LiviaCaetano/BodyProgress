import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { RegisterMeasureModal } from "../../components/RegisterMeasureModal";
import { Button } from "../../ui/components/Button";
import { Search } from "../../ui/components/Search";
import { Title } from "../../ui/components/Title";
import "./styles.scss";

export const MeasuresList = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const isMobile = window.innerWidth <= 480;

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
      {showModal && (
        <RegisterMeasureModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};
