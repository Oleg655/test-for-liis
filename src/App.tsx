import React from 'react';
import './App.module.scss';
import {FirstScreen} from "./ui/startScreen/FirstScreen";
import {SecondScreen} from "./ui/secondScreen/SecondScreen";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                {/*<Route path='/' element={<FirstScreen/>}/>*/}
                <Route path='/' element={<SecondScreen/>}/>
            </Routes>


        </div>
    );
}

export default App;
