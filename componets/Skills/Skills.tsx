
import styles from './skills.module.scss'
import MainTitle from '../mainTitle/MainTitle';
import SkillsItem from './SkillsItem';



const Skills = () => {
    return (
        <section className={styles.skills} id='skills'>

            <div className='container'>
                <MainTitle text='Навыки' />
            </div>

            <div className={styles.sub_container}>
                <ul className={styles.skills_list}>
                    <SkillsItem
                        title='Веб-разработка'
                        text='JavaScript, Next.js, PostgreSQL, React'
                        iconClass={styles.skills_web}
                    />
                    <SkillsItem
                        title='UI/UX Дизайн'
                        text='Photoshop, Illustrator, Sketch.'
                        iconClass={styles.skills_ux}
                    />
                    <SkillsItem
                        title='Разработка Frontend'
                        text='HTML, CSS, LESS, SASS, Bootstrap.'
                        iconClass={styles.skills_front}
                    />
                    <SkillsItem
                        title='Консалтинг и SEO-Аудит'
                        text='Pending...'
                        iconClass={styles.skills_seo}
                    />
                </ul>
            </div>
        </section>
    )
}


export default Skills;