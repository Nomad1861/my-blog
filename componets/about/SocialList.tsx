import styles from './socialList.module.scss';

const SocialList = () => {
    return (
        <ul className={styles.social_list}>
            <li className={styles.social_list_item}>
                <a href="https://t.me/Nomad_qqq" className={styles.social_list_item_link}>
                    <span className={styles.social_list_item_link_text}>Telegram</span>
                    <span className={`${styles.social_list_item_link_icon} ${styles.social_list_item_link_icon_tg}`}>
                        <img className={styles.social_list_item_link_img} width={32} height={32} src="/logo/telegram.svg" alt="Telegram" />
                    </span>
                </a>
            </li>
            <li className={styles.social_list_item}>
                <a href="https://m.vk.com/id6223932" className={styles.social_list_item_link}>
                    <span className={styles.socia_list_item_link_text}>ВКонтакте</span>
                    <span className={`${styles.social_list_item_link_icon} ${styles.social_list_item_link_icon_vk}`}>
                        <img className={styles.social_list_item_link_img} width={32} height={32} src="/logo/vk.svg" alt="ВКонтакте" />
                    </span>
                </a>
            </li>
            <li className={styles.social_list_item}>
                <a href="https://github.com/Nomad1861" className={styles.social_list_item_link}>
                    <span className={styles.social_list_item__link_text}>GitHub</span>
                    <span className={`${styles.social_list_item_link_icon} ${styles.social_list_item_link_icon_gh}`}>
                        <img className={styles.social_list_item_link_img} width={32} height={32} src="/logo/github.svg" alt="GitHub" />
                    </span>
                </a>
            </li>
        </ul>
    );
}


export default SocialList;