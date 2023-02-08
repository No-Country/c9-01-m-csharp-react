import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {  BsSearch } from "react-icons/bs";

const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  let positionamiento ={
    position:"absolute",
    top:"0",
    bottom:"0",
    left:"-100%",
    right:"0"
  }
    
  return (
    <div className='relative'>
      <div id='Header' className='w-screen p-5' style={{height:"120px"}}>

        <div id='buttons-header ' className='flex justify-between items-center'>
          
            <FaBars className='text-base cursor-pointer' onClick={()=>{setIsOpenMenu(!isOpenMenu)}}/>
          
          <h1 className='text-base text-center w-full'>Libros</h1>

          <div className='flex '>
            <FaUserAlt className='mx-2 text-base'/>
            <FaShoppingCart className='mx-2 text-base'/>
          </div>
        </div>

        <div className='relative mt-5'>
          <input type='text' className='w-full bg-zinc-200 p-2 rounded-md' id='search' placeholder='Buscar libros autores, ect.'/>
          <BsSearch className='absolute top-3 right-4'/>
        </div>

      </div>
      {
        isOpenMenu ?
        (<div className='w-screen h-screen bg-zinc-200 absolute inset-0'  id='menu-desplegable'>
        
        </div>) : 
        
        (<div className='w-screen h-screen bg-zinc-200 absolute inset-0'  id='menu-desplegable' style={positionamiento}>
        
        </div>)
      }
    </div>
    
  )
}

export default Header