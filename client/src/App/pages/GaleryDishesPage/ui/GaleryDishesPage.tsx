import cls from './GaleryDishesPage.module.scss'
import galeryDishes from '../../../shared/assets/svg/galeryDishes.svg'
import glassDishes from '../../../shared/assets/png/glassDishes.png'
import soupDishes from '../../../shared/assets/png/soupDishes.png'
import coffeeDishes from '../../../shared/assets/png/coffeeDishes.png'


export const GaleryDishesPage = () => {

    return ( 
        <div className={cls.galerydishes}>
            <div className='container'>
                <div className={cls.galerydishes_wrap}>
                   <img className={cls.img_textdishes} src={galeryDishes} alt="" />
                   <section className={cls.galerydishes_section}>
                    <article style={{marginLeft: "282px", marginTop: "200px"}}>
                        <img style={{width: "450px"}} src={glassDishes} alt="" />
                        <div style={{marginLeft: "2px"}} className={cls.galarydishes_article}>
                        <img style={{width: "212.5px"}} src={soupDishes} alt="" />
                        <img  style={{width: "210.5px", marginLeft: "25px"}} src={coffeeDishes} alt="" />
                        </div>
                    </article>
                    <article style={{marginLeft: "755px", marginTop: "-484.5px"}}>
                        <div style={{marginLeft: "2px", marginTop: "-25px"}} className={cls.galarydishes_article}>
                        <img style={{width: "212.5px"}} src={soupDishes} alt="" />
                        <img  style={{width: "210.5px", marginLeft: "25px"}} src={coffeeDishes} alt="" />
                        </div>
                        <img style={{position: "absolute", top: "", left: "", width: "450px", marginTop: "21px"}} src={glassDishes} alt="" />
                    </article>
                   </section>
                </div>
            </div>
        </div>
    )
}