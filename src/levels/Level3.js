import { events } from "../engine/Events/Events";
import { GeneratedLevel } from "./GeneratedLevel";
import defaultDungeonConfig from "./data/default-dungeon-settings.json"
import roomConfig from "./data/rooms/level3.json"
import { getLevelParameters } from "./helpers/getLevelParameters";

export class Level3 extends GeneratedLevel {
  constructor() {
    super(getLevelParameters(defaultDungeonConfig, roomConfig))
  }

  ready() {
    events.on("HERO_EXITS", this, () => {
      console.warn("implement exit")
    })
  }
}