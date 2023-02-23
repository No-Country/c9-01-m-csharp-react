import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const Register = () => {
    const {handleSubmit,register, reset} = useForm()

const submit = (data) => {
    const URL = 'url del backend para el register'
    axios.post(URL, data)
        .then(res=> console.log(res))
        .catch(err=>console.log(err))
        reset({
            name: "",
            lastName:"",
            email:"",
            password:""
        })
}
  return (

    <div className='bg-slate-400 h-auto'>
        <div className='max-h-72 overflow-hidden ... '>
            <img src="https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bookstore" />
        </div>
        <div className='max-h-max bg-white  flex flex-col justify-center items-center rounded-3xl w-80 mx-auto '>
             <div className='flex w-72 items-center justify-center mt-2.5'>
                <h3 className='bg-gray-600 px-4 py-2 rounded-3xl text-white text-sm'>iniciar sesión</h3>
                <h3 className='bg-gray-400 px-4 py-2 rounded-r-3xl text-white text-sm'  >Registrarse</h3>
            </div>
            <h2 className='my-8 text-2xl'>welcome text</h2>
            <form className='w-72 mx-4 ' onSubmit={handleSubmit(submit)}>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='name'>Nombre</label>
                    <input className='border-2 px-2 text-sm h-9 rounded' type='text' id='name' {...register("name")} placeholder="Introduzca su nombre"/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='lastName'>Apellido</label>
                    <input className='border-2 px-2 text-sm h-9 rounded' type='text' id='lastName' {...register("lastName")} placeholder="Introduzca su apellido"/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='email'>Correo electronico</label>
                    <input className='border-2 px-2 text-sm h-9 rounded' type='text' id='email'{...register("email")}placeholder="example@mail.com"/>
                </div>
                <div className='flex  flex-col mb-20'>
                    <label htmlFor='password'>contraseña</label>
                    <input className='border-2 px-2 text-sm h-9 rounded' type='password' id='password' {...register("password")} placeholder="********"/>
                </div>
                <button className='bg-gray-600 text-white w-full py-2 rounded-3xl'>iniciar sesión</button>
            </form>
            <p className='mb-4'>¿olvidaste tu contraseña?</p>
        </div>
       
    </div>
)
}

export default Register