export const PAREJA = 'PAREJA';
export const TRIO = 'TRIO';

export const DECK = [];

export const POINTS = {
    PAREJA: 5,
    TRIO: 10
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

for(let i=0; i<48; i++){
    pareja.id=i+1;
    DECK.append(Object.assign({}, pareja));
}
for(let i=48; i<96; i++){
    trio.id=i+1;
    DECK.append(Object.assign({}, trio));
}