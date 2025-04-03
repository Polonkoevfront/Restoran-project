import cls from './Dishes.module.scss'
import dishes_logo from '../../../shared/assets/svg/dishes_logo.svg'
import dishes_pizza from '../../../shared/assets/svg/dishes_pizza.svg'
import dishes_burger from '../../../shared/assets/png/dishes_burger.png'
import { Box, Typography } from '@mui/material'
import left from '../../../shared/assets/png/left.png'
import { Link } from 'react-router-dom'
import right from '../../../shared/assets/png/right.png'

export const Dishes = () => {

    return (
        <div className={cls.dishes}>
            <div className='container'>
            <h6 style={{position: "absolute", top: "", left: "", marginLeft: "-55px", marginTop: "10px"}}>Назад</h6>
            <Link to="/menu">
            <img style={{position: "absolute", top: "", left: "", width: "40px", marginLeft: "-55px", marginTop: "35px", cursor: "pointer"}} src={left} alt="" />
            </Link>
                <div className={cls.dishes_wrap}>
                <div>
                    <img style={{position: "absolute", top: "100px", left: "660px"}} src={dishes_logo} alt="" />
                    <div style={{position: "absolute", top: "235px", left: "210px",}} className={cls.images_dishes}>
                        <img style={{marginLeft: "155px"}} src={dishes_pizza} alt="" />
                        <div style={{position: "absolute", top: "1px", left: "505px", flexDirection: "column",}} className={cls.third_images_dishes}>
                        <img style={{display: "block", width: "106px", height: "106px", marginTop: "19px"}} src={dishes_burger} alt="" />
                        <img style={{display: "block", width: "106px", height: "106px", marginTop: "19px"}} src={dishes_burger} alt="" />
                        <img style={{display: "block", width: "106px", height: "106px",  marginTop: "19px"}} src={dishes_burger} alt="" />
                    </div>
                    </div>
                    <Box sx={{display: "flex", flexDirection: "column", position: "absolute", top: "190px", left: "850px"}}>
                        <Typography style={{marginTop: "100px"}}>Гамбургер мини -------------------------- 220 ₽</Typography>
                        <Typography style={{marginTop: "100px"}}>Гамбургер мини -------------------------- 220 ₽</Typography>
                        <Typography style={{marginTop: "100px"}}>Гамбургер мини -------------------------- 220 ₽</Typography>
                    </Box>
                </div>
                </div>
            </div>
        </div>
    )
}