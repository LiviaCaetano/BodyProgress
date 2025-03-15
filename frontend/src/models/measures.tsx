export namespace Measure {
  export type Register = {
    personId?: number;
    measurementDate: Date;
    relaxedArmL: number;
    relaxedArmR: number;
    contractedArmL: number;
    contractedArmR: number;
    foreArmL: number;
    foreArmR: number;
    haunchL: number;
    haunchR: number;
    calfL: number;
    calfR: number;
    relaxedChest: number;
    contractedChest: number;
    waist: number;
    abdomen: number;
    hip: number;
    shoulder: number;
    currentWeight: number;
  };

  export type Return = {
    id: number;
    personId: number;
    relaxedArmL: number;
    measurementDate: Date;
    relaxedArmR: number;
    contractedArmL: number;
    contractedArmR: number;
    foreArmL: number;
    foreArmR: number;
    haunchL: number;
    haunchR: number;
    calfL: number;
    calfR: number;
    relaxedChest: number;
    contractedChest: number;
    waist: number;
    abdomen: number;
    hip: number;
    shoulder: number;
    currentWeight: number;
    createdAt: Date;
  };

  export type List = {
    id: number;
    personId: number;
    relaxedArmL: number;
    measurementDate: Date;
    relaxedArmR: number;
    contractedArmL: number;
    contractedArmR: number;
    foreArmL: number;
    foreArmR: number;
    haunchL: number;
    haunchR: number;
    calfL: number;
    calfR: number;
    relaxedChest: number;
    contractedChest: number;
    waist: number;
    abdomen: number;
    hip: number;
    shoulder: number;
    currentWeight: number;
    createdAt: Date;
  }[];
}
