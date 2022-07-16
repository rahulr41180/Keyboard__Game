
export const GAME_STATUS = "GAME_STATUS";

export const addGameStatus = (data) => {
    return {
        type : GAME_STATUS,
        payload : data,
    }
}