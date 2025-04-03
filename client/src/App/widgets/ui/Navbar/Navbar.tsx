import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import cls from './Navbar.module.scss'
import cart from '../../../shared/assets/svg/cart.svg'
import phone from '../../../shared/assets/svg/phone.svg'
import homeText from '../../../shared/assets/png/homeText.png'
import { useState } from 'react'
import dishes_modal from '../../../shared/assets/svg/dishes_modal.svg'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [showmodals, setShowModals] = useState(false)

  const handleShowButton = () => {
    setShowModals(!showmodals)
  }

    return (
      <>
        <div className={cls.navbar}>
          <div className='container'>
            <div className={cls.nav_wrap}>
                <div className={cls.nav_sections}>
                  <ul className={cls.menu_section}>
                    <li>
                      <Link to="/" style={{textDecoration: "none"}} className={cls.a}>
                      ГЛАВНАЯ
                      </Link>
                    </li>
                    <li>
                      <Link to="/menu" style={{textDecoration: "none",}} className={cls.a}>
                        МЕНЮ
                      </Link>
                      </li>
                    <li>
                      <Link to="/about" style={{textDecoration: "none",}} className={cls.a}>О НАС</Link>
                    </li>
                    <li>БРОНЬ</li>
                    <Box>
                    <Link to="/menu2">
                      <img style={{position: "absolute", top: 77, left: 845}} src={cart} alt="" />
                      </Link>
                      <Divider style={{width: "1px", height: "51px", background: "#fff", marginLeft: "345px", marginTop: "-41px"}}></Divider>
                      <Grid style={{position: "absolute", top: 53, left: 920,}}>
                        <img style={{position: "fixed"}} src={phone} alt="" />
                        <Typography sx={{fontSize: "18px", fontWeight: 700, color: "#ffffff", marginLeft: "27px", marginTop: "-2px", transition: "all 0.3s ease", "&:hover":{color: "red"}}}>+999-888-76-54</Typography>
                        <Typography sx={{fontSize: "14px", fontWeight: 400, color: "#ffffff"}}>Свяжитесь с нами для 
                        <span style={{display: "block"}}>бронирования</span></Typography>
                      </Grid>
                    </Box>
                    <Button className={cls.btn} sx={{position: "absolute", top: 56, left: 1120, width: "157px", height: "47px", background: "#FF7400", color: "#ffffff", borderRadius: "0px", transition: "all 0.5s ease", "&:hover":{background: "#9d4700"} }}>
                      <Link to="#" style={{textDecoration: "none", color: "#ffffff"}} >ЗАКАЗ СТОЛИКА</Link>
                    </Button>
                    <Box sx={{position: "absolute", top: 322, left: 175,}}>
                      <img className={cls.homeText} src={homeText} alt="" />
                      <Button onClick={handleShowButton} className={cls.btnn} sx={{display: "block", width: "137px", height: "47px", background: "#FF7400", color: "#ffffff", borderRadius: "0", marginLeft: "180px", marginTop: "21px", transition: "all 0.5s ease", position: "absolute", "&:hover":{background: "#9d4700"}}}>
                        {
                          showmodals ? "CLOSE" : "VIEW MENU"
                        }
                        {
                          showmodals && (
                            <Box sx={{position: "absolute", top: "0", left: "0", marginLeft: "45px", marginTop: "-300px", display: "flex", alignItems: "center", justifyContent: "center", gap: "28px"}}>
                            <Grid className={cls.cards} style={{width: "240px", height: "229px", background: "#ffffff", borderRadius: "0px",}}>
                                <img style={{marginTop: "27px"}} src={dishes_modal} alt="" />
                                <div style={{marginTop: "13px"}}>
                                <h5 style={{ fontSize: "15px", color: "#000"}} className={cls.modal_name}>Магическая Атмосфера</h5>
                                <p className={cls.modal_description}>В нашем заведении царит магическая атмосфера наполненная вкусными ароматами</p>
                                </div>
                              </Grid> 
                            <Grid className={cls.cards} style={{width: "240px", height: "229px", background: "#ffffff", borderRadius: "0px",}}>
                                <img style={{marginTop: "27px"}} src={dishes_modal} alt="" />
                                <div style={{marginTop: "13px"}}>
                                <h5 style={{ fontSize: "15px", color: "#000"}} className={cls.modal_name}>Лучшее качество Еды</h5>
                                <p className={cls.modal_description}>Качество нашей <span style={{display: "inline-block"}}>Еды - отменное!</span></p>
                                </div>
                              </Grid> 
                            <Grid className={cls.cards} style={{width: "240px", height: "229px", background: "#ffffff", borderRadius: "0px",}}>
                                <img style={{marginTop: "27px"}} src={dishes_modal} alt="" />
                                <div style={{marginTop: "13px"}}>
                                <h5 style={{ fontSize: "15px", color: "#000"}} className={cls.modal_name}>Недорогая Еда</h5>
                                <p className={cls.modal_description}>Стоимость нашей Еды зависит только от ее количества. Качество <span style={{display: "inline-block"}}>всегда на высоте!</span></p>
                                </div>
                              </Grid> 
                            </Box>
                          )
                        }
                      </Button>
                    </Box>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        {/* https://avatars.mds.yandex.net/i?id=4c54be5603d557f93fd908a102d4c2e403a3402f-5884257-images-thumbs&n=13 */}
        </>
    )
}