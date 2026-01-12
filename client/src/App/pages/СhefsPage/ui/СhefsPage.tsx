import cls from './СhefsPage.module.scss'
import chefs from '../../../shared/assets/svg/chefs.svg'
import chef1 from '../../../shared/assets/png/chef1.png'
import chef2 from '../../../shared/assets/png/chef2.png'
import chef3 from '../../../shared/assets/png/chef3.png'
import arrow_left from "../../../shared/assets/png/left.png";
import { Link } from 'react-router-dom'

export const СhefsPage = () => {
    return (
        <div className={cls.chefs}>
            <div className={cls.ret}>
                <span>Назад</span>

                <Link to="/dishes">
                    <img src={arrow_left} alt="" />
                </Link>
            </div>
            <div className='container'>
                <div className={cls.chefs_wrap}>
                    <img className={cls.chefs_logo} src={chefs} alt="" />
                    <section>
                        <img src={chef1} alt="" />
                        <img src={chef2} alt="" />
                        <img className={cls.chefs3} src={chef3} alt="" />
                    </section>
                </div>
            </div>
        </div>
    )
}