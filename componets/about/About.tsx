'use client'
import styles from './about.module.scss'
import MainTitle from '../mainTitle/MainTitle';
import ArrowSvg from '../arrowSvg/ArrowSvg';
import SocialList from './SocialList';
import { useMediaQuery } from '../../hooks/index';


const About = () => {

    const isMobile1080 = useMediaQuery(1080);



    return (
        <section className={styles.about} id='about'>
            <div className='container'>
                <MainTitle text="About me" />
            </div>
            <div className={`subcontainer ${styles.about_sub_container}`}>
                <img className={styles.about_img} style={{ width: "480px", height: "550px" }} src="/img/photo3.png"
                    alt="avatar"
                />
                <div className={styles.about_inner}>
                    <h3 className={styles.about_title}>
                        Demidenko Sergei
                        <span className={styles.about_title_border}>
                            <span className={styles.about_title_border_arrow}>
                                <ArrowSvg />
                            </span>
                            <span className={styles.about_title_border_line} />

                        </span>
                    </h3>
                    <div className={styles.about_text}>
                        <p >
                            Привет! Меня зовут Сергей. Я Frontend developer, мой основной стек: HTML, CSS, JavaScript(TypeScript), React(Next.js), Node.js.
                        </p>
                    </div>
                    {!isMobile1080 && <SocialList />}
                </div>
            </div>

            <div className='sub_container'>
                {isMobile1080 && <SocialList />}
            </div>
        </section>
    );
}








export default About;

