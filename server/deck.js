export const PAREJA = 'PAREJA';
export const TRIO = 'TRIO';
export const ACUMULATIVO = 'ACUMULATIVO';
export const INCREMENTAL = 'INCREMENTAL';

let deck = [];

export const POINTS = {
    PAREJA: 5,
    TRIO: 10,
    ACUMULATIVO: [0,1,3,6,10,15,15,15,15]
};

//turnPlayed, roundPlayed= 0 means that it wasn't played yet
const pareja = {
    type: PAREJA,
    turnPlayed: 0,
    roundPlayed:0
};
const trio = {
    type: TRIO,
    turnPlayed: 0,
    roundPlayed:0
};
const acumulativo = {
    type: ACUMULATIVO,
    turnPlayed: 0,
    roundPlayed:0
};
const incremental = {
    type: INCREMENTAL,
    turnPlayed: 0,
    roundPlayed:0
};

for(let i=0; i<24; i++){
    pareja.id=i+1;
    deck.push(Object.assign({}, pareja));
}
for(let i=24; i<48; i++){
    trio.id=i+1;
    deck.push(Object.assign({}, trio));
}
for(let i=48; i<72; i++){
    acumulativo.id=i+1;
    deck.push(Object.assign({}, acumulativo));
}
for(let i=72; i<96; i++){
    incremental.id=i+1;
    deck.push(Object.assign({}, incremental));
}

export const DECK = deck;