import { events } from "../../../engine/Events";
import { GameObject } from "../../../engine/GameObject";
import { gridSize } from "../../../engine/config/config.json"

export class Room extends GameObject {
  constructor({ position, size }) {
    super({ position })
    this.size = size
    this.visited = false
    console.log(position, size)
  }

  ready() {
    let id = events.on("HERO_POSITION", this, pos => {
      // detect room enter
      const roundedHeroX = Math.round(pos.x)
      const roundedHeroY = Math.round(pos.y)

      const [roomX, roomY] = [...this.position]
      const [roomWidth, roomHeight] = [...this.size]

      if (roundedHeroX < roomX || roundedHeroY < roomY) {
        return
      }

      if (roundedHeroX > roomX + roomWidth || roundedHeroY > roomY + roomHeight) {
        return
      }

      //if inside the room
      this.visited = true
      events.off(id)
      events.emit("HERO_ENTER_ROOM", this)
    })
  }
}