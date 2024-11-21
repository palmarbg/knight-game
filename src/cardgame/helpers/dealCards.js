import { sleep } from "./sleep"

/**
 * 
 * @param {Element} container 
 * @param {[any]} cards 
 */
export async function dealCards(container, cards) {
  const handDiv = container.querySelector('#player-hand')
  for (const c of cards) {
    await sleep(100)
    const img = document.createElement('img')
    img.onload = () => console.log('image loaded')
    img.src = `${c.image}`
    img.classList.add('card')
    handDiv.appendChild(img)
  }
}