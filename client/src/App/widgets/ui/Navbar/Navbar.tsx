import cls from './Navbar.module.scss'
import cart from '../../../shared/assets/svg/cart.svg'
import line from '../../../shared/assets/svg/line.svg'
import phone from '../../../shared/assets/svg/phone.svg'
import { Link } from 'react-router-dom';
import logo from '../../../shared/assets/png/LOGO.png';
import { Button } from '../../../shared/ui/Button/Button';

export const Navbar = () => {

  return (
    <>
      <div className={cls.navbar}>
        <div className={cls.nav_body}>
          <img className={cls.logo} src={logo} alt="" />
          <ul className={cls.menu_section}>
            <li>
              <Link className={cls.text} to="/">ГЛАВНАЯ</Link>
            </li>
            <li>
              <Link className={cls.text} to="/menu">МЕНЮ</Link>
            </li>
            <li>
              <Link className={cls.text} to="/about">О НАС</Link>
            </li>
            <li>
              <Link className={cls.text} to="">БРОНЬ</Link>
            </li>
          </ul>

          <div className={cls.contact_block}>
            <Link to="/menu2">
              <img className={cls.cart} src={cart} alt="" />
            </Link>
            <img className={cls.line} src={line} alt="" />
            <div className={cls.contact_txt}>
              <img src={phone} alt="" />
              <span>+999-888-76-54</span>
              <p className={cls.contact_txt2}>Свяжитесь с нами для
                <p>бронирования</p></p>
            </div>
            <Button className={cls.btn}>
              <Link className={cls.btn_text} to="#">ЗАКАЗ СТОЛИКА</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* https://avatars.mds.yandex.net/i?id=4c54be5603d557f93fd908a102d4c2e403a3402f-5884257-images-thumbs&n=13 */}
    </>
  )
}