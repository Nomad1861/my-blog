/* eslint-disable @next/next/no-img-element */
import styles from './portfolio.module.scss';

interface IPortfolioSliderItem {
    title: string;
    imgSrc: string;
    link: string;
}

const PortfolioSliderItem = ({ title, imgSrc, link }: IPortfolioSliderItem) => (
    <div className={styles.portfolio_slide}>
        <a className={styles.portfolio_slide_link} href={link}>
            <span className={styles.portfolio_slide_inner}>
                <span className={styles.portfolio_slide_text}>{title}</span>
            </span>
            <img className={styles.portfolio_slide_img} src={imgSrc} alt={title} />
        </a>
    </div>
);

export default PortfolioSliderItem;