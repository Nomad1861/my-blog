'use client';

import { useMediaQuery } from "../../hooks"
import MainTitle from "../mainTitle/MainTitle"
import styles from "./contact.module.scss"
import ArrowSvg from "../arrowSvg/ArrowSvg"
import SocialList from "./SocialList"
import ContactForm from "./ContactForm"



const Contact = () => {

    const isMobile485 = useMediaQuery(485);
    return (
        <section className={styles.contact} id='contact'>
            <div className="container">
                <MainTitle text='write to me' />
            </div>
            <div className={styles.sub_container}>
                <div className={styles.contact_inner}>
                    <div className={styles.contact_left}>
                        <p className={styles.contact_text}>
                            Буду рад присоедениться к вашей команде!!!
                        </p>
                        <p className={styles.contact_text}>
                            just do it
                        </p>
                        {!isMobile485 && <>
                            <h3 className={styles.contact_title}>
                                <span className={styles.contact_title_text}>Social</span>
                                <span className={styles.contact_title_arrow}><ArrowSvg /></span>
                                <span className={styles.contact_title_border} />
                            </h3>
                            <SocialList />
                        </>}
                    </div>
                    <div className={styles.contact_right}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>

    )
}



export default Contact;