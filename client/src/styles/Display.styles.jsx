
import styled from "styled-components";

const Container = styled.div`
    /* border : 1px solid; */
    width: 95%;
    padding : .4vw;
    height: ${(props) => (props.status === "start" ? "48%" : "60%")};
    .display__heading {
        /* border : 1px solid; */
        width: fit-content;
        margin: auto;
        
        color: white;
        font-size: 1.4vw;
        font-weight: 600;
    }
    .game__instruction {
        /* border : 1px solid; */
        width: fit-content;
        margin: .4vw auto auto auto;
        color: white;

        font-size: 1vw;
        text-align: center;
    }
    .timer__show {
        /* border : 1px solid; */
        width: fit-content;
        margin : .4vw auto auto auto;
        color: white;
        font-size: 1vw;
    }
    .best__time {
        /* border : 1px solid; */
        width: fit-content;
        margin : .4vw auto auto auto;
        color: white;
        font-size: 1vw;
    }
`

export { Container };