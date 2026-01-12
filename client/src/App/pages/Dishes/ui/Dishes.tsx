import cls from './Dishes.module.scss'
import { Link } from 'react-router-dom'

import dishes_logo from '../../../shared/assets/svg/dishes_logo.svg'
import dishes_pizza from '../../../shared/assets/svg/dishes_pizza.svg'
import dishes_burger from '../../../shared/assets/png/dishes_burger.png'
import arrow_right from "../../../shared/assets/png/blackright.png";
import left from '../../../shared/assets/png/left.png'

export const Dishes = () => {

    return (
        <div className={cls.dishes}>
            <div className={cls.ret}>
                <span>Назад</span>
                <Link to="/menu">
                    <img className={cls.arrow_btn} src={left} alt="" />
                </Link>
            </div>
            <div className={cls.ret2}>
                <span>Назад</span>

                <Link to="/chefs">
                    <img src={arrow_right} alt="" />
                </Link>
            </div>
            <div className={cls.dishes_wrap}>
                <img src={dishes_logo} alt="" />
                <div className={cls.images_dishes}>
                    <img src={dishes_pizza} alt="" />
                    <div className={cls.burgers_block}>
                        <div className={cls.burger_item}>
                            <img src={dishes_burger} alt="" />
                            <span>Гамбургер мини -------------------------- 220 ₽</span>
                        </div>
                        <div className={cls.burger_item2}>
                            <img src={dishes_burger} alt="" />
                            <span>Гамбургер мини -------------------------- 220 ₽</span>
                        </div>
                        <div className={cls.burger_item2}>
                            <img src={dishes_burger} alt="" />
                            <span>Гамбургер мини -------------------------- 220 ₽</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}