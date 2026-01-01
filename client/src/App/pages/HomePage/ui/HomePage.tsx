import cls from './HomePage.module.scss';
import { Navbar } from "../../../widgets/ui/Navbar/Navbar";

export const HomePage = () => {

    return (
        <>
            <div className={cls.home}>
                <div className="container">
                    <div className={cls.home_wrap}>
                        <Navbar />

                    </div>
                </div>
            </div>
        </>
    )
}