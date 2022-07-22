import React from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import style from './Loginform.module.scss'


export interface LoginFields {
    email: string
    password: string

}

export const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFields>()
    const onSubmitUserData: SubmitHandler<LoginFields> = data => {
        return data
    }


    return <form className={style.form} onSubmit={handleSubmit(onSubmitUserData)}>
        <input {...register('email', {
            required: 'Введите почту'
        })}/>
        {errors?.email && <div>{errors.email.message}</div>}
        <input/>
        <button>Войти</button>
    </form>
}