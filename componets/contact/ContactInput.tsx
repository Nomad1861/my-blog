import { color } from "framer-motion";
import styles from "./contact.module.scss"



interface IContactInput {
    type: string;
    text: string;
    placeholder: string;
    name: string;

}

const ContactInput = ({ type, text, placeholder, name }: IContactInput) => (
    <label className={styles.contact_form_label}>
        <span className={styles.contact_form_label_text}>{text}</span>
        <input
            className={styles.contact_form_label_input}
            type={type}
            placeholder={placeholder}
            name={name}

            required
        />
    </label>
);

export default ContactInput;