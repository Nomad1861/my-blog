import Link from "next/link";
import styles from './logo.module.scss'

const Logo = () => <Link href='/'>
    <img src='/logo/logo.svg' alt='logo' className={styles.logo} />
</Link>



export default Logo;