
import { ADD_SECOND, ADD_MINUTE } from "./action";
const initState = {

    timeS : 0,
    timeM : 0,
}


export const timerReducer = (store = initState, action) => {
    switch(action.type) {
        case ADD_SECOND : return {
            ...store,

            timeS : action.payload,
        };
        case ADD_MINUTE : return {
            ...store,
            timeM : action.payload,
        }
        default : return store
    }
}