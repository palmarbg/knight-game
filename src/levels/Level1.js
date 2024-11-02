import { events } from "../engine/Events/Events";
import { gridCells } from "../helpers/grid";
import { Exit } from "../objects/Exit/Exit";
import { GeneratedLevel } from "./GeneratedLevel";
import defaultDungeonConfig from "./data/default-dungeon-settings.json"
import roomConfig from "./data/rooms/level1.json"

function getLevelParameters() {
  let params = {}
  params.dungeonParameters = defaultDungeonConfig
  params.dungeonParameters.room_count = 10

  params.roomParameters = roomConfig

  return params
}

export class Level1 extends GeneratedLevel {
  constructor() {
    super(getLevelParameters())

    // TODO this should be placed in GeneratedLevel!!!
    const exit = new Exit(gridCells(35), gridCells(40))
    this.addChild(exit);
  }

  ready() {
    events.on("HERO_EXITS", this, () => {
      console.warn("implement exit")
    })
  }
}