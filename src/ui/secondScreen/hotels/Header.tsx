import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import style from './Header.module.scss'
import {generateMonth} from "../../../features/features";

export const Header = () => {
    const cityName = useSelector<AppStateType, string>(state => state.hotels.cityName)
    const date = useSelector<AppStateType, string>(state => state.searchData.date)
    const months = useSelector<AppStateType, string[]>(state => state.searchData.months)



    return <div className={style.headerBlock}>
        <div className={style.titlesBlock}>
            <h1 className={style.name}>Отели</h1>
            <h1 className={style.cityName}>{cityName}</h1>

        </div>
        <span>
            {generateMonth(date, months)}
        </span>

    </div>
}