
import styles from "./skills.module.scss";



interface ISkillsItem {
    text: string;
    title: string;
    iconClass: string;
}

const SkillsItem = ({ text, title, iconClass }: ISkillsItem) => {
    return (
        <li className={styles.skills_item}>
            <h3 className={`${styles.skills_title} ${iconClass}`}>
                <span className={styles.skills_title_text}>{title}</span>
                <span className={styles.skills_title_border} />
            </h3>
            <p className={styles.skills_text}>{text}</p>
        </li>
    )
}



export default SkillsItem;