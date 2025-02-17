import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BPIcon } from "../../assets/svgIcons/BPIcon";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { Authentication } from "../../models/authentication";
import { Button } from "../../ui/components/Button";
import { Input } from "../../ui/components/Input";
import { LoadingProgress } from "../../ui/components/LoadingProgress";
import "./styles.scss";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Authentication.Login>();

  const { handleLogin, isLoading } = useContext(AuthenticationContext);

  const onSubmit = (data: Authentication.Login) => {
    console.log(data);
  };

  return (
    <div className="login-page">
      <div className="login-page-form">
        <div className="login-page-icon">
          <BPIcon />
          <h1>BodyProgress</h1>
          <p>Acompanhe sua evolução, supere seus limites!</p>
        </div>
        <div className="login-page-fields">
          <Input.Root>
            <Input.Label text="Usuário" variant="light" />
            <Input.Field
              variant="white"
              placeholder="seu usuário..."
              {...register("username", { required: true })}
            />
            <Input.Error hasError={!!errors?.username} />
          </Input.Root>
          <Input.Root>
            <Input.Label text="Senha" variant="light" />
            <Input.Field
              variant="white"
              type="password"
              placeholder="******"
              {...register("password", { required: true })}
            />
            <Input.Error hasError={!!errors?.password} />
          </Input.Root>
          <Button
            text="Entrar"
            variant="secondary"
            onClick={() => handleSubmit(onSubmit)()}
          />
        </div>
      </div>
      {isLoading && <LoadingProgress />}
    </div>
  );
};
