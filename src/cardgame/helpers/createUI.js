export function createUI() {
  const body = document.querySelector('body')

  // create container
  const container = document.createElement('div')
  container.id = 'cardgame-container'
  body.appendChild(container)

  // end turn button
  const endTurnBtn = document.createElement('button')
  endTurnBtn.id = 'end-turn'
  endTurnBtn.innerText = 'Vége'
  container.appendChild(endTurnBtn)

  // player hand
  const playerHandDiv = document.createElement('div')
  playerHandDiv.id = 'player-hand'
  container.appendChild(playerHandDiv)

  return container
}