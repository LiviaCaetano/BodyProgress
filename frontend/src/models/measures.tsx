export namespace Measure {
  export type Register = {
    personId?: number;
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
    wait: number;
    abdomen: number;
    hip: number;
    shoulder: number;
    currentWeight: number;
  };

  export type Return = {
    id: number;
    personId: number;
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
    wait: number;
    abdomen: number;
    hip: number;
    shoulder: number;
    currentWeight: number;
  };

  export type List = Return[];
}
