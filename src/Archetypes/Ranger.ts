import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  public static _count = 0;
  private _damage: EnergyType;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Ranger._count += 1;
    return Ranger._count;
  }

  public get energyType(): EnergyType {
    return this._damage;
  }
}

export default Ranger;
