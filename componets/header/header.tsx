'use client'


import { useState } from 'react';
import { useMediaQuery } from '../../hooks';
import Logo from '../logo/logo';
import stylesMenu from './mobile.module.scss';
import styles from './header.module.scss';




function Header() {
    const isMobile = useMediaQuery(610);
    const [menuOpen, setMenuOpen] = useState(false);
    const currentMenuItemClass = isMobile ? stylesMenu.menu_item : styles.header_nav_list_item;

    function handleToggleMenu() {
        (document.querySelector('body') as HTMLBodyElement).classList.toggle('overFlow-hidden');
        setMenuOpen(!menuOpen);
    }




    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Logo />
                {isMobile && <button onClick={handleToggleMenu} className={`${styles.burger_menu} ${menuOpen ? styles.open : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>}
                <nav className={`${isMobile ? stylesMenu.menu : styles.header_nav} ${menuOpen ? stylesMenu.open : ''}`}>
                    <ul className={`${isMobile ? styles.list_reset : styles.header_nav_list}`}>
                        {['about', 'bio', 'interests', 'feedback'].map((item) => (
                            <li key={item} className={currentMenuItemClass}>
                                <button
                                    onClick={() => scrollTo(item)}
                                    className={styles.header_nav_list_item_link}
                                >
                                    {item === 'about' && 'Обо мне'}
                                    {item === 'bio' && 'Биография'}
                                    {item === 'interests' && 'Интересы'}
                                    {item === 'feedback' && 'Обратная связь'}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}



export default Header;