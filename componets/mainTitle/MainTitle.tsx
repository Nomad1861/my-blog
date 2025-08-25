

import styles from './mainTitle.module.scss';

const MainTitle = ({ text }: { text: string }) =>
    <h2 className={styles.title}>{text.toUpperCase()}<span className={styles.title_border}></span></h2>

export default MainTitle;