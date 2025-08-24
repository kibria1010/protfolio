import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import FooterComponent from "./FoaterComponent"

import './Protfolioo.css'
import ContactComponent from "./ContactComponent";
import Dropdown from "./Dropdown";
import Learning from "./Learning";

export default function ProtfolioComponent() {
    return (
        <div className="ProtfolioComponent">
            <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={ <WelcomeComponent/> }/>
                        <Route path='/contact' element={ <ContactComponent/> }/>
                        <Route path='/dropdown' element={ <Dropdown/> }/>
                        <Route path='/learning' element={ <Learning/> }/>
                    </Routes>
                     <FooterComponent/>
            </BrowserRouter>
        </div>
    )
}