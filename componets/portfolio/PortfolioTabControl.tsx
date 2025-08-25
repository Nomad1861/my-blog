import ArrowSvg from "../arrowSvg/ArrowSvg";
import styles from "./portfolio.module.scss"

interface IPortfolioTabContlor {
    title: string;
    isActive: boolean;
    handleShowTab: () => void;
}




const PortfolioTabControl = ({ title, isActive, handleShowTab }: IPortfolioTabContlor) => {
    return (
        <li className={styles.portfolio_tabs_item}>
            <button className={styles.portfolio_tabs_item_btn} onClick={handleShowTab} >
                <span className={styles.portfolio_tabs_item_btn_text}
                    style={{ color: isActive ? '#F2F2F2' : '#B7BFD1' }}>
                    {title}
                </span>
                {isActive && <span className={styles.portfolio_tabs_item_btn_arrow}> <ArrowSvg /></span>}
                <span className={`${styles.portfolio_tabs_item_btn_border} ${isActive ? styles.portfolio_tabs_item_btn_border_active : ''}`} />
            </button>
        </li>
    )
};


export default PortfolioTabControl;