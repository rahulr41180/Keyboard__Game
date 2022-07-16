
import { Container } from "../styles/StartDisplay.styles";

import startImage from "../assets/start.gif";
import success from "../assets/success1.gif";
import nextTime from "../assets/nextTime.gif";
import { useDispatch, useSelector } from "react-redux";

export const StartDisplay = () => {

    const store = useSelector((store) => store);
    const status = store.gameStatus.gameStatus

    return (

        <Container status={status}>
            {status === "home" ? 
                <img className="start__image" src={startImage} alt="" />
                :
            status === "success" ?
                <img className="start__image" src={success} alt="" />
                :
            status === "loss" ?

                <img className="start__image" src={nextTime} alt="" />
                :
                ""
            }
        </Container>
    )

}