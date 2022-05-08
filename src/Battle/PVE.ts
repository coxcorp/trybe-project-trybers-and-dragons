import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  fighter: Fighter;
  monsters: SimpleFighter[];

  constructor(figther: Fighter, monsters: SimpleFighter[]) {
    super(figther);
    this.fighter = figther;
    this.monsters = monsters;
  }

  isAlive(): boolean {
    if (this.fighter.lifePoints > 0 
      && this.monsters.some((e) => e.lifePoints > 0)) {
      return true;
    }
    return false;
  }

  figtherWins(): void {
    const creatures = this.monsters.find((e) => e.lifePoints > 0);
    if (creatures) {
      this.fighter.attack(creatures);
    }
  }
  
  monstersWins(): void {
    this.monsters.forEach((e) => {
      if (e.lifePoints > 0) {
        e.attack(this.fighter);
      }
    });
  }

  public fight(): number {
    while (this.isAlive()) {
      this.figtherWins();      
      this.monstersWins();
    }
    if (this.fighter.lifePoints < 0) {
      return -1;
    }
    return 1;
  }
}

export default PVE;
