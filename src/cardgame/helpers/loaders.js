import { cardEffects } from '../../core/Cards/Cards'
import { enemies } from '../../core/Enemies/Enemies'
import cardList from '../../data/cards.json'
import enemyList from '../../data/enemies.json'

/**
 * Loads the cards that the player has
 * @param {[number]} cardIdxs 
 * @returns
 */
export function loadCards(cardIdxs) {
  const cardDatas = cardIdxs.map(idx => cardList.find(c => c.id == idx))
  let counter = 0
  const cards = cardDatas.map(e => {
    return {
      ...e,
      effect: cardEffects.get(e.id),
      localId: counter++
    }
  })

  return cards
}

/**
 * Loads the enemy to fight
 * @param {number} enemyIdx 
 */
export function loadEnemy(enemyIdx) {
  const enemy = enemyList.find(e => e.id == enemyIdx)
  const enemyImpl = enemies.get(enemyIdx)
  enemy.playturn = enemyImpl.playturn.bind(enemyImpl)
  return enemy
}