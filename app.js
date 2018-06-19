const geolib = require('geolib');
let relDirMap = {
    SE : 'Left',
    SW : 'Right',
    WS : 'Left',
    WN : 'Right',
    NE : 'Right',
    NW : 'Left',
    ES : 'Right',
    EN : 'Left'
}

let corDirMap = {
    S : 'South',
    N : 'North',
    E : 'East',
    W : 'West'
}


// let corArr = [
//     [144.36085246503356, -38.14380674211129],
// [144.3608568236232, -38.14379659034294],
// [144.3608357012272, -38.14379026196713],
// [144.3607706576586, -38.14393265028967],
// [144.36075791716578, -38.14396112792083],
// [144.36073780059817, -38.14395585428627],
// [144.36074450612068, -38.143940560743886]];

// let corArr = [[144.36107793822887, -38.143818871495],
// [144.36106251552704, -38.1438143888969],
// [144.36102077364924, -38.14380239135359],
// [144.36100769788027, -38.14383060535341],
// [144.36099998652935, -38.14384668996524],
// [144.3609667941928, -38.14392104828861],
// [144.36095505952835, -38.143947680151946],
// [144.3609191849828, -38.14393792392591]];

let corArr = [[144.36083771288398,-38.14378762514374],[144.36080887913704,-38.14384774469376],[144.36080016195777,-38.14386831189687],[144.36077233403924,-38.14393054083507],[144.36076026409867,-38.14395796374014],[144.3607418239117,-38.14395321746884]];




function convertToObj(latLagVal){
    return { latitude : latLagVal[1], longitude : latLagVal[0] }
};
let corArrObj = corArr.map(convertToObj);

for (corObj of corArrObj){
    console.log(geolib.elevation(corObj));
}

// let [startCorObj,...corArrObjx] = corArrObj;
// let prePos = '0';
// let curPos = '';

// let totalDistance = 0;

// for (corObj of corArrObjx){
//     let start = startCorObj
//     let end = corObj
//     //console.log(start);

//     let output = geolib.getCompassDirection(start, end);

//     let distance = geolib.getDistance(start, end);
//     //console.log(distance);

//     curPos = output.rough;
//     startCorObj = corObj;

//     let cordinalDirection = prePos+curPos;

//     let relativeDirection = getRelativeDirection(cordinalDirection);
//     if(relativeDirection){
//         totalDistance += distance;
//         console.log(`Walk Towards ${corDirMap[prePos]} for ${totalDistance}M`)
//         console.log(`Turn ${relativeDirection}`);
//         totalDistance = 0;
//     }else{
//         totalDistance += distance;
//         //console.log(`${distance}M - ${totalDistance}M`);
//     }
    

//     prePos = curPos;
// }

// console.log(`Arrive at your destination in ${totalDistance}M`)
// function getRelativeDirection(cordinalDirection){
//     return relDirMap[cordinalDirection];
// }

const dirMap = {
    Up: 'up',
    Down: 'down',
    StairsUp: 'stairsup',
    StairsDown: 'stairsdown',
    LiftUp: 'elevatorup',
    LiftDown: 'elevatordown',
    Left: 'left',
    Right: 'right',
    Walk: 'forward'
};

let direction = dirMap.StairsDown;

if (~[dirMap.Down, dirMap.LiftDown, dirMap.Up, dirMap.StairsUp].indexOf(direction)) {
    console.log("This wordked");
}