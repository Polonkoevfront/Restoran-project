import React from "react"
import cls from './HomePage.module.scss'
import { Navbar } from "../../../widgets/ui/Navbar/Navbar"
import logo from '../../../shared/assets/png/LOGO.png'

export const HomePage = () => {

    return (
        <> 
        <div className={cls.home}>
            <div className="container">
                <div className={cls.home_wrap}>
                    <img className={cls.logo} src={logo} alt="" />
                </div>
            </div>
        </div>
        <Navbar/>
        </>
    )
}