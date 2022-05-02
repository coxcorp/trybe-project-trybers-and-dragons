import Race from './Race';

class Elf extends Race {
  public static _count = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    Elf._count += 1;
    return Elf._count;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
