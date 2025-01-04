import { Entity } from "../core/Fight/Entity"
import { Deck } from "./Deck"
import { UserControls } from "./UserControls"
import { createUI } from "./helpers/createUI"
import { dealCards, discardCards } from "./helpers/cardUIFunctions"
import { enemies } from "../core/Enemies/Enemies"
import { handleEnemysTurn } from "./helpers/handleEnemysTurn"
import { loadEnemy } from "./helpers/loaders"

export class CardGame {
  constructor({ gameLoop, gameState, enemyId }) {
    this.gameLoop = gameLoop
    this.deck = new Deck({ cards: gameState.getCards() })
    this.enemy = loadEnemy(enemyId)
    this.gameState = gameState
    console.warn(this.enemy)
  }

  start() {
    this.gameLoop.stop()

    this.container = createUI(this)

    this.playerEntity = new Entity(this.gameState.playerStats)
    this.enemyEntity = new Entity({ hp: this.enemy.hp, deffense: this.enemy.defense })

    this.userControls = new UserControls(this)

    this.playerTurn()
  }

  end() {
    // remove all DOM elements
    this.container.remove()

    // continue the game
    this.gameLoop.start()
  }

  checkEnd() {
    if (this.playerEntity.hp <= 0 || this.enemyEntity.hp <= 0) {
      this.end()
      return true
    }
    return false
  }

  async playerTurn() {
    // restore energy
    this.playerEntity.startTurn()

    // deal cards
    const hand = this.deck.draw(3)
    await dealCards(this.container, hand)

    // wait until player's turn end
    await this.userControls.handlePlayerTurn()

    if (this.checkEnd())
      return

    // discard cards
    await discardCards(this.container, this.deck)

    console.log('player turn ended')

    // start enemy's turn
    this.enemysTurn()
  }

  async enemysTurn() {
    await handleEnemysTurn(this)

    if (this.checkEnd())
      return

    console.log('enemy turn ended')

    // start player's turn
    this.playerTurn()
  }
}