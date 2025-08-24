import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import FooterComponent from "./FoaterComponent"
import { useEffect } from 'react';

import './Protfolioo.css'
import ContactComponent from "./ContactComponent";
import Dropdown from "./Dropdown";
import Learning from "./Learning";

 
export default function ProtfolioComponent() {

    useEffect(() => { 
        document.title = 'Md. Golam Kibria - Protfolio';}, 
        [])

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
                     
            </BrowserRouter>
        </div>
    )
}