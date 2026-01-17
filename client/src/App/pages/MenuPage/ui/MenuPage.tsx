import { useState } from "react"
import cls from './MenuPage.module.scss'
import { Box, Button, IconButton, Modal, Typography } from "@mui/material"
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom"

import right from '../../../shared/assets/png/right.png'
import burger_modal2 from '../../../shared/assets/png/burger_modal2.png'
import whiteleft from '../../../shared/assets/png/whiteleft.png'
import menu_text from '../../../shared/assets/svg/menu_text.svg'
import burger from '../../../shared/assets/svg/burger.svg';
import { Card } from "../../../widgets/ui/Card/Card";

const cardsModal = [
    { photo: "https://www.schlotzskys.com/-/media/schlotzskys/ingredients/slicedtomato-400.png?v=1&d=20180213T145515Z", name: "Помидор", price: "39₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=870ca6f86a9d20dd2189c219b58a7b3d1d210b80-4219883-images-thumbs&n=13", name: "Котлета говяжья", price: "49₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=e223847a227de888596f22f4ab301935-5234309-images-thumbs&n=13", name: "Салат айсберг", price: "29₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=f30be13c78bbf360b285d77017adbbce4a217bee-11547894-images-thumbs&n=13", name: "Двойной чеддер", price: "22₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=1663f370ba37e474e937603118bbfd8e30e481a6538c35e1-12788981-images-thumbs&n=13", name: "хрустящий лук", price: "25₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=57a5fa9805ddaa02c6005e85d7058e66a6a02455-12405273-images-thumbs&n=13", name: "Соус", price: "19₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=ed38f5c614da74c307c751530efbcf1d6f93fbfb561262c6-4599990-images-thumbs&n=13", name: "Лук", price: "29₽" },
];

