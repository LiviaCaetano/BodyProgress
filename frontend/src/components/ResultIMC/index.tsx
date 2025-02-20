import { IMC } from "../../models/imc";
import "./styles.scss";

type ResultImcProps = {
  info: IMC.Result;
};

export const ResultIMC = ({ info }: ResultImcProps) => {
  return (
    <div className="result-imc">
      <div className="result-imc-image">
        <img src={info?.img} alt="body" />
      </div>
      <div className="result-imc-infos">
        <span>Seu IMC é: </span>
        <h1>{info?.result?.toFixed(2)}</h1>
        <h3>{info?.title}</h3>
        <p>{info?.description}</p>
      </div>
    </div>
  );
};
