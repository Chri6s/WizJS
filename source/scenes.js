let scenes = [
    {"name": "Ocean", "id": 1},
    {"name": "Romance", "id": 2},
    {"name": "Sunset", "id": 3},
    {"name": "Party", "id": 4},
    {"name": "Fireplace", "id": 5},
    {"name": "Cozy", "id": 6},
    {"name": "Forest", "id": 7},
     {"name": "Pastel", "id": 8},
     {"name": "Wake up", "id": 9},
     {"name": "Bedtime", "id": 10},
     {"name": "Warm White", "id": 11},
     {"name": "Daylight", "id": 12},
     {"name": "Cool white", "id": 13},
     {"name": "Night light", "id": 14},
     {"name": "Focus", "id": 15},
     {"name": "Relax", "id": 16},
     {"name": "True colors", "id": 17},
     {"name": "TV time", "id": 18},
     {"name": "Plantgrowth", "id": 19},
     {"name": "Spring", "id": 20},
     {"name": "Summer", "id": 21},
     {"name": "Fall", "id": 22},
     {"name": "Deepdive", "id": 23},
     {"name": "Jungle", "id": 24},
     {"name": "Mojito", "id": 25},
     {"name": "Club", "id": 26},
     {"name": "Christmas", "id": 27},
     {"name": "Halloween", "id": 28},
     {"name": "Candlelight", "id": 29},
     {"name": "Golden white", "id": 30},
     {"name": "Pulse", "id": 31},
    {"name": "Steampunk", "id": 32},
    {"name": "Rythm", "id": 1000}
    ]
const TW_SCENES = [6, 9, 10, 11, 12, 13, 14, 15, 16, 18, 29, 30, 31, 32]
const DW_SCENES = [9, 10, 13, 14, 29, 30, 31, 32]
/** 
 * 
 * Turns Scene's Name to ID
 * @param {String} "Scene Name"
 * 
*/
function sceneNameToId(scene_name) {
    var id;
    scenes.forEach(element => {if(element.name == scene_name) {id = element.id}});
    return id;
}
/** 
 * 
 * Turns Scene's Id to Name
 * @param {Number} "Scene Id"
 * 
*/
function sceneIdToName(scene_id) {
    var name;
    scenes.forEach(element => {if(element.id == scene_id) {name = element.name}});
    return name;
}
function scenesByClass(Class) {

}
export default sceneNameToId;