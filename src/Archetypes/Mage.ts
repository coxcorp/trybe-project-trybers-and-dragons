import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  public static _count = 0;
  private _damage: EnergyType;

  constructor(name: string) {
    super(name);
    this._damage = 'mana';
  }

  static createdArchetypeInstances(): number {
    Mage._count += 1;
    return Mage._count;
  }

  public get energyType(): EnergyType {
    return this._damage;
  }
}

export default Mage;
