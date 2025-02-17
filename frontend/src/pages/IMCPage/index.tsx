import { useForm } from "react-hook-form";
import { TfiDashboard } from "react-icons/tfi";
import { IMC } from "../../models/imc";
import { Button } from "../../ui/components/Button";
import { Divider } from "../../ui/components/Divider";
import { Input } from "../../ui/components/Input";
import { Select } from "../../ui/components/Select";
import { Title } from "../../ui/components/Title";
import "./styles.scss";

export const IMCPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IMC.Data>();

  const options = [
    { value: "F", label: "Feminino" },
    { value: "M", label: "Masculino" },
  ];

  const onSubmit = (data: IMC.Data) => {
    console.log(data);
  };

  return (
    <div className="imc-page">
      <Title text="Calcular IMC" icon={<TfiDashboard size={30} />} />
      <p>
        IMC é a sigla para Índice de Massa Corporal, uma fórmula que calcula o
        peso ideal de uma pessoa. É uma das formas de avaliação corporal
        recomendadas pela Organização Mundial da Saúde (OMS).{" "}
      </p>
      <div className="imc-page-form">
        <Input.Root>
          <Input.Label text="Peso" variant="solid" />
          <Input.Field {...register("weight", { required: true })} />
          <Input.Error hasError={!!errors?.weight} />
        </Input.Root>
        <Input.Root>
          <Input.Label text="Altura" variant="solid" />
          <Input.Field {...register("height", { required: true })} />
          <Input.Error hasError={!!errors?.height} />
        </Input.Root>
        <Select
          variant="solid"
          options={options}
          label="Gênero"
          {...register("gender", { required: true })}
          hasError={!!errors?.gender}
        />
      </div>
      <div className="imc-page-actions">
        <Button
          text="Calcular"
          variant="primary"
          onClick={() => handleSubmit(onSubmit)()}
        />
      </div>
      <Divider text="Resultado" />
    </div>
  );
};
