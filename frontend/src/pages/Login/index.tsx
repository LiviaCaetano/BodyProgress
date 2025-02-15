import { useForm } from "react-hook-form";
import { BPIcon } from "../../assets/svgIcons/BPIcon";
import { Button } from "../../shared/components/Button";
import { Input } from "../../shared/components/Input";
import "./styles.scss";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="login-page">
      <div className="login-page-form">
        <div className="login-page-icon">
          <BPIcon />
          <h1>
            BodyProgress <br />
            Acompanhe sua evolução, supere seus limites!
          </h1>
        </div>
        <div className="login-page-fields">
          <Input.Root>
            <Input.Label text="Usuário" variant="light" />
            <Input.Field
              placeholder="seu usuário..."
              {...register("user", { required: true })}
            />
            <Input.Error hasError={!!errors?.user} />
          </Input.Root>
          <Input.Root>
            <Input.Label text="Senha" variant="light" />
            <Input.Field
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
    </div>
  );
};
