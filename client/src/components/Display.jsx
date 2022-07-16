
import { Container } from "../styles/Display.styles";

import { StartDisplay } from "./StartDisplay";
import { GameDisplay } from "./GameDisplay";
import { Timer } from "./Timer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const Display = ({ char }) => {

    const store = useSelector((store) => store);
    const status = store.gameStatus.gameStatus

    const [penalty, setPenalty] = useState(0);

    const [timer, setTimer] = useState(0);

    return (

        <Container status={status}>
            <p className="display__heading">Type The Alphabet</p>
            <p className="game__instruction">Typing game to see how fast you type. Timer starts when you do :)</p>
            {status === "start" ? 
                <GameDisplay setPenalty={setPenalty} char={char} />
                :
                <StartDisplay />
            }
            {status === "start" ? 
                <Timer penalty={penalty} setTimer={setTimer} char={char} />
                :
                <p className="timer__show"><b>Time : 0.00s</b></p>
            }
            <p className="best__time">my best time {document.cookie ? Number(document.cookie.split("=")[1]) : 0.00}s!</p>
        </Container>
    )

}