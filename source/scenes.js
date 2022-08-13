let scenes = [{
    1: "Ocean",
    2: "Romance",
    3: "Sunset",
    4: "Party",
    5: "Fireplace",
    6: "Cozy",
    7: "Forest",
    8: "Pastel Colors",
    9: "Wake up",
    10: "Bedtime",
    11: "Warm White",
    12: "Daylight",
    13: "Cool white",
    14: "Night light",
    15: "Focus",
    16: "Relax",
    17: "True colors",
    18: "TV time",
    19: "Plantgrowth",
    20: "Spring",
    21: "Summer",
    22: "Fall",
    23: "Deepdive",
    24: "Jungle",
    25: "Mojito",
    26: "Club",
    27: "Christmas",
    28: "Halloween",
    29: "Candlelight",
    30: "Golden white",
    31: "Pulse",
    32: "Steampunk",
    1000: "Rhythm",
}]
/** 
 * 
 * Turns Scene's Name to ID
 * @param {String} "Scene Name"
 * 
*/
function sceneNameToId(scene_name) {
    var id = scenes.findIndex((value) => scene_name);
    return id;
}
const TW_SCENES = [6, 9, 10, 11, 12, 13, 14, 15, 16, 18, 29, 30, 31, 32]
const DW_SCENES = [9, 10, 13, 14, 29, 30, 31, 32]
export default sceneNameToId;