
import { Container } from "../styles/StartButton.styles";


import Button from '@mui/material/Button';
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addGameStatus } from "../Redux/GameStatus/action";

export const StartButton = ({ status }) => {

    const dispatch = useDispatch();

    return (
        <Container>

            <Button onClick={() => {
                dispatch(addGameStatus(status))
            }} variant="contained" disableElevation>
                {status === "start" ? "Start Game" : "Home"}
            </Button>
        </Container>
    )

}