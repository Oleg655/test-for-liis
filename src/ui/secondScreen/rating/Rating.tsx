import React from 'react'
import style from './Rating.module.scss'
import {Star} from "../../../assets/Star";

type Rating = {
    stars: number

}

export const Rating = (props: Rating) => {

    const liteStars: number[] = Array(props.stars).fill(1)
    const grayStars = Array(5 - props.stars).fill(1)

    return <div>
        {liteStars.map((star) => {
            return <Star  className={style.lightStar}/>
        })}
        {grayStars.map((star)=>{
            return <Star  className={style.grayStar}/>
        })}
    </div>
}