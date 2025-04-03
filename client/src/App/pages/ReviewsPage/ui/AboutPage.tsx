import { Carousel } from 'react-bootstrap'
import cls from './AboutPage.module.scss'
import { useState } from 'react'
import avatar_photo from '../../../shared/assets/png/avatar_photo.png'
import soupDishes from "../../../shared/assets/png/soupDishes.png"
import chefs2 from '../../../shared/assets/png/chef2.png'
import right from '../../../shared/assets/png/right.png'
import { Link } from 'react-router-dom'
import whiteleft from '../../../shared/assets/png/whiteleft.png'

export const AboutPage = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  const carouselItems = [
    { captionHeader: 'Посетитель', captionText: 'Николай', },
    { captionHeader: 'Посетитель', captionText: 'Георгий', },
    { captionHeader: 'Посетитель', captionText: 'Елена', },
  ];

    return (
      <>
      <div className={cls.reviews}>
        <div className='container'>
        <h6 style={{position: "absolute", top: "", left: "", color: "#ffffff", marginLeft: "-55px", marginTop: "-20px"}}>Назад</h6>
          <Link  to="/">
            <img style={{position: "absolute", top: "", left: "", width: "35px", marginLeft: "-55px", marginTop: "10px", cursor: "pointer"}} src={whiteleft} alt="" />
          </Link>
          <h6 style={{position: "absolute", top: "", left: "", color: "#ffffff", marginLeft: "1262px", marginTop: "-20px"}}>
          Наша история
          </h6>
          <Link to="/history">
          <img style={{position: "absolute", left: "", top: "", width: "40px", marginLeft: "1300px", marginTop: "5px", cursor: "pointer"}} src={right} alt="" />
          </Link>
        <div className={cls.about}>
          <div className='container'>
          <h2 className={cls.about_logo}>О нас</h2>
          <div className={cls.text_about}>
           <span className={cls.text1}>
           Интерьер ресторана напоминает залы прошлого века.<span style={{display: "block"}}>Светильники, стилизованные под свечи, «кружева» ограждений</span> 
           создают ощущение праздника и привносят ноту романтики <span style={{display: "block"}}>в ваше настроение. Предусмотрительные официанты</span> и умелые повара обеспечивают быстрое обслуживание и вкусную еду.
           <span style={{display: "block"}}>Обед в ресторане в будние дни обойдётся вам</span> на 30% дешевле, если вы посетите его с 12 до 16 часов.
          <img style={{position: "absolute", top: "", left: "", marginLeft: "177px", marginTop: "-140px", width: "160px"}} src={chefs2} alt="" />
           </span>

           <span className={cls.text2}>
            <img style={{position: "absolute", top: "", left: "", marginLeft: "-340px", marginTop: "-52px", width: "200px",}} src={soupDishes} alt="" />
           В меню можно найти низкокалорийную еду из овощей, 
           <span style={{display: "block"}}>рыбы и морепродуктов, горячие мясные и рыбные блюда,</span> 
           разнообразные пасты и мучные изделия, десерты, салаты
           <span style={{display: "block"}}> и закуски. Накормить ребёнка? Без проблем. Для детей</span>
           есть специальное меню. Утолят жажду соки, 
           <span style={{display: "block"}}>безалкогольные напитки, чай, кофе, пиво.</span>
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
      <div className={cls.reviews_wrap}>
          <div style={{marginLeft: "145px", marginTop: "970px"}}>
              <h2 style={{position: "absolute", top: "", left: "", color: "#ffffff", marginLeft: "390px", marginTop: "-140px",  }}>Наши Отзывы</h2>
          <Carousel style={{ width: '1000px', height: '450px', background: '#E5E5E5' }} activeIndex={index} onSelect={handleSelect}>
          {carouselItems.map((item, idx) => (
          <Carousel.Item key={idx} style={{ background: '#E5E5E5' }}>
             <div style={{display: "inline-block", marginLeft: "165px",  marginTop: "80px", position: "absolute", top: "", left: "" }}>
            <span style={{display: "block", textAlign: "center"}}>
              Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной 
            </span>
            <span style={{display: "block", textAlign: "center"}}>
              <span style={{display: "inline-block"}}>Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем</span>
            </span>
                      <span style={{display: "block", textAlign: "center"}}>
              <span style={{display: "inline-block"}}>рекомендовать этот ресторан своим друзьям и родственникам также за рубежом,</span>
            </span>
            <span style={{display: "block", textAlign: "center"}}>
              <span style={{display: "inline-block"}}>путешествующих в Санкт-Петербург!!!</span>
            </span>
          </div>
          <img src={avatar_photo} alt={`Slide ${idx + 1}`} style={{width: "70px", objectFit: 'cover', height: '70px', marginLeft: "468px", marginTop: "190px"}} />
          <div className={cls.text_carousel}>
          <h6>{item.captionHeader}</h6>
              <span>{item.captionText}</span>
              </div>
              </Carousel.Item>
              ))}
              </Carousel>
              </div>
          </div>
      </div>
    </div>
  </>
    )
}