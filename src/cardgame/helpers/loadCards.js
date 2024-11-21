import { cardEffects } from '../../core/Cards/Cards'
import cardList from '../../data/cards.json'

/**
 * Loads the cards that the player has
 * @param {[number]} cardIdxs 
 * @returns
 */
export function loadCards(cardIdxs) {
  const cardDatas = cardIdxs.map(idx => cardList.find(c => c.id == idx))
  const cards = cardDatas.map(e => { return { ...e, effect: cardEffects.get(e.id) } })

  return cards
}