import { Sprite } from "../engine/Sprite.js";
import { Vector2 } from "../engine/Vectors.js";
import { Level } from "../objects/Level/Level.js";
import { gridCells } from "../helpers/grid.js";
import { Exit } from "../objects/Exit/Exit.js";
import { Hero } from "../objects/Hero/Hero.js";
import { events } from "../engine/Events.js";
import { OutdoorLevel1 } from "./OutdoorLevel1.js";
import { GeneratedDungeon } from "./GeneratedDungeon.js";
import { gridSize } from "../engine/config/config.json"
import { Room } from "../objects/LevelObjects/Room/Room.js";

export class GeneratedLevel extends Level {
  constructor(params = {}) {
    super({});

    this.dungeon = new GeneratedDungeon()

    let [w, h] = this.dungeon.dungeon.size

    const ground = new Sprite({
      resource: { isLoaded: true, image: this.dungeon.getBackgroundImage() },
      frameSize: new Vector2(w * gridSize, h * gridSize)
    })

    this.addChild(ground)

    this.rooms = this.dungeon.rooms.map(r => {
      const room = new Room({
        position: new Vector2(...r.position).mul(gridSize),
        size: new Vector2(...r.room_size).mul(gridSize)
      })
      return room
    })

    this.rooms.forEach(r => this.addChild(r))

    console.log(this.dungeon.dungeon)

    let heroStartPosition = this.dungeon.dungeon.start_pos
    const hero = new Hero(...new Vector2(...heroStartPosition).mul(gridSize))
    this.addChild(hero)

    this.walls = this.dungeon.getWalls();
    console.log(this.walls)
  }

  ready() {
    events.on("HERO_EXITS", this, () => {
      events.emit("CHANGE_LEVEL", new OutdoorLevel1({
        heroPosition: new Vector2(gridCells(16), gridCells(4))
      }))
    })
  }

}