
export const RANDOM_STRING = "RANDOM_STRING";

export const addRandomString = (data) => {
    return {
        type : RANDOM_STRING,
        payload : data
    }
}