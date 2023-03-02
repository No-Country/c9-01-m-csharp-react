import React from 'react'
import SendBooks from './SendBooks'


const AdminProducts = () => {
  return (
    <div className='bg-[#FFFFFF] h-screen p-6 flex flex-col gap-8'>
        <div className='flex justify-between'>
            <h2>Productos</h2>
            <button>Agregar un producto</button>
        </div>
        <div className=''>
            
            <div>
                <SendBooks/>

            </div>
        </div>
    </div>
  )
}

export default AdminProducts