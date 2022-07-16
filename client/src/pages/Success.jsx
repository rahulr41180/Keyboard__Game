
import { Container } from "../styles/Start.styles";

import { Navbar } from "../components/Navbar";
import { Display } from "../components/Display";
import { StartButton } from "../components/StartButton";

export const Success = () => {

    return (
        <Container>
            <Navbar />
            <Display />

            <StartButton status={"home"} />
        </Container>
    )

}