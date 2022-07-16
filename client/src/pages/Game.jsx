
import { Container } from "../styles/Start.styles"; 

import { Navbar } from "../components/Navbar";
import { Display } from "../components/Display";
import { InputReset } from "../components/InputReset";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Keyboard } from "../components/Keyboard";

export const Game = () => {

    const [char, setChar] = useState("");

    console.log('char:', char.split("ey")[1])

    return (
        <Container>
            <Navbar />
            <Display char={char.split("ey")[1]} />
            <InputReset setChar={setChar}/>
            <Keyboard />
        </Container>
    )

}