import cls from './HomePage.module.scss';
import { Navbar } from "../../../widgets/ui/Navbar/Navbar";
import { Menu } from "../../../widgets/ui/Menu/Menu";

export const HomePage = () => {

    return (
        <>
            <div className={cls.home}>
                <div className="container">
                    <div className={cls.home_wrap}>
                        <Navbar />

                        <Menu />
                    </div>
                </div>
            </div>
        </>
    )
}