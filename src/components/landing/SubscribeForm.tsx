'use client'
import Image from "next/image";
import style from '../../css/landing/subscribe.module.css'
import { FormEvent, useState } from "react";
import { Validators } from "@/utils/validator";
export default function SubscribeForm() {
    const [nombre,setNombre]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [error,setError]=useState("")

    const sendMessage = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if([nombre,email,phone].includes('')){
            setError("hay campos incompletos")
            return
        }
        if(!Validators.email.test(email)){
            setError("No es un email válido")
            return
        }
        const phoneNumber = "51979797894"; 
        const message = encodeURIComponent(
            `Hola, quisiera unirme al grupo, vengo de la web de 
            Alchemist.\n\nEstos son mis datos:\nEmail: ${email}\nNombre: ${nombre}\nCelular: ${phone}`
        );
          
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };
  return (
    <form className={`${style.form}  border-2 border-slate-500/50 p-4 w-5/6 md:w-2/5 space-y-4 rounded-md`} onSubmit={sendMessage}>
                <div className='w-full justify-center flex'>
                    <Image
                        width={80}
                        height={25}
                        src={'/logo.png'}
                        alt='triangulo '
                    />
                </div>
                {error && <p className="py-1 w-full bg-red-600 text-center rounded-md text-white font-bold">{error}</p>}
                <div className='space-y-2'>
                    <label htmlFor="" className='block'>Nombre</label>
                    <input 
                        type="text" 
                        placeholder='Nombre' 
                        className='bg-transparent border border-slate-500/50 h-10 w-full px-2 rounded-md'
                        onChange={(e)=>setNombre(e.target.value)}
                    />
                </div>
                <div className='space-y-2'>
                    <label htmlFor="" className='block'>Email</label>
                    <input 
                        type="email" 
                        placeholder='Email' 
                        className='bg-transparent border border-slate-500/50 h-10 w-full px-2 rounded-md'
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='space-y-2'>
                    <label htmlFor="" className='block'>Número de teléfono</label>
                    <input 
                        type="text" 
                        placeholder='ingresa tu número' 
                        className='bg-transparent border border-slate-500/50 h-10 w-full px-2 rounded-md' 
                        onChange={(e)=>setPhone(e.target.value)}
                    />
                </div>
        <button 
            type='submit' 
            className='w-full text-center text-white py-2 rounded-md hover:bg-yellow-600
            bg-yellow-500 shadow-lg shadow-yellow-500/50'
        >Enviar</button>
    </form>
  )
}
