
import './App.css';

import { Start } from "./pages/Start";
import { Game } from "./pages/Game";
import { Success } from "./pages/Success";
import { Loss } from "./pages/Loss";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const store = useSelector((store) => store);
  console.log('store:', store)
  const status = store.gameStatus.gameStatus;
  console.log('status:', status)
  return (
    <>
      {status === "home" ?
        <Start />
        : status === "start" ?
        <Game />
        : status === "success" ?

        <Success />
        : status === "loss" ?
        <Loss />
        :
        ""
      }
    </>
  );
}

export default App;
