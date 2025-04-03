import cls from './HistoryPage..module.scss'
import { Box, Button, Grid, Typography } from "@mui/material"
import history_text from '../../../shared/assets/svg/history_text.svg'
import images from '../../../shared/assets/svg/images.svg'
import text_footer_history from '../../../shared/assets/svg/text_footer_history.svg'
import {Link} from 'react-router-dom'
import left from '../../../shared/assets/png/left.png'

export const HistoryPage = () => {

    return (
        <div className={cls.history}>
            <div className="container">
                <div className={cls.history_wrap}>
                  <h6 style={{position: "absolute", top: "", left: "", marginLeft: "-55px", marginTop: "13px"}}>Назад</h6>
                  <Link to="/about">
                  <img style={{position: "absolute", top: "", left: "", width: "40px", marginLeft: "-55px", marginTop: "35px", cursor: "pointer"}} src={left} alt="" />
                  </Link>
                  <Box>
                    <img style={{width: "320px", height: "55px", marginLeft: "122px", marginTop: "30px"}} src={history_text} alt="" />
                    <Typography style={{fontSize: "10x", fontWeight: "400", color: "gray", marginRight: 730, marginTop: "10px", textAlign: "center"}}>
                    <span style={{display: "block",}}>Как и у любого другого самобытного места, у нас есть</span>
                    <span style={{display: "block"}}>своя, особая история. Идея ресторана пришла</span>
                    <span style={{display: "block"}}>основателям неожиданно. Во время прогулки по лесу</span>
                    <span style={{display: "block"}}>создатель нашего ресторана застрял в сотнях</span>
                    <span style={{display: "block"}}>километров от ближайшего населенного пункта. Вдали</span>
                    <span style={{display: "block"}}>от цивилизации и связи им пришлось навремя</span>
                    <span style={{display: "block"}}>обустровать себе нехитрый быт, добывать и готовить</span>
                    <span style={{display: "block"}}>себе еду.</span>
                    </Typography>
                    <Grid container sx={{marginLeft: "255px", marginTop: "55px", gap: "45px"}}>
                    <Typography style={{fontSize: "36px", fontWeight: 400, color: "#BC9060", textAlign: "center"}}>93<span style={{display: "block", fontSize: "16px", fontWeight: 400, color: "#000"}}>Напитки</span></Typography>
                    <Typography style={{fontSize: "36px", fontWeight: 400, color: "#BC9060", textAlign: "center"}}>206<span style={{display: "block", fontSize: "16px", fontWeight: 400, color: "#000"}}>Еда</span></Typography>
                    <Typography style={{fontSize: "36px", fontWeight: 400, color: "#BC9060", textAlign: "center"}}>71<span style={{display: "block", fontSize: "16px", fontWeight: 400, color: "#000"}}>Закуски</span></Typography>
                    <img style={{marginLeft: "140px", marginTop: "-360px"}} src={images} alt="" />
                    </Grid>
                  </Box>
                  <footer className={cls.footer_history}>
                    <div>
                        <img style={{marginLeft: "100px", marginTop: "42px"}} src={text_footer_history} alt="" />
                        <Typography style={{fontSize: "20px", color: "#ffffff", marginLeft: "160px", marginTop: "15px"}}>Только в этом месяце бизнес-ланч от 250 ₽</Typography>
                        <Button sx={{width: "157px", height: "47px", background: "#FF7400", color: "#ffffff", borderRadius: "0", marginLeft: "1190px", marginTop: "-135px",  "&:hover":{background: "#9d4700"}}}>ЗАКАЗ СТОЛИКА</Button>
                    </div>
                  </footer>
                </div>
            </div>
        </div>
    )
}