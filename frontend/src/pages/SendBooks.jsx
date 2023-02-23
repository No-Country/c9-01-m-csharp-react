import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const SendBooks = () => {

    const {handleSubmit,register, reset} = useForm()

    const submit = data =>{
        const  URL  = 'aca va la url de donde se hace el login del backend'
        axios.post(URL, data)
            .then(res=> {
                localStorage.setItem('token', res.data.data.token)
            })
            .catch(err => console.log(err))
            reset({
                nameBook:"",
                author:"",
                category:"",
                price:"",
                description:""
            })
   }
  return (
    <div className='bg-slate-400 h-auto flex-col justify-center items-center py-4'>
        
      
        <div className='max-h-max bg-white  flex flex-col justify-center items-center rounded-3xl w-80 mx-auto '>
        
        <form className='w-72 mx-4  pt-4' onSubmit={handleSubmit(submit)}>
            <div className='flex flex-col mb-4'>
                <label className='text-sm' htmlFor='name'>Nombre del libro</label>
                <input className='border-2 px-2 text-sm h-9 rounded' type='text' id='name' {...register("name")} placeholder="Introduzca el nombre del libro"/>
            </div>
            <div className='flex flex-col mb-4'>
                <label className='text-sm' htmlFor="author">Autor</label>
                <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="author"{...register("author")} placeholder="nombre del libro"/>
            </div>
            <div className='flex flex-col mb-4'>
                <label className='text-sm' htmlFor="category">Categoria</label>
                <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="category"{...register("category")} placeholder="nombre del libro"/>
           	</div>
            <div className='flex flex-col mb-4'> 
                <label className='text-sm' htmlFor="price">Precio</label>
                <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="price"{...register("price")} placeholder="nombre del libro"/>
            </div>
            	 
            <div className='flex flex-col mb-4'>
                <label className='text-sm' htmlFor="description">Descripcion del producto</label>
                <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="description"{...register("description")} placeholder='nombre del libro'/>
            </div>
            <button className='bg-gray-600 text-white w-full py-2 rounded-3xl mb-4'>Enviar</button>
        </form> 
        </div>
    </div>
  )
}

export default SendBooks