import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  public static _count = 0;
  private _damage: EnergyType;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Warrior._count += 1;
    return Warrior._count;
  }

  public get energyType(): EnergyType {
    return this._damage;
  }
}

export default Warrior;
