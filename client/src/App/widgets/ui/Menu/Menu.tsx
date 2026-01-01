import { Box, Button, Grid } from '@mui/material';
import cls from './Menu.module.scss';
import { useState } from 'react';

import homeText from '../../../shared/assets/png/homeText.png';
import dishes_modal from '../../../shared/assets/svg/dishes_modal.svg';

export const Menu = () => {
    const [showModals, setShowModals] = useState(false);

    const handleShowButton = () => {
        setShowModals(!showModals);
    };

    return (
        <>
            <Box sx={{ position: "absolute", top: 322, left: 175, }}>
                <img className={cls.homeText} src={homeText} alt="" />
                <Button onClick={handleShowButton} className={cls.btnn} sx={{ display: "block", width: "137px", height: "47px", background: "#FF7400", color: "#ffffff", borderRadius: "0", marginLeft: "180px", marginTop: "21px", transition: "all 0.5s ease", position: "absolute", "&:hover": { background: "#9d4700" } }}>
                    {
                        showModals ? "CLOSE" : "VIEW MENU"
                    }
                    {
                        showModals && (
                            <Box sx={{ position: "absolute", top: "0", left: "0", marginLeft: "45px", marginTop: "-300px", display: "flex", alignItems: "center", justifyContent: "center", gap: "28px" }}>
                                <Grid className={cls.cards} style={{ width: "240px", height: "229px", background: "#ffffff", borderRadius: "0px", }}>
                                    <img style={{ marginTop: "27px" }} src={dishes_modal} alt="" />
                                    <div style={{ marginTop: "13px" }}>
                                        <h5 style={{ fontSize: "15px", color: "#000" }} className={cls.modal_name}>Магическая Атмосфера</h5>
                                        <p className={cls.modal_description}>В нашем заведении царит магическая атмосфера наполненная вкусными ароматами</p>
                                    </div>
                                </Grid>
                                <Grid className={cls.cards} style={{ width: "240px", height: "229px", background: "#ffffff", borderRadius: "0px", }}>
                                    <img style={{ marginTop: "27px" }} src={dishes_modal} alt="" />
                                    <div style={{ marginTop: "13px" }}>
                                        <h5 style={{ fontSize: "15px", color: "#000" }} className={cls.modal_name}>Лучшее качество Еды</h5>
                                        <p className={cls.modal_description}>Качество нашей <span style={{ display: "inline-block" }}>Еды - отменное!</span></p>
                                    </div>
                                </Grid>
                                <Grid className={cls.cards} style={{ width: "240px", height: "229px", background: "#ffffff", borderRadius: "0px", }}>
                                    <img style={{ marginTop: "27px" }} src={dishes_modal} alt="" />
                                    <div style={{ marginTop: "13px" }}>
                                        <h5 style={{ fontSize: "15px", color: "#000" }} className={cls.modal_name}>Недорогая Еда</h5>
                                        <p className={cls.modal_description}>Стоимость нашей Еды зависит только от ее количества. Качество <span style={{ display: "inline-block" }}>всегда на высоте!</span></p>
                                    </div>
                                </Grid>
                            </Box>
                        )
                    }
                </Button>
            </Box>
        </>
    )
};