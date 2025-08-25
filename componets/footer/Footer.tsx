"use client";


import Link from 'next/link';
import { useMediaQuery } from '../../hooks';
import SocialList from './SocialList';
import Logo from '../logo/logo';
import styles from './footer.module.scss';

const Footer = () => {
    const isMobile725 = useMediaQuery(725);

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer_container}`}>
                <span className={styles.footer_border} />
                <div className={styles.footer_inner}>
                    <div className={styles.footer_left}>
                        {isMobile725 && <SocialList />}
                        <Logo />
                        <p className={styles.footer_copyright}>© 2025 <br />Sergei</p>
                    </div>
                    <div className={styles.footer_right}>
                        <div className={styles.footer_right_top}>
                            <p className={styles.footer_right_top_text}>Поделитесь сайтом с друзьями:</p>
                            {!isMobile725 && <SocialList />}
                        </div>
                        <div className={styles.footer_right_bottom}>
                            <ul className={styles.footer_list}>
                                <li className={styles.footer_list_item}>
                                    <Link href="/cookie-policy"
                                        className={styles.footer_list_item_link}
                                    >
                                        Политика использования файлов cookie
                                    </Link>
                                </li>
                                <li className={styles.footer_list_item}>
                                    <Link href="/privacy-policy"
                                        className={styles.footer_list_item_link}
                                    >
                                        Политика конфиденциальности
                                    </Link>
                                </li>
                                <li className={styles.footer_list_item}>
                                    <Link href="/personal-data-policy"
                                        className={styles.footer_list_item_link}
                                    >
                                        Политика обработки персональных данных
                                    </Link>
                                </li>
                                <li className={styles.footer_list_item}>
                                    <Link href="/personal-data-of-clients"
                                        className={styles.footer_list_item_link}
                                    >
                                        Согласие на обработку персональных данных клиентов - физических лиц
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;