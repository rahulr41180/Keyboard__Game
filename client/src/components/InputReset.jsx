
import { Container } from "../styles/InputReset.styles";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGameStatus } from "../Redux/GameStatus/action";

export const InputReset = ({ setChar }) => {

    const [charKey, setCharKey] = useState("");
    const [charWord, setCharWord] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if(!charKey) {

            return;

        }
        let char = charKey.split("ey")[1].toUpperCase();

        let word = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let bag = "";
        for(var i = 0; i<word.length; i++) {
            if(word[i] === char) {

                bag += word[i];
                break;
            }
            else {
                bag += word[i];
            }
        }
        console.log('bag:', bag)
        setCharWord(bag);

        bag = "";
    },[charKey])

    return (
        <Container>
            <input onKeyPress={(event) => {
                setChar(event.code)
                setCharKey(event.code);
            }} className="text__input" value={charWord} type="text" name="" id="" placeholder="Type here" autoFocus/>
            <button className="reset__button" onClick={() => {
                dispatch(addGameStatus("start"))
            }}>Reset</button>
        </Container>
    )
}