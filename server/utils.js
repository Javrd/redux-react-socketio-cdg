//player
export const WAITING = 'Esperando al siguiente turno'; //player has already selected a card in this turn
export const PLAYING = 'Jugando el turno'; //player is choosing a card
export const HUMAN = 'Jugando'; //player is in the room
export const BOT = 'Abandonado'; //player is out

//room
export const LOBBY = 'En espera'; //room hasn't started yet
export const IN_GAME = 'En partida'; //player are playing
export const FINISHED = 'Finalizada'; //game is over


export const getPlayer=(players, playerId)=>{
    for(let i=0; i<players.length; i++){
        if(players[i].playerId==playerId){
            return players[i];
        }
    }
    return null;
};

export const getRoom=(rooms, roomId)=>{
    for(let i=0; i<rooms.length; i++){
        if(rooms[i].roomId==roomId){
            return rooms[i];
        }
    }
    return null;
};

export const getClientRoomId = (store, client) => {
    let rooms;
    let roomId;

    rooms = Object.keys(client.rooms);
    rooms.splice(rooms.indexOf(client.id), 1);
    roomId = rooms[0];

    return roomId;
};


export const getClientState = (roomState, player) => {
    let posPlayer = roomState.players.indexOf(player);
    let player2 = roomState.players[(posPlayer+1)%4];
    player2 = player2? player2: {table:[],score:0};
    let player3 = roomState.players[(posPlayer+2)%4];
    player3 = player3? player3: {table:[],score:0};
    let player4 = roomState.players[(posPlayer+3)%4];
    player4 = player4? player4: {table:[],score:0};

    return Object.assign({},player,{
        player2: {
            table: player2.table,
            score: player2.score,
            name: player2.name,
            type: player2.type
        },
        player3: {
            table: player3.table,
            score: player3.score,
            name: player3.name,
            type: player3.type
        },
        player4: {
            table: player4.table,
            score: player4.score,
            name: player4.name,
            type: player4.type
        }, 
        state: roomState.state,
        round: roomState.round,
        turn: roomState.turn
    });
};

export const getAllIndexes = (arr, val) => {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
};
