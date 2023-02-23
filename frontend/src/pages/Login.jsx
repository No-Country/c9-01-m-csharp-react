import axios from 'axios'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

const Login = () => {
// data el  donde viene el password y correo con lo que hace login 

const {handleSubmit, register, reset} = useForm()

const submit = data =>{
    const  URL  = 'aca va la url de donde se hace el login del backend'
    axios.post(URL, data)
        .then(res=> {
            localStorage.setItem('token', res.data.data.token)
        })
        .catch(err => console.log(err))
        reset({
            email: "",
            password: ""
        })
}



    return (


        <div className='bg-slate-400 h-auto'>
            <div className='max-h-72 overflow-hidden ... ' >
                <img src="https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='max-h-max bg-white  flex flex-col justify-center items-center rounded-3xl w-80 mx-auto '>
                <div className='flex w-72 items-center justify-center mt-2.5'>
                    <h3 className='bg-gray-600 px-4 py-2 rounded-3xl text-white text-sm'>iniciar sesión</h3>
                    <h3 className='bg-gray-400 px-4 py-2 rounded-r-3xl text-white text-sm'  >Registrarse</h3>
                </div>
                <h2 className='my-8 text-2xl'>welcome text</h2>
                <form className='w-72 mx-4 ' onSubmit={handleSubmit(submit)}>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor='email' className='text-sm'>Correo electronico</label>
                        <input type='text' id='email'{...register("email") } placeholder="example@mail.com" className='border-2 px-2 text-sm h-9 rounded'/>
                    </div>
                    <div className='flex  flex-col mb-20'>
                        <label htmlFor='password' className='text-sm'>Contraseña</label>
                        <input type='password' id='password'{...register("password")} placeholder="********" className='border-2 px-2 text-sm h-9 rounded' />
                    </div>
                    <button className='bg-gray-600 text-white w-full py-2 rounded-3xl' >iniciar sesión</button>
                </form>     
                <h3 className='mb-4'>¿Olvidaste tu contraseña?</h3>
            </div>
         
        </div>

    )
}

export default Login