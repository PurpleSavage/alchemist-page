import style from '../../css/landing/end.module.css';

export default function End() {
  return (
    <section className={`h-screen  overflow-hidden relative ${style.gradient} `}>
        <div className={` ${style.circleLeft} bg-black w-[1400px] h-[1400px] overflow-hidden flex gap-10`}>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
        </div>
        <div className={` ${style.circleRight} bg-black w-[1400px] h-[1400px] overflow-hidden flex justify-end  gap-10`}>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
            <div className={`w-[100px] h-full ${style.barGradient} `}></div>
        </div>
        <div className={`absolute z-10 left-0 top-0 right-0 bottom-0 flex items-center justify-center ${style.overlay}`}>
            <p className='text-white text-5xl w-1/2 text-center italic font-bold'
            >Dale una oportunidad y únete a la comunidad de Alchemist</p>
        </div>
    </section>
  );
}
