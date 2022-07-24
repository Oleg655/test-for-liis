import React from 'react';
import './App.module.scss';
import {SecondScreen} from "./ui/secondScreen/SecondScreen";
import {Route, Routes} from "react-router-dom";
import {FirstScreen} from "./ui/firstScreen/FirstScreen";
import style from './App.module.scss'

function App() {
    return (
        <div className={style.App}>
            <Routes>
                <Route path='/' element={<FirstScreen/>}/>
                <Route path='/hotels' element={<SecondScreen/>}/>
            </Routes>


        </div>
    );
}

export default App;
