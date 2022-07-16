
import { addSecond, addMinute } from "../Redux/Timer/action";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGameStatus } from "../Redux/GameStatus/action";

export const Timer = ({penalty, setTimer, char }) => {

    const [time, setTime] = useState(0);
    const [minute, setMinute] = useState(0);

    const store = useSelector((store) => store);
    const status = store.gameStatus.gameStatus;

    const dispatch = useDispatch();
    useEffect(() => {
        let id = setInterval(() => {
            setTime((prev) => {
                if(prev >= 60) {
                    setMinute(minute + 1)
                    return 0;
                }
                return prev + 1;
            })
            setTime((prev) => {
                // console.log(prev)
                dispatch(addSecond(prev))
                return prev
            })

            setMinute((prev) => {
                // console.log(prev);
                dispatch(addMinute(prev))
                return prev
            })
        },1000)

        return function cleanup() {
            clearInterval(id);
        }
    },[])

    useEffect(() => {
        if(penalty > 0) {
            setTime((prev) => {
                return prev + 0.5
            })
        }
    },[penalty])

    return (
        <p style={{
            width: "fit-content",
            margin : ".4vw auto auto auto",
            color: "white",
            fontSize: "1vw"
        }}><b>Time : {minute}:{time}s</b></p>
    )

}