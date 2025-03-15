import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { BPIcon } from "../../assets/svgIcons/BPIcon";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { Person } from "../../models/person";
import { Button } from "../../ui/components/Button";
import { Input } from "../../ui/components/Input";
import { LoadingProgress } from "../../ui/components/LoadingProgress";
import { Select } from "../../ui/components/Select";
import "./styles.scss";

export const RegisterPerson = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Person.Register>();

  const { registerPerson, isLoading } = useContext(AuthenticationContext);
  const { isLogged } = useSelector((state: any) => state?.auth)

  const onSubmit = (data: Person.Register) => {
    registerPerson(data);
  };

  return !isLogged ? (
    <div className="register-person">
      <div className="register-person-form">
        <div className="register-person-icon">
          <BPIcon height="120" width="120" />
          <h1>BodyProgress</h1>
          <p>Acompanhe sua evolução, supere seus limites!</p>
        </div>
        <div className="register-person-line">
          <div className="register-person-item">
            <Input.Root>
              <Input.Label text="Nome" variant="light" />
              <Input.Field
                variant="white"
                placeholder="seu nome..."
                {...register("name", { required: true })}
              />
              <Input.Error hasError={!!errors?.name} />
            </Input.Root>
          </div>
          <div className="register-person-item">
            <Input.Root>
              <Input.Label text="Data de nascimento" variant="light" />
              <Input.Field
                variant="white"
                type="date"
                placeholder="sua data de nascimento..."
                {...register("dateOfBirth", { required: true })}
              />
              <Input.Error hasError={!!errors?.dateOfBirth} />
            </Input.Root>
          </div>
        </div>
        <div className="register-person-line">
          <div className="register-person-item">
            <Input.Root>
              <Input.Label text="Altura" variant="light" />
              <Input.Field
                variant="white"
                type="number"
                placeholder="sua altura..."
                {...register("height", { required: true })}
              />
              <Input.Error hasError={!!errors?.height} />
            </Input.Root>
          </div>
          <div className="register-person-item">
            <Select
              variant="light"
              label="Gênero"
              hasError={!!errors?.gender}
              options={[
                { value: "F", label: "Feminino" },
                { value: "M", label: "Masculino" },
              ]}
              {...register("gender", { required: true })}
            />
          </div>
        </div>
        <div className="register-person-line">
          <div className="register-person-item">
            <Input.Root>
              <Input.Label text="Username" variant="light" />
              <Input.Field
                variant="white"
                placeholder="seu username..."
                {...register("username", { required: true })}
              />
              <Input.Error hasError={!!errors?.username} />
            </Input.Root>
          </div>
          <div className="register-person-item">
            <Input.Root>
              <Input.Label text="Senha" variant="light" />
              <Input.Field
                variant="white"
                type="password"
                placeholder="******"
                {...register("passwordHash", { required: true })}
              />
              <Input.Error hasError={!!errors?.passwordHash} />
            </Input.Root>
          </div>
        </div>

        <Button
          text="Cadastrar"
          variant="secondary"
          onClick={() => handleSubmit(onSubmit)()}
        />
      </div>
      {isLoading && <LoadingProgress />}
    </div>
  ) : <Navigate to={'/'} />;
};
