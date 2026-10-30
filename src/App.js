import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components'
import "./App.css";
import { Return } from "three/tsl";
function App() {
    Return(
        <BrowserRouter>
            <div className="relative bg-primary">
                <div className=" .bg-hero-pattern bg-cover. bg-no-repeat bg-centre">
                    <Navbar /></div>

            </div>

        </BrowserRouter>
    )
}
export default App
