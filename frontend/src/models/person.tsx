import { IMC } from "./imc";
import { Measure } from "./measures";

export namespace Person {
  export type Register = {
    name: string;
    username: string;
    password: string;
    gender: string;
    height: number;
    dateOfBirth: Date;
  };

  export type Context = {
    isLoading: boolean;
    createMeasure: (data: Measure.Register, callback: () => void) => void;
    measureList: Measure.List[];
    calcIMC: (data: IMC.Params) => void;
    imcResult: IMC.Result | undefined;
  };
}
