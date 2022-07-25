import React from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import style from './Loginform.module.scss'
import {useNavigate} from "react-router-dom";


export interface LoginFields {
    email: string
    password: string

}

export const LoginForm = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}, reset} = useForm<LoginFields>({
        mode: 'onBlur'
    })
    const onSubmitUserData: SubmitHandler<LoginFields> = data => {
        if (data) {
            navigate("/hotels");
        }
        reset()
    }


    return <form className={style.form} onSubmit={handleSubmit(onSubmitUserData)}>
        <h1 className={style.title}>Simple Hotel Check</h1>
        <label className={style.label} >
            Логин
            <input className={style.input} {...register('email', {
                required: 'Введите почту',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Непрвильный email или пароль'
                }
            },)}/>
            <div className={style.error}>
                {errors.email && <div>{errors.email.message}</div>}
            </div>
        </label>


        <label className={style.label} >
            Пароль
            <input className={style.input} {...register('password', {
                required: 'Введите пароль',
                pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: 'Пароль должен иметь латинские буквы'
                }
            },)}/>
            <div className={style.error}>
                {errors.password && <div>{errors.password.message}</div>}
            </div>
        </label>



        <button className={style.button}>Войти</button>
    </form>
}