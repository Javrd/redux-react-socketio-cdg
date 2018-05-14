export const PAREJA = 'PAREJA';
export const TRIO = 'TRIO';
export const ACUMULATIVO = 'ACUMULATIVO';
export const INCREMENTAL = 'INCREMENTAL';
export const SIMPLE1 = 'SIMPLE1';
export const SIMPLE2 = 'SIMPLE2';
export const SIMPLE3 = 'SIMPLE3';
export const COMBO = 'COMBO';
export const FINALE = 'FINALE';
export const COMUN = 'COMUN';

export const POINTS = {
    PAREJA: 5,
    TRIO: 10,
    ACUMULATIVO: [0,1,3,6,10,15,15,15,15],
    SIMPLE1: 1,
    SIMPLE2: 2,
    SIMPLE3: 3,
    COMBO: 3,
    FINALE: [0,0,7,15],
    COMUN_MAX: [0,6,3,2,0],
    COMUN_MIN: [0,4,2,1,0]
};

export const DECK = () =>{
    //turnPlayed, roundPlayed= 0 means that it wasn't played yet
    let pareja = {
        type: PAREJA,
        turnPlayed: 0,
        roundPlayed:0,
        description: "Pareja: si juegas dos cartas obtienes 5 puntos"
    };
    let trio = {
        type: TRIO,
        turnPlayed: 0,
        roundPlayed:0,
        description: "Trío: si juegas tres cartas obtienes 10 puntos"
    };
    let acumulativo = {
        type: ACUMULATIVO,
        turnPlayed: 0,
        roundPlayed:0,
        description: "Acumulativo: cuantas más juegues, más puntos, 1 3 6 10 15"
    };
    let incremental = {
        type: INCREMENTAL,
        turnPlayed: 0,
        roundPlayed:0,
        description: "Incremental: obtienes tantos puntos como el turno que sea"
    };
    let simple1 = {
        type: SIMPLE1,
        turnPlayed: 0,
        roundPlayed:0,
        description: "Simple1: otorga 1 punto"
    };
    let simple2 = {
        type: SIMPLE2,
        turnPlayed: 0,
        roundPlayed:0,
        description: "Simple2: otorga 2 puntos"
    };
    let simple3 = {
        type: SIMPLE3,
        turnPlayed: 0,
        roundPlayed:0,
        description: "Simple3: otorga 3 puntos"
    };
    let combo = {
        type: COMBO,
        turnPlayed: 0,
        roundPlayed:0,
        description: "Combo: triplica la puntuación de la próxima carta simple"
    };
    let finale = {
        type: FINALE,
        turnPlayed: 0,
        roundPlayed:0,
        description: "Final: en cuantas más rondas la juegues, más puntos, 0 7 15"
    };
    let comun = {
        type: COMUN,
        turnPlayed: 0,
        roundPlayed:0,
        description: "Comun: el que más tenga gana 6 puntos, el que menos pierde 4"
    };
    let deck = [];
    for(let i=0; i<14; i++){
        pareja.id=i+1;
        deck.push(Object.assign({}, pareja));
    }
    for(let i=14; i<28; i++){
        trio.id=i+1;
        deck.push(Object.assign({}, trio));
    }
    for(let i=28; i<42; i++){
        acumulativo.id=i+1;
        deck.push(Object.assign({}, acumulativo));
    }
    for(let i=42; i<50; i++){
        incremental.id=i+1;
        deck.push(Object.assign({}, incremental));
    }
    for(let i=50; i<54; i++){
        simple1.id=i+1;
        deck.push(Object.assign({}, simple1));
    }
    for(let i=54; i<60; i++){
        simple2.id=i+1;
        deck.push(Object.assign({}, simple2));
    }
    for(let i=60; i<64; i++){
        simple3.id=i+1;
        deck.push(Object.assign({}, simple3));
    }
    for(let i=64; i<68; i++){
        combo.id=i+1;
        deck.push(Object.assign({}, combo));
    }
    for(let i=68; i<76; i++){
        finale.id=i+1;
        deck.push(Object.assign({}, finale));
    }
    for(let i=76; i<96; i++){
        comun.id=i+1;
        deck.push(Object.assign({}, comun));
    }
    return deck;
};