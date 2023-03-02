import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {  BsSearch } from "react-icons/bs";
import {VscChromeClose} from "react-icons/vsc";
import "./Header.css";
import {Link, NavLink} from 'react-router-dom';

import "../index.css";

const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  let isOpen = 'z-40 p-5 w-screen h-screen  absolute inset-0 transition-all bg-color-color-principal';
  let isClose = 'z-40 p-5 w-screen h-screen  absolute posicionamiento transition-all bg-color-color-principal';
  let activeStyle = {
    textDecoration: "underline",
  };
    
  return (
    <div className='relative'>
      <div id='Header' className='bg-color-color-principal w-screen p-5' style={{height:"120px"}}>

        <div id='buttons-header ' className='flex justify-between items-center'>
          
            <FaBars className='text-base cursor-pointer' onClick={()=>{setIsOpenMenu(!isOpenMenu)}}/>

          <Link to={'/'}>
            <h1 className='text-base text-center w-full'>Libros</h1>
          </Link>

          <div className='flex '>
            <Link to={'/perfil'}>
              <FaUserAlt className='mx-2 text-base'/>
            </Link>

            <Link to={'/cart'} >
              <FaShoppingCart className='mx-2 text-base'/>
              </Link>
            
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
        <div className='w-full pt-6'>
          
          <NavLink to={"/"}             
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
          }>Home</NavLink>
        </div>

        <div className='w-full pt-6'>
          <NavLink to={"/library"}             
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
          }>Biblioteca</NavLink>
        </div>

        <div className='w-full pt-6'>
          <NavLink to={"/library/Best-sellers"}             
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Best-sellers</NavLink>
        </div>
       
        <div className='w-full pt-6'>
          <NavLink to={"/library/Descuentos"}             
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Descuentos</NavLink>
        </div>

        <div className='w-full pt-6'>
          <NavLink to={"/perfil"}
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
          }>Perfil</NavLink>
        </div>

      </div>
      
    </div>
    
  )
}

export default Header