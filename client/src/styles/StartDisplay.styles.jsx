
import styled from "styled-components";

const Container = styled.div`
    /* border : 1px solid; */
    width: 92%;
    margin: .4vw auto auto auto;
    height: ${(props) => (props.status === "start" ? "44%" : "54%")};
    border-radius: .6vw;
    display: flex;
    cursor: pointer;
    .start__image {
        
        border : 1px solid silver;
        width: 100%;
        height: 100%;
        border-radius: .5vw;
        background-color: white;
    }
`

export { Container };