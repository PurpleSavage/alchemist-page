import style from '../../css/landing/main.module.css'
//import Image from 'next/image'
export default function Main() {
  return (
    <main className="relative bg-black flex items-center justify-center h-screen">
        <video width="800" height="800" autoPlay loop muted playsInline className="">
            <source src="/videos/credit-cards.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
        </video>
        <div className={`absolute flex flex-col justify-center bottom-0 right-0 left-0 top-0 ${style.gradient}`} > 
            {/* <div className="flex items-center justify-between w-[35%] mx-auto px-4 rounded-lg mt-16 border border-slate-600/50 "
            style={{ backdropFilter: 'blur(8px)' }}>
                <div> 
                    <Image
                        width={35}
                        height={25}
                        src={'/logo.png'}
                        alt='Logo of Alchemist- sports, betting and casino '
                        priority={true}
                    />
                </div>
                <nav className="grow flex items-center justify-end">
                    <button className='text-white rounded py-1 px-4  
                     hover:bg-yellow-600 bg-yellow-500 shadow-lg shadow-yellow-500/50'
                    >
                        Comenzar
                    </button>
                </nav>
            </div> */}
            <div className='h-full border-dashed border-b border-slate-400/50 flex items-center  justify-center  w-full' > 
                <div className='h-full flex items-center justify-center '>
                    <h1 className={`tracking-widest text-7xl ${style.fadeText}  ${style.degraded} italic font-semibold  -rotate-90 uppercase`}
                    >Alchemist</h1>
                </div>
                <p 
                    className='text-5xl text-center border-dashed
                      h-full flex items-center font-bold uppercase border-x  border-slate-400/50'
                >
                    Deposita, nosotros jugamos por ti.
                </p>
                <div className='h-full flex items-center justify-center '>
                    <h1 className={`tracking-widest text-7xl ${style.fadeText}  ${style.degraded} italic font-medium rotate-90 uppercase`}
                    >Alchemist</h1>
                </div>
            </div>
        </div>
    </main>
  ) 
}
