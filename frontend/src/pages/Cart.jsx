import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../Components/Header'
import autoayuda from '../DB/autoAyuda';

const Cart = () => {

    const [librosMostrar, setLibrosMostrar] = useState([])

    useEffect(()=>{
        setLibrosMostrar([...autoayuda]);
      },[0])







  return (
    <div className='mb-8 flex flex-col justify-center items-center '>
        <Header/>
       
       <h2 cl assName='text-3xl px-8 py-4'>Carrito de compras</h2>

       {/* <div className='w-full '>
        <div className='flex p-8 gap-4 justify-between max-w-2xl'>
            <div className='flex gap-4'>
                <div className='h-20 w-16'>
                    <img src={librosMostrar[0].photoUrl} alt="foto de libro" />
                </div>
                <div  className='flex flex-col justify-between self-start'>
                    <div className='mb-4'>
                        <h3 className='font-semibold text-base'>{librosMostrar[0].name}</h3> 
                        <h4 className='font-light text-xs'>{librosMostrar[0].author}</h4>
                    </div>
                    <div>
                    - 01 + 
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between'>
               <h1 className=''>bote</h1>
                <h3>${librosMostrar[0].price}</h3>
            </div>
        </div>
        <div className='flex p-8 gap-4 justify-between'>
            <div className='flex gap-4'>
                <div className='h-20 w-16'>
                    <img src={librosMostrar[1].photoUrl} alt="foto de libro" />
                </div>
                <div  className='flex flex-col justify-between self-start'>
                    <div className='mb-4'>
                        <h3 className='font-semibold text-base'>{librosMostrar[1].name}</h3> 
                        <h4 className='font-light text-xs'>{librosMostrar[1].author}</h4>
                    </div>
                    <div>
                    - 01 + 
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between'>
               <h1 className=''>bote</h1>
                <h3>${librosMostrar[1].price}</h3>
            </div>
        </div>

       </div> */}
       <div> 
        <h4>subtotal:<span></span></h4>
        <h4>Código promocional<span></span></h4>
        <h4>Total</h4>
       </div>

       <NavLink to={"/pay"} style={({ isActive }) => isActive ? activeStyle : undefined }><button className=' bg-[#FDB849] px-12 py-2 font-semibold rounded-3xl'>Iniciar compra</button></NavLink>
       
    </div>
  )
}

export default Cart