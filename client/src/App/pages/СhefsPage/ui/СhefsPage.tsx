import cls from './СhefsPage.module.scss'
import chefs from '../../../shared/assets/svg/chefs.svg'
import chef1 from '../../../shared/assets/png/chef1.png'
import chef2 from '../../../shared/assets/png/chef2.png'
import chef3 from '../../../shared/assets/png/chef3.png'

export const СhefsPage = () => {
    return (
        <div className={cls.chefs}>
            <div className='container'>
                <div className={cls.chefs_wrap}>
                    <img style={{position: "absolute", top: "", left: "", width: "300px", marginLeft: "504px", marginTop: "-150px"}} src={chefs} alt="" />
                    <section style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "215px", gap: "32px"}}>
                        <img style={{width: "340px"}} src={chef1} alt="" />
                        <img style={{width: "340px"}} src={chef2} alt="" />
                        <img style={{width: "338px"}} src={chef3} alt="" />
                    </section>
                </div>
            </div>
        </div>
    )
}