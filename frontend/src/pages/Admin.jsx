import React from 'react'
import AdminProducts from '../Components/AdminProducts'

const Admin = () => {
  return (
    <div className=' flex'>
        <div className='bg-[#7BBFCC] h-auto w-56 pl-6 pt-6 flex flex-col gap-8' id="sidebar ">
            <div className='flex gap-8'>
                <div className='h-10 w-20 bg-[#FDB849] rounded-full self-center'>
                    <img src="" alt="" />
                </div>
                <h3>nombre del vendedor</h3>
            </div>
            <div className='flex flex-col gap-2'>
            <h4>Administrar</h4>
            <h4>Ventas</h4>
            <h4>Productos</h4>
            <h4>Lista de productos</h4>
            <h4>Categorias</h4>
            </div>
            
        </div>
        <div className='w-full'>
            <AdminProducts/>
        </div>
    </div>
  )
}

export default Admin