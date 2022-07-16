
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { gameStatusReducer } from "./GameStatus/reducer";
import { timerReducer } from "./Timer/reducer";
import { GameDisplayReducer } from "./GameDisplay/reducer";

const rootReducer = combineReducers({
    gameStatus : gameStatusReducer,
    time : timerReducer,

    randomString : GameDisplayReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

store.subscribe(() => {
    console.log("subscribe : ", store.getState());
})