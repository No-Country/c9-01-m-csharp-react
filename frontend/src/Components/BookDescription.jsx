import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import { AiOutlineRight } from "react-icons/ai";

const BookDescription = () => {

    let { bookDescription, categoryName } = useParams();

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
        </div>
        
    </>
    
  )
}

export default BookDescription;