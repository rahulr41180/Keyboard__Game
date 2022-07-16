
import styled from "styled-components";

const Container = styled.div`
    /* border : 1px solid; */
    width: 99.88%;
    display: flex;
    height: 7%;
    .text__input {
        /* border : 1px solid; */
        width: 62.2%;
        padding: .2vw 1vw;

        font-size: 1.2vw;
        outline : none;
        text-align: center;
        font-weight: 600;
        height: 84%;
        border : 0;
    }
    .reset__button {
        /* border : 1px solid; */

        width: 28.4%;
        padding: .2vw .4vw;
        font-size: 1.2vw;

        cursor: pointer;
        background-color: #f57d8d;
        color : white;
        outline: none;
        border : 0;
        height: 98.8%;
    }
`

export { Container };