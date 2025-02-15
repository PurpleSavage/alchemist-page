import style from '../../css/landing/main.module.css'

export default function Main() {
  return (
    <main className="relative bg-black flex items-center justify-center h-screen">
        <video width="800" height="800" autoPlay loop muted playsInline className="">
            <source src="/videos/credit-cards.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
        </video>
        <div className={`absolute flex flex-col justify-center bottom-0 right-0 left-0 top-0 ${style.gradient}`} > 
            <div className='h-full border-dashed border-b border-slate-400/50 flex md:flex-row flex-col
             items-center  justify-center  w-full' > 
                <div className='h-full hidden md:flex items-center justify-center '>
                    <h1 className={` tracking-widest text-7xl ${style.fadeText}  ${style.degraded} italic font-semibold  -rotate-90 uppercase`}
                    >Alchemist</h1>
                </div>

                <div className='block md:hidden space-y-8 mb-10'>
                    <div className=' items-center justify-center '>
                        <h1 className={`py-2 tracking-widest border-dashed text-5xl border-y border-slate-400/50 md:text-7xl ${style.fadeText}  ${style.degraded} italic font-semibold uppercase`}
                        >Alchemist</h1>
                    </div>
                    <div className=' items-center justify-center '>
                        <h1 className={`tracking-widest text-5xl md:text-7xl ${style.fadeText}  ${style.degraded} italic font-semibold uppercase`}
                        >Alchemist</h1>
                    </div>
                    <div className=' items-center justify-center '>
                        <h1 className={`py-2 tracking-widest border-dashed text-5xl border-y border-slate-400/50 md:text-7xl ${style.fadeText}  ${style.degraded} italic font-semibold uppercase`}
                        >Alchemist</h1>
                    </div>
                    <div className=' items-center justify-center '>
                        <h1 className={`tracking-widest text-5xl md:text-7xl ${style.fadeText}  ${style.degraded} italic font-semibold uppercase`}
                        >Alchemist</h1>
                    </div>
                    <div className=' items-center justify-center '>
                        <h1 className={`py-2 tracking-widest border-dashed text-5xl border-y border-slate-400/50 md:text-7xl ${style.fadeText}  ${style.degraded} italic font-semibold uppercase`}
                        >Alchemist</h1>
                    </div>
                </div>
                <p 
                    className='text-md md:text-5xl text-center border-dashed
                      md:h-full flex items-center font-bold uppercase border-x  border-slate-400/50'
                >
                    Deposita, nosotros jugamos por ti.
                </p>
                <div className='h-full hidden md:flex items-center justify-center '>
                    <h1 className={`tracking-widest text-7xl ${style.fadeText}  ${style.degraded} italic font-medium rotate-90 uppercase`}
                    >Alchemist</h1>
                </div>
            </div>
        </div>
    </main>
  ) 
}
