import cls from './HistoryPage..module.scss';
import { Link } from 'react-router-dom';
import { Text } from '../../../shared/ui/Text/Text';
import { Button } from '../../../shared/ui/Button/Button';

import left from '../../../shared/assets/png/left.png';
import history_text from '../../../shared/assets/svg/history_text.svg';
import images from '../../../shared/assets/svg/images.svg';
import text_footer_history from '../../../shared/assets/svg/text_footer_history.svg';
export const HistoryPage = () => {

  return (
    <div className={cls.history}>
      <div className="container">
        <div className={cls.btn_ret}>
          <span>Назад</span>
          <Link to="/about">
            <img src={left} alt="" />
          </Link>
        </div>
        <div className={cls.history_body}>
          <div className={cls.history_txt_block}>
            <div className={cls.logo_block}>
              <Text className={cls.logo} as='h1' fz={49} fw={400}>Наша</Text>
              <Text className={cls.logo2} as='h1' fz={49} fw={400}>История</Text>
            </div>

            <div className={cls.history_desc}>
              <span>Как и у любого другого самобытного места, у нас есть</span>
              <span>своя, особая история. Идея ресторана пришла</span>
              <span>основателям неожиданно. Во время прогулки по лесу</span>
              <span>создатель нашего ресторана застрял в сотнях</span>
              <span>километров от ближайшего населенного пункта. Вдали</span>
              <span>от цивилизации и связи им пришлось навремя</span>
              <span>обустровать себе нехитрый быт, добывать и готовить</span>
              <span>себе еду.</span>
            </div>
          </div>
          <div className={cls.menu_eats}>
            <Text className={cls.eat_item} as='h1' fz={40} fw={400}>93<span>Напитки</span></Text>
            <Text className={cls.eat_item} as='h1' fz={40} fw={400}>206<span>Еда</span></Text>
            <Text className={cls.eat_item} as='h1' fz={40} fw={400}>71<span>Закуски</span></Text>
          </div>
          <img src={images} alt="" />
        </div>
        <footer>
          <div>
            <img src={text_footer_history} alt="" />
            <span>Только в этом месяце бизнес-ланч от 250 ₽</span>
          </div>
          <Button className={cls.footer_btn} size='m' variant='primary'>ЗАКАЗ СТОЛИКА</Button>
        </footer>
      </div>
    </div>
  )
}