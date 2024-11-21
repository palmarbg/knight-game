import { Deck } from "./Deck"
import { createUI } from "./helpers/createUI"
import { dealCards } from "./helpers/dealCards"

export class CardGame {
  constructor({ gameLoop, cards }) {
    this.gameLoop = gameLoop
    this.deck = new Deck({ cards })

    console.log(this.deck)
  }

  async start() {
    this.gameLoop.stop()

    this.container = createUI()

    this.playerTurn()
  }

  async end() {
    // remove all DOM elements
    this.container.remove()

    // continue the game
    this.gameLoop.start()
  }

  async playerTurn() {
    const endTurnBtn = this.container.querySelector('#end-turn')
    endTurnBtn.onclick = () => console.log(22)

    // deal cards
    const hand = this.deck.draw(3)
    await dealCards(this.container, hand)
  }
}