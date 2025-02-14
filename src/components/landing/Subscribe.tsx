import style from '../../css/landing/subscribe.module.css'
import SubscribeForm from './SubscribeForm'
export default function Subscribe() {
  return (
    <section className='overflow-hidden relative  mx-auto w-[80%] h-[500px]  min-h-screen '>
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
            <SubscribeForm/>
        </div>
    </section>
  )
}
