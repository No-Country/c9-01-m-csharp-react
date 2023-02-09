import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {  BsSearch } from "react-icons/bs";
import {VscChromeClose} from "react-icons/vsc";
import { AiOutlineRight } from "react-icons/ai";
import "./Header.css";

const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  let isOpen = 'p-5 w-screen h-screen bg-zinc-200 absolute inset-0';
  let isClose = 'p-5 w-screen h-screen bg-zinc-200 absolute posicionamiento';
    
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
      
      <div className={isOpenMenu ? isOpen : isClose}  id='menu-desplegable'>
        
        <div className='w-full'>
          <VscChromeClose onClick={()=>{setIsOpenMenu(!isOpenMenu)}} className='cursor-pointer'/>
        </div>
        <div className='relative w-full pt-6'>
          <a href='#'>No Ficción</a>
          <AiOutlineRight className='absolute top-7 right-4' />
        </div>

        <div className='relative w-full pt-6'>
          <a href='#'>Ficción</a>
          <AiOutlineRight className='absolute top-7 right-4' />
        </div>
        
        <div className='w-full pt-6'>
          <a href='#'>Best seller</a>
        </div>

        <div className='w-full pt-6'>
          <a href='#'>Descuentos</a>
        </div>

      </div>
      
    </div>
    
  )
}

export default Header