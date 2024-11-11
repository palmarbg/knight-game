import { itemGenerator } from "./itemGenerator"

/**
 * 
 * @param {Object} dconfig dungeon config
 * @param {Object} rconfig room config
 * @returns {Object} parameters
 */
export function getLevelParameters(dconfig, rconfig, itemList) {
  let params = {}
  params.dungeonParameters = dconfig
  params.dungeonParameters.room_count = rconfig.roomCount

  params.roomParameters = rconfig

  params.itemGenerator = itemGenerator(itemList)

  return params
}