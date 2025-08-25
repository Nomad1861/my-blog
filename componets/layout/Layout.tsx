// import Footer from "../footer/Footer";
// import Header from "../header/header";
import styles from "./layout.module.scss"



const Layout = ({ children }: { children: React.ReactNode }) => (

    <div className={styles.layout}>
        <h1 className={styles['rick-morty-text']}>Пользовательское соглашение</h1>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <main className={styles.main}>
            {children}
        </main>
    </div>
);

export default Layout;