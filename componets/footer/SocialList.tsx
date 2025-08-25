import styles from "./socialListFooter.module.scss"



const SocialList = ({ marginBottom }: { marginBottom?: number }) => (
    <ul className={styles.social__list} style={{ marginBottom }}>
        <li className={styles.social_list_item}>
            <a href="https://t.me/Nomad_qqq" className={styles.social_list_item_link}>
                <span className={styles.social_list_item_link_text}>Telegram</span>
                <span className={`${styles.social_list_item_link_icon} ${styles.social_list_item_link_icon_fb}`}>
                    <img className={styles.social_list_item_link__img} src="./logo/telegram.svg" alt="telegram" style={{
                        width: '100%',
                        height: '100%'
                    }} />
                </span>
            </a>
        </li>
        <li className={styles.social_list_item}>
            <a href="https://m.vk.com/id6223932" className={styles.social_list_item_link}>
                <span className={styles.social_list_item_link_text}>ВКонтактe</span>
                <span className={`${styles.social_list_item_link_icon} ${styles.social_list_item_link_icon_vk}`}>
                    <img className={styles.social_list_item_link_img} src="./logo/vk.svg" alt="ВКонтакте" style={{
                        width: '100%',
                        height: '100%'
                    }} />
                </span>
            </a>
        </li>
        <li className={styles.social_list_item}>
            <a href="https://github.com/Nomad1861" className={styles.social_list_item_link}>
                <span className={styles.social_list_item_link_text}>GitHub</span>
                <span className={`${styles.social_list_item_link_icon} ${styles.social_list_item_link_icon_yt}`}>
                    <img className={styles.social_list_item_link_img} src="./logo/github.svg" alt="GitHub" style={{
                        width: '100%',
                        height: '100%'
                    }} />
                </span>
            </a>
        </li>
    </ul>
);

export default SocialList;