"use client"

import MainTitle from "../mainTitle/MainTitle";
import styles from "./portfolio.module.scss";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from '../../hooks';
import { useState } from "react";
import PortfolioTabControl from "./PortfolioTabControl";
import PortfolioTabContent from "./PortfolioTabContent";
import PortfolioSlider from "./PortfolioSlider";
import { portfolioItems1, portfolioItems2, portfolioItems3, portfolioItems4, hiddenPortfolioItemsArray } from "./PortfolioTabContents";


const Portfolio = () => {

    const isMobile = useMediaQuery(1080);
    const [portfolioTab1, setPortfolioTab1] = useState(true);
    const [portfolioTab2, setPortfolioTab2] = useState(false);
    const [portfolioTab3, setPortfolioTab3] = useState(false);
    const [portfolioTab4, setPortfolioTab4] = useState(false);
    const [hiddenPortfolioItems, setHiddenPortfolioItems] = useState(false);


    const toggleHiddenPortfolioItems = () => setHiddenPortfolioItems(!hiddenPortfolioItems);

    const handleShowPortfolioItems1 = () => {
        setPortfolioTab1(true);
        setPortfolioTab2(false);
        setPortfolioTab3(false);
        setPortfolioTab4(false);
    }

    const handleShowPortfolioItems2 = () => {
        setPortfolioTab1(false);
        setPortfolioTab2(true);
        setPortfolioTab3(false);
        setPortfolioTab4(false);
    }

    const handleShowPortfolioItems3 = () => {
        setPortfolioTab1(false);
        setPortfolioTab2(false);
        setPortfolioTab3(true);
        setPortfolioTab4(false);
    }

    const handleShowPortfolioItems4 = () => {
        setPortfolioTab1(false);
        setPortfolioTab2(false);
        setPortfolioTab3(false);
        setPortfolioTab4(true);
    }

    const portfolioTabControls = [
        { id: 1, title: 'Веб-сайты', isActive: portfolioTab1, handler: handleShowPortfolioItems1 },
        { id: 2, title: 'UI/UX дизайн', isActive: portfolioTab2, handler: handleShowPortfolioItems2 },
        { id: 3, title: 'Внешний интерфейс', isActive: portfolioTab3, handler: handleShowPortfolioItems3 },
        { id: 4, title: 'Все проекты', isActive: portfolioTab4, handler: handleShowPortfolioItems4 },
    ];
    return (
        <section className={styles.portfolio} id="portfolio">
            <div className="container">
                <MainTitle text='портфолио' />
            </div>
            <div className="sub-container">
                <div className={styles.portfolio_inner}>
                    <ul className={styles.portfolio_tabs}>
                        {portfolioTabControls.map(item => (
                            <PortfolioTabControl
                                key={item.id}
                                title={item.title}
                                isActive={item.isActive}
                                handleShowTab={item.handler}
                            />
                        ))}
                    </ul>
                </div>
                {!isMobile && <ul className={styles.portfolio_list}>
                    {portfolioTab1 && <PortfolioTabContent tabItems={portfolioItems1} />}
                    {portfolioTab2 && <PortfolioTabContent tabItems={portfolioItems2} />}
                    {portfolioTab3 && <PortfolioTabContent tabItems={portfolioItems3} />}
                    {portfolioTab4 && <PortfolioTabContent tabItems={portfolioItems4} />}
                    <AnimatePresence>
                        {hiddenPortfolioItems && <PortfolioTabContent tabItems={hiddenPortfolioItemsArray} />}
                    </AnimatePresence>
                </ul>}
                {!isMobile && <div className={styles.portfolio_wrapper}>
                    <button className={styles.portfolio_more} onClick={toggleHiddenPortfolioItems}>
                        <span className={styles.portfolio_more_text}>
                            {hiddenPortfolioItems ? 'Свернуть' : 'Показать еще проекты'}
                        </span>
                        <span className={styles.portfolio_more_border} />
                    </button>
                </div>}
            </div>
            {isMobile && <div className={styles.portfolio_list_mobile}>
                <div className={styles.portfolio_list_mobile_container}>
                    {portfolioTab1 && <PortfolioSlider tabItems={portfolioItems1} />}
                    {portfolioTab2 && <PortfolioSlider tabItems={portfolioItems2} />}
                    {portfolioTab3 && <PortfolioSlider tabItems={portfolioItems3} />}
                    {portfolioTab4 && <PortfolioSlider tabItems={portfolioItems4} />}
                </div>
            </div>}
        </section>
    )
};


export default Portfolio; 