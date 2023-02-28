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
     
      
    <div className='bg-white h-full w-full '>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit(submit)}>
            <div className='border-2 rounded-2xl p-4'>
                <h3>Titulo y descripción </h3>
                <div className='w-full mx-4  pt-4 grid grid-cols-3 gap-8 p-4  ' >
                    <div className='flex flex-col mb-4'>
                        <label className='text-sm' htmlFor='name mb-4'>Titulo de libro</label>
                        <input className='border-2 px-2 text-sm h-9 rounded' type='text' id='name' {...register("name")} placeholder="Introduzca el titulo del libro"/>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='text-sm' htmlFor="author">Autor</label>
                        <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="author"{...register("author")} placeholder="nombre del autor"/>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='text-sm' htmlFor="category">fecha de publicación</label>
                        <input className='border-2 px-2 text-sm h-9 rounded' type="date" id="category"{...register("category")} placeholder="nombre del libro"/>
                    </div>
                        <div className='flex flex-col mb-4'>
                        <label className='text-sm' htmlFor="gender">Genero</label>
                        <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="gender"{...register("gender")} placeholder="nombre del libro"/>
                    </div>
                    <div className='flex flex-col mb-4'> 
                        <label className='text-sm' htmlFor="editorial">Editorial</label>
                        <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="editorial"{...register("editorial")} placeholder="nombre del libro"/>
                    </div>       
                    <div className='flex flex-col mb-4'>
                        <label className='text-sm' htmlFor="place">lugar de publicación</label>
                        <input className='border-2 px-2 text-sm h-9 rounded' type="country" id="place"{...register("place")} placeholder='pais'/>
                    </div>
                </div>
                
            </div>

            <div className='border-2 rounded-2xl p-4'>
                <h3 className='mb-4'>Fotos</h3>
                <div className='flex flex-col mb-4'>
                    <label className='text-sm' htmlFor="image1">imagen</label>
                    <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="image1"{...register("image1")} placeholder='Link de la imagen'/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-sm' htmlFor="image1">imagen</label>
                    <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="image1"{...register("image1")} placeholder='Link de la imagen'/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-sm' htmlFor="image1">imagen</label>
                    <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="image1"{...register("image1")} placeholder='Link de la imagen'/>
                </div>    
            </div>
            <div className='flex gap-8'>
               <h3>Precios</h3> 
                <div>
                    <div className='flex flex-col mb-4'> 
                        <label className='text-sm' htmlFor="price">Precio</label>
                        <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="price"{...register("price")} placeholder="$"/>
                    </div>
                    <div className='flex flex-col mb-4'> 
                        <label className='text-sm' htmlFor="price2">Precio promocional</label>
                        <input className='border-2 px-2 text-sm h-9 rounded' type="text" id="price2"{...register("price2")} placeholder="$"/>
                    </div>
                </div>
                 
            </div>
            <div>
                <h3>stock</h3>
                <div className='flex flex-col mb-4'> 
                        <label className='text-sm' htmlFor="stock">Cantidad</label>
                        <input className='border-2 px-2 text-sm h-9 rounded' type="stock" id="price"{...register("stock")} placeholder="#"/>
                    </div>
            </div>
            <div className='flex flex-row-reverse gap-8 items-center'>
                <button className='bg-[#007ACC] text-white w-40 py-2 rounded-md mb-4'>Publicar producto</button>
                <button className='py-2 self-center mb-4'>Cancelar</button>
            </div>
            
        </form> 
    </div>
  
  )
}

export default SendBooks