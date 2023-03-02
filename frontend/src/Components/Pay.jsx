import React from 'react'
import Header from './Header'
import { FaUserAlt } from 'react-icons/fa';
import PayCard from './PayCard';
//import { AiOutlineMail } from 'react-icons/fa';
// import { RiMapPin2Line } from 'react-icons/fa';
// import { FaHeadphones } from 'react-icons/fa';

const Pay = () => {





  return (
    <div>
        <Header/>
        <div className='flex flex-col gap-8 m-4'>
            <h3 className=' pt-4 text-sm font-normal'>Carrito de compras &gt; pago</h3>
           
           
            <div className=' p-4 border-2 flex flex-col justify-items-center gap-2 rounded-lg max-w-xs'>
                <h4 className=' font-normal text-xs flex gap-4 py-1 '><FaUserAlt className='text-slate-500 text-xs font-normal my-1 justify-self-center' /> Federico Cañas</h4>
                <h4 className=' font-normal text-xs flex gap-4 py-1'><FaUserAlt className='text-slate-500 text-xs font-normal my-1'  /> fede@gmail.com </h4>
                <h4 className=' font-normal text-xs flex gap-4 py-1'><FaUserAlt className='text-slate-500 text-xs font-normal my-1' /> Av. estrella 555 <br /> CP 1499, Argentina</h4>
                <h4 className=' font-normal text-xs flex gap-4 py-1'><FaUserAlt className='text-slate-500 text-xs font-normal my-1'  /> (011)514517511</h4>
            </div>
           
               
           <div className=''>
            <PayCard />
        </div>
           
        </div>
        
        
       
    </div>
  )
}

export default Pay