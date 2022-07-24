import React from 'react'
import {SearchHotelForm} from "./forms/SearchtHotelForm";
import {List} from "./hotels/List";
import {SelectedHotelsForm} from "./forms/SelectedHotelsForm";
import style from './SecondScreen.module.scss'
import {Images} from "./hotels/Images";

export const SecondScreen = () => {
    return <div className={style.mainBlock}>
        <div className={style.sideBarBlock}>
            <SearchHotelForm/>
            <SelectedHotelsForm/>
        </div>
        <div className={style.presentationBlock}>
            <Images/>
            <List/>
        </div>


    </div>
}