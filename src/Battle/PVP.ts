import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(fighter1: Fighter, protected fighter2: Fighter) {
    super(fighter1);
  }

  public fight(): number {
    while (this.player.lifePoints > 0 && this.fighter2.lifePoints > 0) {
      this.player.attack(this.fighter2);
      this.fighter2.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;
