import { IMC } from "./imc";
import { Measure } from "./measures";

export namespace Person {
  export type Register = {
    name: string;
    username: string;
    passwordHash: string;
    gender: string;
    height: number;
    dateOfBirth: Date;
  };

  export type Store = {
    id: number;
    name: string;
    username: string;
    gender: string;
    height: number;
  };

  export type Context = {
    isLoading: boolean;
    createMeasure: (data: Measure.Register, callback: () => void) => void;
    getMeasuresList: () => void;
    measureList: Measure.List[];
    deleteMeasure: (id: number, callback: () => void) => void;
    calcIMC: (data: IMC.Params) => void;
    imcResult: IMC.Result | undefined;
  };
}
