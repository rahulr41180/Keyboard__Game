
import { Container } from "../styles/Navbar.styles";

import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import WifiIcon from '@mui/icons-material/Wifi';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

import { useState, useEffect } from "react";

export const Navbar = () => {

    const [second, setSecond] = useState(0);
    const [hours, setHours] = useState(0);
    const [minute, setMinute] = useState(0);

    useEffect(() => {
        let id = setInterval(() => {
            let date = new Date();
            const hours = date.getHours();
            const minute = date.getMinutes();
            const second = date.getSeconds();
            setHours(Number(hours));
            setMinute(Number(minute));
            setSecond(Number(second))
        },1000)
        return function cleanup() {
            clearInterval(id);
        }

    },[])

    return (
        <Container>
            <div className="left__box">
                <p className="time">{hours} : {minute}</p>
            </div>

            <div className="right__box">
                <SignalCellularAltIcon className="battery" />
                <WifiIcon className="battery" />
                <BatteryFullIcon className="battery" />
            </div>
        </Container>
    )

}