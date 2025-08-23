import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import FooterComponent from "./FoaterComponent";

import './Protfolioo.css'

export default function ProtfolioComponent() {
    return (
        <div className="ProtfolioComponent">
            <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={ <WelcomeComponent/> }/>
                    </Routes>
                    <FooterComponent/>
            </BrowserRouter>
        </div>
    )
}