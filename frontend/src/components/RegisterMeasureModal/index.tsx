import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { PersonContext } from "../../contexts/PersonContext";
import { Measure } from "../../models/measures";
import { Button } from "../../ui/components/Button";
import { Input } from "../../ui/components/Input";
import { Modal } from "../../ui/components/Modal";
import "./styles.scss";

type RegisterMeasureModalProps = {
  onClose: () => void;
};

export const RegisterMeasureModal = ({
  onClose,
}: RegisterMeasureModalProps) => {
  const { createMeasure, getMeasuresList } = useContext(PersonContext);
  const { person } = useContext(AuthenticationContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Measure.Register>();

  const onSubmit = (data: Omit<Measure.Register, "measurementDate">) => {
    createMeasure({ measurementDate: new Date(), personId: person?.id, ...data }, () => {
      onClose()
      getMeasuresList()
    });
  };

  return (
    <Modal.Root>
      <Modal.Header onClose={() => onClose()} title="Adicionar medida" />
      <Modal.Body>
        <div className="register-measure-modal">
          <div className="register-measure-modal-line">
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Braço direito relaxado" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("relaxedArmR", { required: true })}
                />
                <Input.Error hasError={!!errors?.relaxedArmR} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Braço esquerdo relaxado" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("relaxedArmL", { required: true })}
                />
                <Input.Error hasError={!!errors?.relaxedArmL} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Braço direito contraído" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("contractedArmR", { required: true })}
                />
                <Input.Error hasError={!!errors?.contractedArmR} />
              </Input.Root>
            </div>
          </div>
          <div className="register-measure-modal-line">
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Braço esquerdo contraído" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("contractedArmL", { required: true })}
                />
                <Input.Error hasError={!!errors?.contractedArmL} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Antebraço direito" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("foreArmR", { required: true })}
                />
                <Input.Error hasError={!!errors?.foreArmR} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Antebraço esquerdo " variant="solid" />
                <Input.Field
                  type="number"
                  {...register("foreArmL", { required: true })}
                />
                <Input.Error hasError={!!errors?.foreArmL} />
              </Input.Root>
            </div>
          </div>
          <div className="register-measure-modal-line">
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Coxa direita" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("haunchR", { required: true })}
                />
                <Input.Error hasError={!!errors?.haunchR} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Coxa esquerda" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("haunchL", { required: true })}
                />
                <Input.Error hasError={!!errors?.haunchL} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Panturrilha direita" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("calfR", { required: true })}
                />
                <Input.Error hasError={!!errors?.calfR} />
              </Input.Root>
            </div>
          </div>
          <div className="register-measure-modal-line">
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Panturrilha esquerda" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("calfL", { required: true })}
                />
                <Input.Error hasError={!!errors?.calfL} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Peitoral relaxado" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("relaxedChest", { required: true })}
                />
                <Input.Error hasError={!!errors?.relaxedChest} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Peitoral contraido" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("contractedChest", { required: true })}
                />
                <Input.Error hasError={!!errors?.contractedChest} />
              </Input.Root>
            </div>
          </div>
          <div className="register-measure-modal-line">
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Cintura" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("hip", { required: true })}
                />
                <Input.Error hasError={!!errors?.hip} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Abdomen" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("abdomen", { required: true })}
                />
                <Input.Error hasError={!!errors?.abdomen} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Quadril" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("waist", { required: true })}
                />
                <Input.Error hasError={!!errors?.waist} />
              </Input.Root>
            </div>
          </div>
          <div className="register-measure-modal-line">
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Ombro" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("shoulder", { required: true })}
                />
                <Input.Error hasError={!!errors?.shoulder} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item">
              <Input.Root>
                <Input.Label text="Peso atual" variant="solid" />
                <Input.Field
                  type="number"
                  {...register("currentWeight", { required: true })}
                />
                <Input.Error hasError={!!errors?.currentWeight} />
              </Input.Root>
            </div>
            <div className="register-measure-modal-item"></div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Actions>
        <div className="register-measure-modal-actions">
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
    </Modal.Root>
  );
};
