import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../Components/Header'
import autoayuda from '../DB/autoAyuda';
import { BsTrash } from 'react-icons/bs';

const Cart = () => {

    const [librosMostrar, setLibrosMostrar] = useState([])

    useEffect(()=>{
        setLibrosMostrar([...autoayuda]);
      },[0])

      const code = 10;
      

    const subtotal = ()=>{
        return librosMostrar[0].price + librosMostrar[1].price
    }
     
   
    const total = (codeP) => {
        const porcentajecode =  subtotal() * codeP / 100
        console.log(subtotal(),codeP, porcentajecode)
       return subtotal  - parseInt(porcentajecode )
    }
    console.log(subtotal)




  return (
    <div className='mb-8 flex flex-col justify-center items-center '>
        <Header/>
{/*          */}
        <h2 cl assName='text-3xl px-8 py-4'>Carrito de compras</h2>

        {/* <div className='max-w-4xl mb-8'>
            <div className='flex p-8 gap-4 justify-between max-w-3xl'>
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
                <BsTrash/>
                    <h3>${librosMostrar[0].price}</h3>
                </div>
            </div>
        <div className='flex p-8 gap-4 justify-between max-w-3xl'>
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
               <BsTrash />
                <h3>${librosMostrar[1].price}</h3>
            </div>
        </div>

       </div>   
       <div className='mb-8'> 
        <div className='flex gap-4 justify-between max-w-3xl w-80'>
            <h4>subtotal:</h4>
             <h4>{subtotal()} $</h4> 
        </div>
        <div  className='flex gap-4 justify-between max-w-3xl w-80'>
            <h4>Código promocional</h4>
            <h4>{code}%</h4>
        </div>
        <div className='flex gap-4 justify-between max-w-3xl w-80'>
            <h4>Total</h4>
            <h4>17,982 $</h4>
        </div>
       </div> */}

       <NavLink to={"/pay"} style={({ isActive }) => isActive ? activeStyle : undefined }><button className=' bg-[#FDB849] px-12 py-2 font-semibold rounded-3xl'>Iniciar compra</button></NavLink>
         
    </div>
  )
}

export default Cart