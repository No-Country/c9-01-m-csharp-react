import axios from 'axios'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {Link, NavLink} from 'react-router-dom';
import Header from '../Components/Header';

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

        <div>

        <Header/>
        <div className='bg-[#7BBFCC] h-screen relative'>
            <div className='max-h-72 overflow-hidden ... flex justify-center items-center' >
                <img src="https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='max-h-max bg-white  flex flex-col justify-center items-center rounded-3xl w-80 mx-auto absolute top-64 left-1/2 -translate-x-1/2'>
                <div className='flex w-72 items-center justify-center mt-2.5 relative'>
                    <h3 className='bg-gray-600 px-4 py-2 rounded-3xl left-10 text-white text-sm absolute cursor-pointer' >iniciar sesión</h3>
                    <h3 className='bg-gray-400 px-6 pl-8 py-2 rounded-r-3xl ml-24 text-white text-sm cursor-pointer'  > <NavLink to={"/register"} style={({ isActive }) => isActive ? activeStyle : undefined }>Registrarse</NavLink></h3>
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
                    <button className='bg-[#FDB849] text-white w-full py-2 rounded-3xl' >iniciar sesión</button>
                </form>     
                <h3 className='mb-4'>¿Olvidaste tu contraseña?</h3>
            </div>
         
        </div>
        </div>

    )
}

export default Login