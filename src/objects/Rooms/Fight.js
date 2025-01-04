import { events } from "../../engine/Events/Events";
import { Room } from "./Room";

export class Fight extends Room {
  constructor({ position, size, enemyGenerator }) {
    super({ position, size })
    this.enemyGenerator = enemyGenerator
    console.log("FIGHT", position, size)

  }

  onRoomEnter() {
    super.onRoomEnter()
    events.emit("FIGHT_START", this.enemyGenerator.next().value)
  }
}