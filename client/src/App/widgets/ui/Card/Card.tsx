import { FC, ReactNode } from 'react';
import cls from './Card.module.scss';
import { Button } from '../../../shared/ui/Button/Button';
import burger from '../../../shared/assets/svg/burger.svg';

interface CardProps {
    title: string;
    description: string;
    image: string;
    className?: string;
}

export const Card: FC<CardProps> = ({
    title,
    description,
    image,
    className = ''
}) => {
    return (
        <>
            <article>
                {/* "image: burger" */}
                <img src={burger} alt="" />
                <div>
                    {/* "title: Гамбургер макси" */}
                    <span>{title}</span>
                    {/* "description: Максимально толстый слой мяса" */}
                    <p>{description}</p>
                    <Button className={cls.btn}>ЗАКАЗАТЬ</Button>
                </div>
            </article>
        </>
    )
};