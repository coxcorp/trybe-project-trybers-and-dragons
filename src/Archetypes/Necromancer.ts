import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  public static _count = 0;
  private _damage: EnergyType;

  constructor(name: string) {
    super(name);
    this._damage = 'mana';
  }

  static createdArchetypeInstances(): number {
    Necromancer._count += 1;
    return Necromancer._count;
  }

  public get energyType(): EnergyType {
    return this._damage;
  }
}

export default Necromancer;
