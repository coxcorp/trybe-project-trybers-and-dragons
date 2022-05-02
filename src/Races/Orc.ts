import Race from './Race';

class Orc extends Race {
  public static _count = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    Orc._count += 1;
    return Orc._count;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
