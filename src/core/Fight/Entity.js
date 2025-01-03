export class Entity {
  constructor({ hp, deffense, energy }) {
    this.hp = hp
    this.deffense = deffense
    this.energy = energy
    this.energyLeft = this.energy
  }

  attack(target, attackPoints) {
    target.takeDamage(attackPoints)
  }

  takeDamage(damagePoints) {
    damagePoints -= this.deffense
    this.hp -= Math.max(0, damagePoints)
  }

  heal(hp) {
    this.hp += hp
  }

  startTurn() {
    this.energyLeft = this.energy
  }
}