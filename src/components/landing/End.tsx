import style from '../../css/landing/end.module.css';

export default function End() {
  return (
    <section className={`h-screen  overflow-hidden relative ${style.gradient} `}>
        <div className={`${style.meteorContainer} z-50 rotate-90 `}>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
        </div>
        <div className={` ${style.circleLeft} bg-black w-[400px] md:w-[1400px] shadow-lg shadow-yellow-800/50 
         h-[400px] md:h-[1400px] overflow-hidden flex gap-10 z-10`}>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
        </div>
        <div className={` ${style.circleRight} bg-black w-[400px] md:w-[1400px] h-[400px] md:h-[1400px] shadow-lg shadow-yellow-800/50 
         overflow-hidden flex justify-end z-10 ${style.radialGradient}  gap-10`}>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
        </div>
        <div className={`absolute z-30 left-0 top-0 right-0 bottom-0 flex items-center justify-center ${style.overlay}`}>
            <p className='text-white text-3xl md:text-5xl w-1/2 text-center italic font-bold'
            >Dale una oportunidad y únete a la comunidad de Alchemist</p>
        </div>
    </section>
  );
}
