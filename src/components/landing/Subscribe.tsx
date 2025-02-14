import style from '../../css/landing/subscribe.module.css'
import Image from 'next/image'
export default function Subscribe() {
  return (
    <div className='overflow-hidden relative  mx-auto w-[80%] h-[500px]  min-h-screen '>
        <div className={`${style.meteorContainer}`}>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
        </div>
        <div className='flex flex-col items-center justify-center absolute bottom-0 left-0 
        right-0 top-0 z-10 gap-16'>
            <h2 className='text-5xl font-bold'>Regístrate y forma parte de Alchemist</h2>
            <form className={`${style.form}  border-2 border-slate-500/50 p-4 w-2/5 space-y-4 rounded-md`}>
                <div className='w-full justify-center flex'>
                    <Image
                        width={80}
                        height={25}
                        src={'/logo.png'}
                        alt='triangulo '
                    />
                </div>
                <div className='space-y-2'>
                    <label htmlFor="" className='block'>Nombre</label>
                    <input 
                        type="text" 
                        placeholder='Nombre' 
                        className='bg-transparent border border-slate-500/50 h-10 w-full px-2 rounded-md'
                    />
                </div>
                <div className='space-y-2'>
                    <label htmlFor="" className='block'>Email</label>
                    <input 
                        type="text" 
                        placeholder='Email' 
                        className='bg-transparent border border-slate-500/50 h-10 w-full px-2 rounded-md'
                    />
                </div>
                <div className='space-y-2'>
                    <label htmlFor="" className='block'>Número de teléfono</label>
                    <input 
                        type="text" 
                        placeholder='933256487' 
                        className='bg-transparent border border-slate-500/50 h-10 w-full px-2 rounded-md' 
                    />
                </div>
                <button 
                    type='submit' 
                    className='w-full text-center text-white py-2 rounded-md hover:bg-yellow-600
                     bg-yellow-500 shadow-lg shadow-yellow-500/50'
                >Enviar</button>
            </form> 
        </div>
    </div>
  )
}
