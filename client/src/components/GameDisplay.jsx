
import { Container } from "../styles/GameDisplay.styles";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRandomString } from "../Redux/GameDisplay/action";
import { addGameStatus } from "../Redux/GameStatus/action";

export const GameDisplay = ({setPenalty, char }) => {

    const store = useSelector((store) => store);
    const randomString = store.randomString.randomString;
    const timeS = store.time.timeS;
    const timeM = store.time.timeM;
    // console.log('randomString:', randomString)
    const dispatch = useDispatch();

    useEffect(() => {
        const generateRandomString = (myLength) => {
            const chars =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const randomArray = Array.from(
              { length: myLength },
              (v, k) => chars[Math.floor(Math.random() * chars.length)]
            );
          
            const randomString = randomArray.join("");
            return randomString;
        };
        const string = generateRandomString(20).split("");
        dispatch(addRandomString(string));
    },[])

    useEffect(() => {
        if(!char) {
            return;
        }
        if(randomString[randomString.length-1] === char.toUpperCase()) {
            let string = randomString
            string.pop();
            if(string.length === 0) {
                let previousTime = Number(document.cookie.split("=")[1])
                let time = Number(timeM+"."+timeS)
                let previousTimeFromLocalStorage = JSON.parse(localStorage.getItem("gameTimer"));
                if(!previousTimeFromLocalStorage) {
                    localStorage.setItem("gameTimer", JSON.stringify(time));
                }
                else if(time < previousTimeFromLocalStorage) {
                    localStorage.setItem("gameTimer", JSON.stringify(time))
                }
                if(!previousTime) {
                    document.cookie = "winTime="+time;
                    dispatch(addGameStatus("success"));
                }
                else if(time < previousTime) {
                    document.cookie = "winTime="+time
                    dispatch(addGameStatus("success"));
                }
                else {
                    dispatch(addGameStatus("loss"));
                }
            }

            dispatch(addRandomString(string));
        }
        else {
            setPenalty(0.5);
            dispatch(addRandomString(randomString))
        }
    },[char])

    return (
        <Container>
            {randomString[randomString.length-1]}
        </Container>
    )

}