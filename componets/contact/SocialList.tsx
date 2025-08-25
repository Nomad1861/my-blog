/* eslint-disable @next/next/no-img-element */
import styles from "./socialListContact.module.scss"

const SocialList = () => (
    <ul className={styles.social_list}>
        <li className={styles.social_list_item}>
            <a href="https://t.me/Nomad_qqq" className={styles.social_list_item_link}>
                <span className={styles.social_list_item_link_text}>Telegram</span>
                <span className={`${styles.social_list_item_link_icon} ${styles.social_list_item_link_icon_tg}`}>
                    <img className={styles.social_list_item_link_img} src="./logo/telegram.svg" alt="telegram" />
                </span>
            </a>
        </li>
        <li className={styles.social_list_item}>
            <a href="https://m.vk.com/id6223932" className={styles.social_list_item_link}>
                <span className={styles.social_list_item_link_text}>ВКонтакте</span>
                <span className={`${styles.social_list_item_link_icon} ${styles.social_list_item_link_icon_vk}`}>
                    <img className={styles.social_list_item_link_img} src="./logo/vk.svg" alt="ВКонтакте" />
                </span>
            </a>
        </li>
        <li className={styles.social_list_item}>
            <a href="https://github.com/Nomad1861" className={styles.social_list_item_link}>
                <span className={styles.social_list_item_link_text}>GitHub</span>
                <span className={`${styles.social_list_item_link_icon} ${styles.social_list_item_link_icon_gt}`}>
                    <img className={styles.social_list_item_link_img} src="./logo/github.svg" alt="github" />
                </span>
            </a>
        </li>
    </ul>
);

export default SocialList;