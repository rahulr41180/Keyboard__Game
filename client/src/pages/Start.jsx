
import { Container } from "../styles/Start.styles";

import { Navbar } from "../components/Navbar";
import { Display } from "../components/Display";
import { StartButton } from "../components/StartButton";

export const Start = () => {

    return (
        <Container>
            <Navbar />

            <Display />
            <StartButton status={"start"} />
        </Container>
    )

}