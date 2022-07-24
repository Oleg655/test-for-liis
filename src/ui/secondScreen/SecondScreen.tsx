import React from 'react'
import {SearchHotelForm} from "./forms/SearchtHotelForm";
import {List} from "./hotels/List";
import {SelectedHotelsForm} from "./forms/SelectedHotelsForm";
import style from './SecondScreen.module.scss'
import {Images} from "./hotels/Images";
import {Header} from "./hotels/Header";
import {useNavigate} from "react-router-dom";

export const SecondScreen = () => {
const navigate = useNavigate()
    return <div>
        <div className={style.header}>
            <h3>Simple Hotel Check</h3>
            <div className={style.logout}>
               <span onClick={()=> navigate('/')}>Выход</span>
            </div>
        </div>
        <div className={style.mainBlock}>

            <div className={style.sideBarBlock}>
                <SearchHotelForm/>
                <SelectedHotelsForm/>
            </div>
            <div className={style.presentationBlock}>
                <Header/>
                <Images/>
                <List/>
            </div>


        </div>
    </div>

}