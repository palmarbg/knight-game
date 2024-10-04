import Dungeon from 'dungeon-generator';
import defaultDungeonConfig from "./default-dungeon-settings.json"
import { gridSize } from "../engine/config/config.json"

export class GeneratedDungeon {
  constructor(params) {
    let dungeon = new Dungeon(params ?? defaultDungeonConfig)

    dungeon.generate()

    this.dungeon = dungeon
    // corridors are height 3xY or Xx3
    this.rooms = dungeon.children.filter(c => c.size.every(e => e > 3))
    console.log(this.rooms)
  }

  /*TODO: draw sprites instead of rectangles */
  getBackgroundImage() {
    let canvas = document.createElement("canvas")
    canvas.setAttribute("width", this.dungeon.size[0] * gridSize)
    canvas.setAttribute("height", this.dungeon.size[1] * gridSize)

    let ctx = canvas.getContext("2d")

    for (let y = 0; y < this.dungeon.size[1]; y++) {
      for (let x = 0; x < this.dungeon.size[0]; x++) {
        if (this.dungeon.walls.get([x, y])) {
          ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize)
        }
      }
    }

    return canvas
  }

  /*TODO: inefficient, use 2d array instead*/
  getWalls() {
    let walls = new Set()
    /*TODO*/
    this.dungeon.walls.rows.forEach((row, y) => row.forEach((b, x) => b && walls.add(`${x * gridSize},${y * gridSize}`)))
    return walls
  }

}
