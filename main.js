import './style.css'
import { Vector2 } from "./src/engine/types/Vectors.js";
import { GameLoop } from "./src/engine/GameLoop.js";
import { Main } from "./src/objects/Main/Main.js";
import { CaveLevel1 } from "./src/levels/CaveLevel1.js";

import { GeneratedDungeon } from "./src/levels/GeneratedDungeon";
import { GeneratedLevel } from './src/levels/GeneratedLevel.js';
import config from "./src/engine/config/config.json"
import { placeRooms } from './src/levels/helpers/placeRooms.js';

// // Grabbing the canvas to draw to
// const canvas = document.querySelector("#game-canvas");
// canvas.setAttribute("width", config.canvasSize[0])
// canvas.setAttribute("height", config.canvasSize[1])
// const ctx = canvas.getContext("2d");

// // Establish the root scene
// const mainScene = new Main({
//   position: new Vector2(0, 0)
// })
// //mainScene.setLevel(new OutdoorLevel1())
// mainScene.setLevel(new GeneratedLevel())

// // Establish update and draw loops
// const update = (delta) => {
//   mainScene.stepEntry(delta, mainScene);
//   mainScene.input?.update();
// };

// const draw = () => {

//   // Clear anything stale
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Draw the sky
//   mainScene.drawBackground(ctx);

//   // Save the current state (for camera offset)
//   ctx.save();

//   //Offset by camera position
//   if (mainScene.camera) {
//     ctx.translate(mainScene.camera.position.x, mainScene.camera.position.y);
//   }

//   // Draw objects in the mounted scene
//   mainScene.drawObjects(ctx);

//   // Restore to original state
//   ctx.restore();

//   // Draw anything above the game world
//   mainScene.drawForeground(ctx);

// }

// // Start the game!
// const gameLoop = new GameLoop(update, draw);
// gameLoop.start();


let dungeon = new GeneratedDungeon()
console.log(dungeon.dungeon)
const canvas = document.querySelector("#game-canvas");

canvas.setAttribute("width", config.canvasSize[0])
canvas.setAttribute("height", config.canvasSize[1])

const ctx = canvas.getContext("2d");

let [w, h] = dungeon.dungeon.size

ctx.drawImage(dungeon.getBackgroundImage(), 0, 0, w, h, 0, 0, w, h)
ctx.fillRect(...dungeon.dungeon.start_pos, 1, 1)

placeRooms(dungeon.dungeon, {})
