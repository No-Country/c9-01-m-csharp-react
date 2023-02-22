import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import { AiOutlineRight } from "react-icons/ai";

const BookDescription = () => {

    let { bookDescription, categoryName } = useParams();

  return (

    <>
        <Header/>
        <div id='bookDescription'>
            <p className='flex items-center mx-5 mt-4'>
                <span> <Link to={"/library"}>Biblioteca</Link></span>
                <span className='mx-3'> <AiOutlineRight/></span>
                <span><Link to={`/library/${categoryName}`}>{categoryName}</Link></span>
            </p>
        </div>
    </>
    
  )
}

export default BookDescription;