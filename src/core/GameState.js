import initialCards from '../data/config/initial-cards.json'
import initialStats from '../data/config/initial-player-stats.json'

export class GameState {
  constructor() {
    this.cards = initialCards
    this.playerStats = initialStats
  }

  getCards() {
    return [...this.cards]
  }

  addCard(card) {
    this.cards.push(card)
  }
}