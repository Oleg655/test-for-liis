import React from 'react'
import {SearchHotelForm} from "./forms/SearchtHotelForm";
import {List} from "./hotels/List";
import {SelectedHotelsForm} from "./forms/SelectedHotelsForm";

export const SecondScreen = () => {
    return <div>
        <SearchHotelForm/>
        <List/>
        <SelectedHotelsForm/>
    </div>
}