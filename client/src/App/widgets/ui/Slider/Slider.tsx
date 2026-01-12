import cls from './Slider.module.scss';

import { Carousel } from 'react-bootstrap'
import avatar_photo from '../../../shared/assets/png/avatar_photo.png'
import { useState } from 'react';
import { Text } from '../../../shared/ui/Text/Text';

export const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    const carouselItems = [
        { captionHeader: 'Посетитель', captionText: 'Николай', },
        { captionHeader: 'Посетитель', captionText: 'Георгий', },
        { captionHeader: 'Посетитель', captionText: 'Елена', }
    ];

    return (
        <div className={cls.reviews_wrap}>
            <div className={cls.reviews_block}>
                <Text as='h2' fz={24} fw={600} className={cls.carousel_logo}>Наши Отзывы</Text>
                <Carousel className={cls.carousel_item} activeIndex={index} onSelect={handleSelect}>
                    {carouselItems.map((item, idx) => (
                        <Carousel.Item key={idx}>
                            <div className={cls.carousel_desc}>
                                <span>Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной</span>
                                <span>Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем</span>
                                <span>рекомендовать этот ресторан своим друзьям и родственникам также за рубежом,</span>
                                <span>путешествующих в Санкт-Петербург!!!</span>
                            </div>
                            <img src={avatar_photo} alt={`Slide ${idx + 1}`} style={{ width: "70px", objectFit: 'cover', height: '70px', marginLeft: "468px", marginTop: "190px" }} />
                            <div className={cls.text_carousel}>
                                <span>{item.captionHeader}</span>
                                <p>{item.captionText}</p>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )
};