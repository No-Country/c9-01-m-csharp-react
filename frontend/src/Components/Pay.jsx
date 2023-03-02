import React from 'react'
import Header from './Header'
import PayCard from './PayCard';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMapPin2Line } from 'react-icons/ri';
import { FiSmartphone } from 'react-icons/fi';







const Pay = () => {





  return (
    <div>
        <Header/>
        <div className='flex flex-col gap-8 m-4 justify-center md:items-center  max-w-full'>
          <div>
            <h3 className=' pt-4 text-sm font-normal'>Carrito de compras &gt; pago</h3>
           
           
            <div className=' p-4 border-2 flex flex-col justify-items-center gap-2 rounded-lg max-w-xs'>
                <h4 className=' font-normal text-xs flex gap-4 py-1 '><FaUserAlt className='text-slate-500 text-lg' /> Federico Cañas</h4>
                <h4 className=' font-normal text-xs flex gap-4 py-1'><AiOutlineMail className='text-lg'/> fede@gmail.com </h4>
                <h4 className=' font-normal text-xs flex gap-4 py-1'><RiMapPin2Line className='text-slate-500 text-lg font-normal ' />  Av. estrella 555 <br /> CP 1499, Argentina</h4>
                <h4 className=' font-normal text-xs flex gap-4 py-1'><FiSmartphone className='text-slate-500 text-lg font-normal '/> (011)514517511</h4>
            </div>
           
               
            <div className=''>
                <PayCard />
            </div>
              
            </div>

          </div>
            
        
        
       
    </div>
  )
}

export default Pay