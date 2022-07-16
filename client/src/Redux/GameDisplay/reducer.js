
import { RANDOM_STRING } from "./action";

const initState = {

    randomString : [],
}

export const GameDisplayReducer = (store = initState, action) => {
    switch(action.type) {
        case RANDOM_STRING : return {
            ...store,

            randomString : action.payload,
        }
        default : return store
    }
}