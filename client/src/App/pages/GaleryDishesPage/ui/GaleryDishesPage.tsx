import cls from './GaleryDishesPage.module.scss'
import galeryDishes from '../../../shared/assets/svg/galeryDishes.svg'
import glassDishes from '../../../shared/assets/png/glassDishes.png'
import soupDishes from '../../../shared/assets/png/soupDishes.png'
import coffeeDishes from '../../../shared/assets/png/coffeeDishes.png'

export const GaleryDishesPage = () => {

    return (
        <div className={cls.galerydishes}>
            <img className={cls.img_textdishes} src={galeryDishes} alt="" />

            <section>
                <article>
                    <img src={glassDishes} alt="" />
                    <div className={cls.galarydishes_article}>
                        <img className={cls.image1} src={soupDishes} alt="" />
                        <img className={cls.image2} src={coffeeDishes} alt="" />
                    </div>
                </article>
                <article className={cls.section2}>
                    <div className={cls.galarydishes_article}>
                        <img className={cls.image1} src={soupDishes} alt="" />
                        <img className={cls.image2} src={coffeeDishes} alt="" />
                    </div>
                    <img className={cls.image3} src={glassDishes} alt="" />
                </article>
            </section>
        </div>
    )
}