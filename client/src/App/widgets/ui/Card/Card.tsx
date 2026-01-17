import { FC, ReactNode, useState } from 'react';
import cls from './Card.module.scss';
import { Button } from '../../../shared/ui/Button/Button';
import burger from '../../../shared/assets/svg/burger.svg';
import burger_modal2 from '../../../shared/assets/png/burger_modal2.png'
import { Close } from "@mui/icons-material";

import { Text } from '../../../shared/ui/Text/Text';
import { Box, IconButton, Modal, Typography } from "@mui/material"


const cardsModal = [
    { photo: "https://www.schlotzskys.com/-/media/schlotzskys/ingredients/slicedtomato-400.png?v=1&d=20180213T145515Z", name: "Помидор", price: "39₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=870ca6f86a9d20dd2189c219b58a7b3d1d210b80-4219883-images-thumbs&n=13", name: "Котлета говяжья", price: "49₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=e223847a227de888596f22f4ab301935-5234309-images-thumbs&n=13", name: "Салат айсберг", price: "29₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=f30be13c78bbf360b285d77017adbbce4a217bee-11547894-images-thumbs&n=13", name: "Двойной чеддер", price: "22₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=1663f370ba37e474e937603118bbfd8e30e481a6538c35e1-12788981-images-thumbs&n=13", name: "хрустящий лук", price: "25₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=57a5fa9805ddaa02c6005e85d7058e66a6a02455-12405273-images-thumbs&n=13", name: "Соус", price: "19₽" },
    { photo: "https://avatars.mds.yandex.net/i?id=ed38f5c614da74c307c751530efbcf1d6f93fbfb561262c6-4599990-images-thumbs&n=13", name: "Лук", price: "29₽" },
];

interface CardProps {
    title: string;
    description: string;
    image: string;
    onClick?: () => void;
    className?: string;
}

export const Card: FC<CardProps> = ({
    title,
    description,
    image,
    className = ''
}) => {

    const [showModalCard, setShowModalCard] = useState<number | null>(null)

    const onOpen = (id: number) => {
        setShowModalCard(id)
    };

    const onClose = () => {
        setShowModalCard(null)
    };

    return (
        <>
            <article onClick={() => onOpen(1)}>
                <div className={cls.recommend}>
                    <span>RECOMMENDED</span>
                </div>
                <img src={burger} alt="" />
                <div className={cls.circle_price}>
                    <div className={cls.circle_price2}>
                        <span>420</span>
                    </div>
                </div>
                <div>
                    <Text as='h4' fz={24} fw={400}>Гамбургер макси</Text>
                    <p>Максимально толстый <p>слой мяса</p></p>
                    <Button className={cls.btn} variant='default' size='b'>ЗАКАЗАТЬ</Button>
                </div>
            </article>
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
                        <Button variant='default' size='m'>ЗАКАЗАТЬ</Button>
                    </Box>
                </Modal>
            )}
        </>
    )
};