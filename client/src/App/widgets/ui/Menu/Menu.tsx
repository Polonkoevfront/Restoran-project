import cls from './Menu.module.scss';
import { useState } from 'react';

import homeText from '../../../shared/assets/png/homeText.png';
import dishes_modal from '../../../shared/assets/svg/dishes_modal.svg';
import { Button } from '../../../shared/ui/Button/Button';

export const Menu = () => {
    const [showModals, setShowModals] = useState(false);

    const handleShowButton = () => {
        setShowModals(prev => !prev);
    };

    return (
        <>
            <div className={cls.menu}>
                <img src={homeText} alt="" />
                <Button className={cls.btn} onClick={handleShowButton}>
                    {
                        showModals ? "CLOSE" : "VIEW MENU"
                    }
                    {
                        showModals && (
                            <div className={cls.modals_block}>
                                <article>
                                    <img src={dishes_modal} alt="" />
                                    <div>
                                        <span>Магическая <span className={cls.text}>Атмосфера</span></span>
                                        <p className={cls.desc}>В нашем заведении царит магическая атмосфера наполненная вкусными ароматами</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={dishes_modal} alt="" />
                                    <div>
                                        <span>Лучшее качество <span className={cls.text}>Еды</span></span>
                                        <p className={cls.desc}>Качество нашей <p>Еды - отменное!</p></p>
                                    </div>
                                </article>
                                <article>
                                    <img src={dishes_modal} alt="" />
                                    <div>
                                        <span>Недорогая <span className={cls.text}>Еда</span></span>
                                        <p className={cls.desc}>Стоимость нашей Еды зависит только от ее количества. Качество <p >всегда на высоте!</p></p>
                                    </div>
                                </article>
                            </div>
                        )
                    }
                </Button>
            </div>
        </>
    )
};