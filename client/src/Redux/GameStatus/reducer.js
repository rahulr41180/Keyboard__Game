
import { GAME_STATUS } from "./action";

const initState = {

    gameStatus : "home",

}


export const gameStatusReducer = (store = initState, action) => {
    switch(action.type) {
        case GAME_STATUS : return {

            ...store,
            gameStatus : action.payload,

        }
        default : return store
    }
}