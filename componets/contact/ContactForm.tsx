
import { useRef, useState } from "react";
import styles from "./contact.module.scss";
import ContactInput from "./ContactInput";
import { PropagateLoader } from "react-spinners";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";





const ContactForm = () => {
    const [acceptWithRules, setAcceptWithRules] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) {
            toast.error('Форма не найдена');
            return;
        }




        setSpinner(true);
        emailjs
            .sendForm('service_ga85v21', 'template_hfszj5f', formRef.current, 'SMW-kM0yn4mwrYD8U')
            .then(

                result => {
                    setSpinner(false);
                    toast.success(`Данные отправлены ${result.text}`);
                }, error => {
                    setSpinner(false);
                    toast.error(`Данные отправлены ${error.text}`);
                });




        formRef.current.reset();
        setAcceptWithRules(false);
    };

    return (
        <form onSubmit={sendEmail} className={styles.contact_form} ref={formRef}>
            <ContactInput
                text="Ф.И.О.*"
                placeholder="Укажите ваши Ф.И.О."
                type="text"
                name='fullName'

            />
            <ContactInput
                text="Должность/компания"
                placeholder="Укажите вашу должность/компанию"
                type="text"
                name='company'
            />
            <ContactInput
                text="E-mail*"
                placeholder="Укажите ваш E-mail"
                type="email"
                name='email'
            />
            <ContactInput
                text="Телефон*"
                placeholder="Укажите ваш телефон"
                type="tel"
                name='phone'
            />
            <button
                className={styles.contact_form_btn}
                disabled={!acceptWithRules}
            >
                {spinner ? <PropagateLoader color="#fff" /> : 'Отправить заявку'}

            </button>
            <label className={styles.contact_checkbox}>
                <input
                    className={styles.contact_checkbox_input}
                    type="checkbox"
                    onChange={!toggleAcceptWithRules}
                />
                <span className={styles.contact_checkbox_span} />
                <span className={styles.contact_checkbox_text}>Нажимая на кнопку «Отправить заявку», я соглашаюсь с <Link href='/privacy-policy' className={styles.contact_checkbox_link} >Политикой конфиденциальности</Link> и даю <Link href='/personal-data-of-clients' className={styles.contact_checkbox_link}> Согласие на обработку персональных данных.</Link></span>
            </label>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </form>


    )
}

export default ContactForm;
