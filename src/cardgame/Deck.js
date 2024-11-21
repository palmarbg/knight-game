import { loadCards } from "./helpers/loadCards";

export class Deck {
  constructor({ cards }) {
    this.discardPile = []
    this.drawPile = shuffle(loadCards(cards))
  }

  draw(amount) {
    let cards = this.drawPile.splice(0, amount)
    if (cards.length < amount) {
      this.drawPile = shuffle(this.discardPile)
      this.discardPile = []
      cards.concat(this.drawPile.splice(0, amount - cards.length))
    }
    return cards
  }
}


// credit: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  let pivot = array.length

  while (pivot > 0) {
    const idx = Math.floor(Math.random() * pivot--)
      ;[array[pivot], array[idx]] = [array[idx], array[pivot]]
  }
  return array
}