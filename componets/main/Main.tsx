"use client";
import styles from './main.module.scss'
import { useEffect, useRef } from 'react';
import { useMediaQuery } from '../../hooks/index';
import { gsap } from 'gsap';

const Main = () => {
    const isMobile800 = useMediaQuery(800);
    const isMobile485 = useMediaQuery(450);
    const mainTitle = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!mainTitle.current) return;

        // Проверка на prefers-reduced-motion
        // const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        // if (mediaQuery?.matches) return;

        // Цветовая анимация
        const colors = gsap.to(mainTitle.current, {
            paused: true,
            duration: 20,
            repeat: -1,
            '--hue': 360,
        });

        // Функция случайного мерцания
        const doRandom = () => {
            if (!mainTitle.current) return;

            gsap.timeline()
                .to(mainTitle.current, {
                    duration: 0.1,
                    opacity: gsap.utils.random(0.90, 0.95),
                    delay: gsap.utils.random(0.1, 2),
                })
                .to(mainTitle.current, {
                    duration: 0.1,
                    opacity: 1,
                    onComplete: doRandom
                });
        };

        colors.play();
        doRandom();

        // Очистка анимаций 
        return () => {
            colors.kill();
            gsap.killTweensOf(mainTitle.current);
        };
    }, []);

    // прокрутка
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className={styles.main}
            style={{ backgroundImage: isMobile485 ? '' : `url('/img/main${isMobile800 ? '-mobile' : ''}.png')` }}
        >
            <div className={styles.main_inner}>
                <h1
                    className={styles.main_title}
                    ref={mainTitle}
                    style={{ '--hue': 0 } as React.CSSProperties}
                >
                    Welcome to my blog                </h1>

                <div className={styles.main_description}>
                    <p>Это мой первый полноценный веб-проект — блог,
                        разработанный с использованием React, Next.js и TypeScript(JavaScript)
                    </p>
                </div>

                <button
                    onClick={() => scrollTo('contact')}
                    className={styles.main_btn}
                >
                    Обратная связь
                </button>

                {!isMobile800 && (
                    <button
                        onClick={() => scrollTo('about')}
                        className={styles.main_arrow}
                        aria-label="Перейти к разделу 'Обо мне'"
                    />
                )}

                {!isMobile485 && (
                    <button
                        onClick={() => scrollTo('about')}
                        className={styles.main_arrow}
                        aria-label="Перейти к разделу 'Обо мне'"
                    />
                )}
            </div>
        </section>
    );
};

export default Main;
