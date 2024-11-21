export const cardEffects = new Map(
  [
    [
      1,
      (player, enemy) => {
        player.attack(enemy, 3)
      }
    ],
    [
      2,
      (player, enemy) => {
        player.attack(enemy, 5)
      }
    ]
  ]
)