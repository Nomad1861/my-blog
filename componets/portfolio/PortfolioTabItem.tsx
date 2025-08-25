/* eslint-disable @next/next/no-img-element */


import styles from './portfolio.module.scss';

interface IPortfolioTabItem {
    title: string;
    imgSrc: string;
    link: string;
}

const PortfolioTabItem = ({ title, imgSrc, link }: IPortfolioTabItem) => (
    <div className={styles.portfolio_list_inner}>
        <a className={styles.portfolio_list_item_link} href={link}>
            <img className={styles.portfolio_list_item_img} src={imgSrc} alt={title} />
            <h3 className={styles.portfolio_list_item_title}>{title}</h3>
        </a>
    </div>
);

export default PortfolioTabItem;