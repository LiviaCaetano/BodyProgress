import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Person } from "../../models/person";
import { Button } from "../../ui/components/Button";
import { Input } from "../../ui/components/Input";
import { LoadingProgress } from "../../ui/components/LoadingProgress";
import { Modal } from "../../ui/components/Modal";
import { Select } from "../../ui/components/Select";
import { AuthenticationContext } from "./../../contexts/AuthenticationContext";
import "./styles.scss";

type ManagePersonModalProps = {
  onClose: () => void;
};

export const ManagePersonModal = ({ onClose }: ManagePersonModalProps) => {
  const { person, handleUpdatePerson, isLoading } = useContext(AuthenticationContext);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Person.Store>({
    defaultValues: {
      id: person?.id,
      name: person?.name,
      username: person?.username,
      height: person?.height,
      gender: person?.gender,
    },
  });

  const onSubmit = (data: Person.Store) => {
    handleUpdatePerson(data, () => onClose());
  };

  return (
    <Modal.Root>
      <Modal.Header onClose={() => onClose()} title="Editar usuário" />
      <Modal.Body>
        <div className="manage-person-modal">
          <Input.Root>
            <Input.Label text="Nome" variant="solid" />
            <Input.Field
              defaultValue={getValues("name")}
              {...register("name", {
                required: { value: true, message: "**Campo obrigatório" },
              })}
            />
            <Input.Error
              hasError={!!errors?.name}
              message={errors?.name?.message}
            />
          </Input.Root>
          <Input.Root>
            <Input.Label text="Usuário" variant="solid" />
            <Input.Field
              defaultValue={getValues("username")}
              {...register("username", {
                required: { value: true, message: "**Campo obrigatório" },
              })}
            />
            <Input.Error
              hasError={!!errors?.username}
              message={errors?.username?.message}
            />
          </Input.Root>
          <Input.Root>
            <Input.Label text="Altura" variant="solid" />
            <Input.Field
              defaultValue={getValues("height")}
              {...register("height", {
                required: { value: true, message: "**Campo obrigatório" },
              })}
            />
            <Input.Error
              hasError={!!errors?.height}
              message={errors?.height?.message}
            />
          </Input.Root>
          <Select
            label="Gênero"
            variant="solid"
            defaultValue={getValues("gender")}
            options={[
              { value: "F", label: "Feminino" },
              { value: "M", label: "Masculino" },
            ]}
            {...register("gender", { required: true })}
            hasError={!!errors?.gender}
          />
        </div>
      </Modal.Body>
      <Modal.Actions>
        <div className="manage-person-modal-actions">
          <Button
            text="Salvar"
            variant="primary"
            onClick={() => handleSubmit(onSubmit)()}
          />
          <Button
            text="Cancelar"
            variant="secondary"
            onClick={() => onClose()}
          />
        </div>
      </Modal.Actions>
      {isLoading && <LoadingProgress />}
    </Modal.Root>
  );
};
