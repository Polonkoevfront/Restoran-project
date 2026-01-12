import cls from './AboutPage.module.scss';
import { useState } from 'react';
import soupDishes from "../../../shared/assets/png/soupDishes.png";
import chefs2 from '../../../shared/assets/png/chef2.png';
import right from '../../../shared/assets/png/right.png';
import { Link } from 'react-router-dom';
import whiteleft from '../../../shared/assets/png/whiteleft.png';
import { Slider } from '../../../widgets/ui/Slider/Slider';
import { Text } from '../../../shared/ui/Text/Text';

export const AboutPage = () => {

  return (
    <>
      <div className={cls.reviews}>
        <div className='container'>
          <div className={cls.arrow_left}>
            <span>Назад</span>
            <Link to="/">
              <img src={whiteleft} alt="" />
            </Link>
          </div>
          <div className={cls.arrow_right}>
            <span>Наша история</span>
            <Link to="/history">
              <img src={right} alt="" />
            </Link>
          </div>
          <div>
            <div className='container'>
              <Text as='h2' fz={26} fw={500} className={cls.about_logo}>О нас</Text>
              <div className={cls.text_about}>
                <span className={cls.text1}>
                  Интерьер ресторана напоминает залы прошлого века.<span>Светильники, стилизованные под свечи, «кружева» ограждений</span>
                  создают ощущение праздника и привносят ноту романтики <span>в ваше настроение. Предусмотрительные официанты</span> и умелые повара обеспечивают быстрое обслуживание и вкусную еду.
                  <span>Обед в ресторане в будние дни обойдётся вам</span> на 30% дешевле, если вы посетите его с 12 до 16 часов.
                  <img src={chefs2} alt="" />
                </span>

                <span className={cls.text2}>
                  <img src={soupDishes} alt="" />
                  В меню можно найти низкокалорийную еду из овощей,
                  <span>рыбы и морепродуктов, горячие мясные и рыбные блюда,</span>
                  разнообразные пасты и мучные изделия, десерты, салаты
                  <span> и закуски. Накормить ребёнка? Без проблем. Для детей</span>
                  есть специальное меню. Утолят жажду соки,
                  <span>безалкогольные напитки, чай, кофе, пиво.</span>
                  Приходите в любое время с 12 часов и увидите всё сами.
                </span>

                <span className={cls.text3}>
                  Отзыв о посещении ресторана
                  В обеденный перерыв зашли в ресторан «Визави». Очень понравилось оформление зала. Всё так чисто и романтично!
                  Официанты обслуживают быстро, не впаривают блюда, а вежливо предлагают. В меню расписано, какое блюдо из каких продуктов состоит, поэтому выбирать легко. Поели вкусно и недорого.
                  Выбрали салат «Цезарь», потому что с креветками. Я в такой салат никогда креветки не добавляю. В общем-то и неплохо, надо рецептик перенять. Суп-пюре из шампиньонов тоже вкусненький. Фруктовое ассорти для меня оказалось приторно-сладким. Аж во рту всё слиплось. Пришлось взять чай. Заказали зеленый чай Японская сакура. Стоит 150 руб., а налили совсем мало.
                  Так и задержались подольше, отдохнули, послушали негромкую музыку.
                  Со скидкой 30% получилось вкусно, без лишних калорий и не очень затратно. Рекомендую.
                </span>
              </div>
            </div>
          </div>
          <Slider />
        </div>
      </div>
    </>
  )
}