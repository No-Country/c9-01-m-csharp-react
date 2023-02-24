import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import { AiOutlineRight} from "react-icons/ai";
import { SlStar } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import Footer from "./Footer";
import { Collapse } from 'react-collapse';


const AccordionItem=({open, toggle, title, description})=>{

  return(

    <div className='pt-[10px]'>
        <div onClick={toggle} className='bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer'>
          <p className='text-[22px] font-semibold '>
            {title}
          </p>
          <div className='text-[30px]'>
            
            {open ? "Abierto" : "pegado"}
          </div>
        </div>

        <Collapse isOpened={open}>
          <div className='bg-white px-[50px] pb-[20px]'>
            {description}
          </div>
        </Collapse>
    </div>
  )
}

const BookDescription = () => {

  const [open, setOpen] = useState(false)

  const toggle =(index)=>{
    if(open===index){

      return setOpen(null)
    }

    setOpen(index)

  }

  let { bookDescription, categoryName } = useParams();

  let accordionData =[

    {
      title:"this is a demo title",
      description:"lorem ipsum"
    },
    {
      title:"this is a demo title",
      description:"lorem ipsum"
    },

    {
      title:"this is a demo title",
      description:"lorem ipsum"
    },

    {
      title:"this is a demo title",
      description:"lorem ipsum"
    },
    
  ]

  return (

    <>
        <Header/>
        <div className='p-5'>
          <div id='bookDescription'>
              <p className='flex items-center'>
                  <span> <Link to={"/library"}>Biblioteca</Link></span>
                  <span className='mx-3'> <AiOutlineRight/></span>
                  <span><Link to={`/library/${categoryName}`}>{categoryName}</Link></span>
              </p>
          </div>

          <div id='book' className='w-full my-5 '>
            <img className='w-[190px] h-[260px] mx-auto' src="https://images.unsplash.com/photo-1465848059293-208e11dfea17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt='image'/>
          </div>

          <div className='flex items-center justify-between'>
              <h2 id='nameBook' className='text-4xl'>Meditations</h2>
              <p id='price' className='text-3xl'>$ 9.99</p>
          </div>

          <p id='author' className='my-2'>Marcus Aurelio</p>
          <div id='valoration' className='flex'>
            <SlStar className='mr-2'/>
            <SlStar className='mx-2'/>
            <SlStar className='mx-2'/>
            <SlStar className='mx-2'/>
            <SlStar className='mx-2'/>
          </div>

          <div className='w-full mt-6 grid gap-3 grid-cols-12'>
            <button className='bg-stone-200 col-span-10 py-2'>Añadir al carrito</button>
            <button className='bg-stone-200 col-span-2 py-2 flex items-center justify-center'><FcLike/></button>
          </div>
          
          <section className='grid place-items-center'>

            {
              accordionData.map((data,index)=>{

                return <AccordionItem 
                        key={index} 
                        open={index === open} 
                        title={data.title} 
                        description={data.description}
                        toggle={()=>{toggle(index)}}
                        />
              })
            }

          </section>
          
        </div>
        <Footer/>
    </>
    
  )
}

export default BookDescription;