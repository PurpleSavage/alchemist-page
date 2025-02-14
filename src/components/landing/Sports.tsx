'use client'
import { useRef, useState, useEffect } from 'react'
import style from '../../css/landing/sports.module.css'

export default function Sports() {
    const contRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true); // Activar la animación solo una vez
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5, // Se activa cuando el 50% del elemento es visible
            }
        );

        const currentRef = contRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section className="space-y-16">
            <h2 className="text-5xl font-bold text-center">Apuesta en deportes como</h2>
            <div className="w-2/3 mx-auto relative">
                <div className={`${style.parent}`}>
                    <div className={`${style.div7}`}>7</div>
                    <div className={`${style.div9}`}>9</div>
                    <div className={`${style.div10}`}>10</div>
                    <div className={`${style.div13}`}>13</div>
                    <div className={`${style.div14}`}>14</div>
                    <div className={`${style.div15}`}>15</div>
                </div>
                <div
                    ref={contRef}
                    className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center ${style.overlay}`}
                >
                    <h3 className={`text-8xl text-end w-2/5 text-black ${style.textTransparent} ${isVisible ? style.divAnimationLeft : style.hidden}`}>FUTBOL</h3>
                    <h3 className={`text-8xl text-black w-2/5 ${style.textTransparent} ${isVisible ? style.divAnimationRight : style.hidden}`}>NBA</h3>
                    <h3 className={`text-8xl text-end w-2/5 text-black ${style.textTransparent} ${isVisible ? style.divAnimationLeft : style.hidden}`}>NFL</h3>
                    <h3 className={`text-8xl text-black w-2/5 ${style.textTransparent} ${isVisible ? style.divAnimationRight : style.hidden}`}>UFC</h3>
                    <h3 className={`text-8xl text-black w-2/5 text-start ${style.textTransparent} ${isVisible ? style.divAnimationLeft : style.hidden}`}>MLB</h3>
                </div>
            </div>
        </section>
    );
}
