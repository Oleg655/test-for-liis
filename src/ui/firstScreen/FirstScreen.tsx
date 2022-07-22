import React from "react";
import style from './FirstScreen.module.scss'
import {LoginForm} from "./lofinForm/LoginForm";

export const FirstScreen = () => {
    return <div className={style.screenBackground}>
        <LoginForm/>
    </div>
}