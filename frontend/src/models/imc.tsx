export namespace IMC {
  export type Params = {
    height: number;
    weight: number;
    gender: string;
  };

  export type Result = {
    result?: number;
    value: number;
    title: string;
    description: string;
    img: string;
  };
}
