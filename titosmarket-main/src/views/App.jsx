import { BrowserRouter } from "react-router-dom";

import Header from "../components/layout/Header";
import Main from "../components/layout/Main";

import "./App.scss"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Main />
        </BrowserRouter>
    )
}


export default App;