
export const ADD_SECOND = "ADD_SECOND";

export const ADD_MINUTE = "ADD_MINUTE";

export const addSecond = (data) => {
    return {
        type : ADD_SECOND,
        payload : data,
    }
}


export const addMinute = (data) => {
    return {
        type : ADD_MINUTE,
        payload : data,
    }
}