
import styled from "styled-components";

const Container = styled.div`
    /* border : 1px solid; */
    width: 95%;
    padding: .4vw;
    border-radius: 1vw 1vw 0 0;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left__box {
        /* border : 1px solid; */
        width: fit-content;
        .time {
            /* border : 1px solid; */
            margin: auto auto auto .1vw;
            font-size: 1.2vw;
        }
    }
    .right__box {
        /* border : 1px solid; */
        width: 50%;
        display: flex;
        justify-content: flex-end;
        .battery {
            /* border : 1px solid; */
        }
    }
`

export { Container };