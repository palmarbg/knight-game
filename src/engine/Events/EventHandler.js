/**
 * Handles communication to server when an event occurs.
 * Handles fightscenes.
 */

import { events } from "./Events"
import { CardGame } from '../../cardgame/CardGame'


export class EventHandler {
  constructor(gameLoop, gameState) {
    events.on("HERO_PICKS_UP_ITEM", this, data => {
      console.warn("implement communication to server")
    })

    events.on("FIGHT_START", this, enemy => {
      new CardGame({ gameLoop, gameState, enemyId: enemy.id }).start()
    })
  }
}
