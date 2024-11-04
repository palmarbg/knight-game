/**
 * 
 * @param {Object} dconfig dungeon config
 * @param {Object} rconfig room config
 * @returns {Object} parameters
 */
export function getLevelParameters(dconfig, rconfig) {
  let params = {}
  params.dungeonParameters = dconfig
  params.dungeonParameters.room_count = rconfig.roomCount

  params.roomParameters = rconfig

  return params
}