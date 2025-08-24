import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import FooterComponent from "./FoaterComponent"

import './Protfolioo.css'
import ContactComponent from "./ContactComponent";
import ProjectComponent from "./ProjectComponent";
import Dropdown from "./Dropdown";

export default function ProtfolioComponent() {
    return (
        <div className="ProtfolioComponent">
            <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={ <WelcomeComponent/> }/>
                        <Route path='/contact' element={ <ContactComponent/> }/>
                        <Route path='/project' element={ <ProjectComponent/> }/>
                        <Route path='/dropdown' element={ <Dropdown/> }/>
                    </Routes>
                     <FooterComponent/>
            </BrowserRouter>
        </div>
    )
}