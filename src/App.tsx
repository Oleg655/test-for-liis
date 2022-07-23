import React from 'react';
import './App.module.scss';
import {SecondScreen} from "./ui/secondScreen/SecondScreen";
import {Route, Routes} from "react-router-dom";
import {FirstScreen} from "./ui/firstScreen/FirstScreen";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<FirstScreen/>}/>
                <Route path='/hotels' element={<SecondScreen/>}/>
            </Routes>


        </div>
    );
}

export default App;
