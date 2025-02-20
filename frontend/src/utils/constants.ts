import f1 from "../assets/images/imc/f1.png";
import f2 from "../assets/images/imc/f2.png";
import f3 from "../assets/images/imc/f3.png";
import f4 from "../assets/images/imc/f4.png";
import f5 from "../assets/images/imc/f5.png";
import f6 from "../assets/images/imc/f6.png";
import m1 from "../assets/images/imc/m1.png";
import m2 from "../assets/images/imc/m2.png";
import m3 from "../assets/images/imc/m3.png";
import m4 from "../assets/images/imc/m4.png";
import m5 from "../assets/images/imc/m5.png";
import m6 from "../assets/images/imc/m6.png";
import { IMC } from "../models/imc";

export const optionsIMC = (data: IMC.Params) => {
  return [
  {
    value: 18.5,
    title: "Abaixo do normal",
    description:
      "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.",
    img: data?.gender === "F" ? f1 : m1,
  },
  {
    value: 24.9,
    title: "Normal",
    description:
      "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.",
    img: data?.gender === "F" ? f2 : m2,
  },
  {
    value: 29.9,
    title: "Sobrepeso",
    description:
      "Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.",
    img: data?.gender === "F" ? f3 : m3,
  },
  {
    value: 34.9,
    title: "Obesidade grau I",
    description:
      "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.",
    img: data?.gender === "F" ? f4 : m4,
  },
  {
    value: 39.5,
    title: "Obesidade grau II",
    description:
      "Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.",
    img: data?.gender === "F" ? f5 : m5,
  },
  {
    value: Infinity,
    title: "Obesidade grau III",
    description:
      "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.",
    img: data?.gender === "F" ? f6 : m6,
  },
]};