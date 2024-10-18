/**
 * Handles communication to server when an event occurs.
 */

import { events } from "./Events";

let handlerRef = {}

events.on("HERO_PICKS_UP_ITEM", handlerRef, data => {
  console.warn("implement communication to server")
})


export const eventHandler = handlerRef;