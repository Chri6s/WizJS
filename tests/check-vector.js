import { Vector } from "../source/vec.js";

console.time("Operation Time");
try {
    var v = new Vector(1,2);
    var w = new Vector(1,2);
    console.log(v.vecFromAngle(52));
} catch (Error) {
    console.error(Error);
}
try {
    var v = new Vector(-1.1,2);
    var w = new Vector(1,-2);
    console.log(v.vecSub(w));
} catch (Error) {
    console.error(Error);
}
try {
    var v = new Vector(1,-2);
    var w = new Vector(-1,2);
    console.log(v.vecLen(w));
} catch (Error) {
    console.error(Error);
}
try {
    var v = new Vector(1, 412);
    var w = new Vector(-1,-2);
    console.log(v.vecLenSq());
} catch (Error) {
    console.error(Error);
}
console.timeStamp("Operation Time");
console.timeEnd("Operation Time");