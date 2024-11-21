export class Entity {
  constructor({ hp, deffense }) {
    this.hp = hp
    this.deffense = deffense
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
}