export const MenuPage = () => {
    const [showModalCard, setShowModalCard] = useState<number | null>(null)

    const onOpen = (id: number) => {
        setShowModalCard(id)
    };

    const onClose = () => {
        setShowModalCard(null)
    };

    return (
        <>
            <div className={cls.menu}>
                <div className="container">
                    <Card image="" title="" description="" />
                    <div className={cls.menu_wrap}>
                        <h6 style={{ position: "absolute", top: "", left: "", color: "#ffffff", marginLeft: "-55px", marginTop: "30px" }}>Назад</h6>
                        <Link to="/">
                            <img style={{ position: "absolute", top: "", left: "", width: "40px", marginLeft: "-55px", marginTop: "60px", cursor: "pointer" }} src={whiteleft} alt="" />
                        </Link>
                        <h6 style={{ position: "absolute", left: "", top: "", color: "#ffffff", marginLeft: "1277px", marginTop: "22px" }}>Наши блюда</h6>
                        <Link to="/dishes">
                            <img style={{ position: "absolute", left: "", top: "", width: "45px", marginLeft: "1300px", marginTop: "50px", cursor: "pointer" }} src={right} alt="" />
                        </Link>
                        <section className={cls.cards_menu}>
                            <img src={menu_text} style={{
                                position: "absolute", top: "", left: "", width: "235px", color: "#ffffff", fontSize: "33px", fontWeight: "400", marginTop: "-470px",
                            }} />
                            <article onClick={() => onOpen(1)} className={cls.card_menu}>
                                <img style={{ cursor: "pointer", }} className={cls.burger_card} src={burger} alt="" />
                                <div style={{ marginTop: "27px" }} className={cls.price_menu}>
                                    <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "500" }}>Гамбургер макси</h3>
                                    <Typography style={{ fontSize: "13.5px", textAlign: "center" }}>Максимально толстый <span style={{ display: "block" }}>слой мяса</span></Typography>
                                    <Button sx={{ width: "175px", height: "40px", background: "#D67E34", color: "#ffffff", marginLeft: "60px", marginTop: "20px", borderRadius: "", transition: "all 0.3s ease", "&:hover": { background: "#9b4600" } }}>ЗАКАЗАТЬ</Button>
                                </div>
                            </article>
                            <Card onClick={() => onOpen(1)} image="" title="" description="" />

                            {showModalCard === 1 && (
                                <Modal sx={{ position: "absolute", top: "300px", left: "600px", }}
                                    open={showModalCard === 1}
                                    onClose={onClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={{ width: "700px", height: "480px", background: "#ffffff", borderRadius: "15px", marginLeft: "-184px", marginTop: "-160px", }}>
                                        <IconButton className={cls.close_btn} onClick={onClose} sx={{ background: "#FFFFFF", color: "#000", marginLeft: "702px", marginTop: "-65px", transition: "all 0.3s ease", "&:hover": { background: "#FFFFFF" } }} aria-label="close">
                                            <Close />
                                        </IconButton>
                                        <img className={cls.burger_modal} src={burger_modal2} alt="" />
                                        <aside className={cls.menu_aside}>
                                            <h3 className={cls.header_burger_modal}>Гамбургер макси</h3>
                                            <span><span style={{ fontWeight: "500" }}>Новинка для вас:</span> Биштекс из сочной говядины, маринованные огурчики, хрустящий лук, острый соус Astoria, свежий салат Айсберг, плавленный Чеддер, спелый помидор, обычный лук.</span>
                                            <div className={cls.text_burger}>
                                                <h5>Выбор ингредиентов</h5>
                                                <div className={cls.text_menu}>
                                                    <button className={cls.item1} style={{ display: "inline-block", borderRadius: "16px" }}>Маринованные огурцы</button>
                                                    <button className={cls.item2} style={{ borderRadius: "16px" }}>Хрустящий лук</button>
                                                    <button className={cls.item3} style={{ display: "inline-block", marginTop: "10px", borderRadius: "16px" }}>Острый соус</button>
                                                    <button className={cls.item4} style={{ display: "inline-block", borderRadius: "16px" }}>cалат Айсберг</button>
                                                    <div className={cls.text_footer}>
                                                        <button className={cls.item5} style={{ width: "130px", textAlign: "left", borderRadius: "16px" }}>Чеддер</button>
                                                        <button className={cls.item6} style={{ width: "130px", textAlign: "left", borderRadius: "16px" }}>Помидор</button>
                                                        <button className={cls.item7} style={{ width: "130px", textAlign: "left", borderRadius: "16px" }}>Лук</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cls.text_burger2}>
                                                <h5>Выбор по вкусу</h5>
                                                <section className={cls.cards_sections}>
                                                    {
                                                        cardsModal.map((item, index) => (
                                                            <article className={cls.card} style={{ width: "106px", height: "145px", borderRadius: "10px", marginTop: "8px" }} key={index}>
                                                                <img style={{ position: "absolute", top: "", left: "", width: "55px", marginLeft: "25px", marginTop: "13px", }} src={item.photo} alt="" />
                                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "77px", textAlign: "center" }}>
                                                                    <span style={{ fontSize: "13px", position: "absolute", top: "", left: "", marginTop: '8px', }}>
                                                                        {item.name.includes(" ") ? (
                                                                            <>
                                                                                {item.name.split(" ")[0]}
                                                                                <br />
                                                                                {item.name.split(" ")[1]}
                                                                            </>
                                                                        ) : (
                                                                            item.name
                                                                        )}
                                                                    </span>
                                                                    <h5 style={{ position: "absolute", left: "", top: "", marginTop: "87px", }}>{item.price}</h5>
                                                                </div>
                                                            </article>
                                                        ))
                                                    }
                                                </section>
                                            </div>
                                        </aside>
                                        <Button sx={{ width: "250px", height: "47px", background: "#D67E34", color: "#ffffff", borderRadius: "6px", position: "absolute", top: "0", left: "0", marginLeft: "190px", marginTop: "260px", transition: "transform all 0.3s ease", "&:hover": { background: "#9b4600" } }}>ЗАКАЗАТЬ</Button>
                                    </Box>
                                </Modal>
                            )}
                            {showModalCard === 2 && (
                                <Modal sx={{ position: "absolute", top: "300px", left: "600px", }}
                                    open={showModalCard === 2}
                                    onClose={onClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={{ width: "700px", height: "480px", background: "#ffffff", borderRadius: "15px", marginLeft: "-184px", marginTop: "-160px", }}>
                                        <IconButton className={cls.close_btn} onClick={onClose} sx={{ background: "#FFFFFF", color: "#000", marginLeft: "702px", marginTop: "-65px", transition: "all 0.3s ease", "&:hover": { background: "#FFFFFF" } }} aria-label="close">
                                            <Close />
                                        </IconButton>
                                        <img className={cls.burger_modal} src={burger_modal2} alt="" />
                                        <aside className={cls.menu_aside}>
                                            <h3 className={cls.header_burger_modal}>Гамбургер макси</h3>
                                            <span><span style={{ fontWeight: "500" }}>Новинка для вас:</span> Биштекс из сочной говядины, маринованные огурчики, хрустящий лук, острый соус Astoria, свежий салат Айсберг, плавленный Чеддер, спелый помидор, обычный лук.</span>
                                            <div className={cls.text_burger}>
                                                <h5>Выбор ингредиентов</h5>
                                                <div className={cls.text_menu}>
                                                    <button className={cls.item1} style={{ display: "inline-block", borderRadius: "16px" }}>Маринованные огурцы</button>
                                                    <button className={cls.item2} style={{ borderRadius: "16px" }}>Хрустящий лук</button>
                                                    <button className={cls.item3} style={{ display: "inline-block", marginTop: "10px", borderRadius: "16px" }}>Острый соус</button>
                                                    <button className={cls.item4} style={{ display: "inline-block", borderRadius: "16px" }}>cалат Айсберг</button>
                                                    <div className={cls.text_footer}>
                                                        <button className={cls.item5} style={{ width: "130px", textAlign: "left", borderRadius: "16px" }}>Чеддер</button>
                                                        <button className={cls.item6} style={{ width: "130px", textAlign: "left", borderRadius: "16px" }}>Помидор</button>
                                                        <button className={cls.item7} style={{ width: "130px", textAlign: "left", borderRadius: "16px" }}>Лук</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cls.text_burger2}>
                                                <h5>Выбор по вкусу</h5>
                                                <section className={cls.cards_sections}>
                                                    {
                                                        cardsModal.map((item, index) => (
                                                            <article className={cls.card} style={{ width: "106px", height: "145px", borderRadius: "10px", marginTop: "8px" }} key={index}>
                                                                <img style={{ position: "absolute", top: "", left: "", width: "55px", marginLeft: "25px", marginTop: "13px", }} src={item.photo} alt="" />
                                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "77px", textAlign: "center" }}>
                                                                    <span style={{ fontSize: "13px", position: "absolute", top: "", left: "", marginTop: '8px', }}>
                                                                        {item.name.includes(" ") ? (
                                                                            <>
                                                                                {item.name.split(" ")[0]}
                                                                                <br />
                                                                                {item.name.split(" ")[1]}
                                                                            </>
                                                                        ) : (
                                                                            item.name
                                                                        )}
                                                                    </span>
                                                                    <h5 style={{ position: "absolute", left: "", top: "", marginTop: "87px", }}>{item.price}</h5>
                                                                </div>
                                                            </article>
                                                        ))
                                                    }
                                                </section>
                                            </div>
                                        </aside>
                                        <Button sx={{ width: "250px", height: "47px", background: "#D67E34", color: "#ffffff", borderRadius: "6px", position: "absolute", top: "0", left: "0", marginLeft: "190px", marginTop: "260px", transition: "transform all 0.3s ease", "&:hover": { background: "#9b4600" } }}>ЗАКАЗАТЬ</Button>
                                    </Box>
                                </Modal>
                            )}
                            {showModalCard === 3 && (
                                <Modal sx={{ position: "absolute", top: "300px", left: "600px", }}
                                    open={showModalCard === 3}
                                    onClose={onClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={{ width: "700px", height: "480px", background: "#ffffff", borderRadius: "15px", marginLeft: "-184px", marginTop: "-160px", }}>
                                        <IconButton className={cls.close_btn} onClick={onClose} sx={{ background: "#FFFFFF", color: "#000", marginLeft: "702px", marginTop: "-65px", transition: "all 0.3s ease", "&:hover": { background: "#FFFFFF" } }} aria-label="close">
                                            <Close />
                                        </IconButton>
                                        <img className={cls.burger_modal} src={burger_modal2} alt="" />
                                        <aside className={cls.menu_aside}>
                                            <h3 className={cls.header_burger_modal}>Гамбургер макси</h3>
                                            <span><span style={{ fontWeight: "500" }}>Новинка для вас:</span> Биштекс из сочной говядины, маринованные огурчики, хрустящий лук, острый соус Astoria, свежий салат Айсберг, плавленный Чеддер, спелый помидор, обычный лук.</span>
                                            <div className={cls.text_burger}>
                                                <h5>Выбор ингредиентов</h5>
                                                <div className={cls.text_menu}>
                                                    <button className={cls.item1} style={{ display: "inline-block", borderRadius: "16px" }}>Маринованные огурцы</button>
                                                    <button className={cls.item2} style={{ borderRadius: "16px" }}>Хрустящий лук</button>
                                                    <button className={cls.item3} style={{ display: "inline-block", marginTop: "10px", borderRadius: "16px" }}>Острый соус</button>
                                                    <button className={cls.item4} style={{ display: "inline-block", borderRadius: "16px" }}>cалат Айсберг</button>
                                                    <div className={cls.text_footer}>
                                                        <button className={cls.item5} style={{ width: "130px", textAlign: "left", borderRadius: "16px" }}>Чеддер</button>
                                                        <button className={cls.item6} style={{ width: "130px", textAlign: "left", borderRadius: "16px" }}>Помидор</button>
                                                        <button className={cls.item7} style={{ width: "130px", textAlign: "left", borderRadius: "16px" }}>Лук</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cls.text_burger2}>
                                                <h5>Выбор по вкусу</h5>
                                                <section className={cls.cards_sections}>
                                                    {
                                                        cardsModal.map((item, index) => (
                                                            <article className={cls.card} style={{ width: "106px", height: "145px", borderRadius: "10px", marginTop: "8px" }} key={index}>
                                                                <img style={{ position: "absolute", top: "", left: "", width: "55px", marginLeft: "25px", marginTop: "13px", }} src={item.photo} alt="" />
                                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "77px", textAlign: "center" }}>
                                                                    <span style={{ fontSize: "13px", position: "absolute", top: "", left: "", marginTop: '8px', }}>
                                                                        {item.name.includes(" ") ? (
                                                                            <>
                                                                                {item.name.split(" ")[0]}
                                                                                <br />
                                                                                {item.name.split(" ")[1]}
                                                                            </>
                                                                        ) : (
                                                                            item.name
                                                                        )}
                                                                    </span>
                                                                    <h5 style={{ position: "absolute", left: "", top: "", marginTop: "87px", }}>{item.price}</h5>
                                                                </div>
                                                            </article>
                                                        ))
                                                    }
                                                </section>
                                            </div>
                                        </aside>
                                        <Button sx={{ width: "250px", height: "47px", background: "#D67E34", color: "#ffffff", borderRadius: "6px", position: "absolute", top: "0", left: "0", marginLeft: "190px", marginTop: "260px", transition: "transform all 0.3s ease", "&:hover": { background: "#9b4600" } }}>ЗАКАЗАТЬ</Button>
                                    </Box>
                                </Modal>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
} 