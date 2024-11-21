import initialCards from '../data/config/initial-cards.json'

class GameState {
  constructor() {
    this.cards = initialCards
  }

  getDeck() {
    return [...this.cards]
  }

  addCard(card) {
    this.cards.push(card)
  }
}

export default new GameState()