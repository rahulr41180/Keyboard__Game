
import { Container } from "../styles/Keyboard.styles";

import PublishIcon from '@mui/icons-material/Publish';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

export const Keyboard = () => {

    return (
        <Container>
            <div className="QToP">
                <button className="QP">Q</button>
                <button className="QP">W</button>
                <button className="QP">E</button>
                <button className="QP">R</button>
                <button className="QP">T</button>
                <button className="QP">Y</button>
                <button className="QP">U</button>
                <button className="QP">I</button>
                <button className="QP">O</button>
                <button className="QP">P</button>
            </div>
            <div className="AToL">
                <button className="AL">A</button>
                <button className="AL">S</button>
                <button className="AL">D</button>
                <button className="AL">F</button>
                <button className="AL">G</button>
                <button className="AL">H</button>
                <button className="AL">J</button>
                <button className="AL">K</button>
                <button className="AL">L</button>
            </div>
            <div className="ZToM">
                <button className="ZM"><PublishIcon /></button>
                <button className="ZM">Z</button>
                <button className="ZM">X</button>
                <button className="ZM">C</button>
                <button className="ZM">V</button>
                <button className="ZM">B</button>
                <button className="ZM">N</button>
                <button className="ZM">M</button>
                <button className="ZM"><ArrowBackIcon /></button>
            </div>
            <div className="space">
                <button className="go">123</button>
                <button className="go">space</button>
                <button className="go">Go</button>
            </div>
            <div className="emoji">
                <button className="mice"><InsertEmoticonIcon /></button>
                <button className="mice"><MicIcon /></button>
            </div>
        </Container>
    )

}