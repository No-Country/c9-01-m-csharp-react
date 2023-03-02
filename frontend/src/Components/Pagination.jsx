import React, { useEffect, useState } from 'react'
import Book from './Book';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import autoayuda from '../DB/autoAyuda';
import arteYdisenio from '../DB/arteYdisenio';


const Pagination = () => {

  let { categoryName } = useParams();
  
  const [librosMostrar, setLibrosMostrar] = useState([])
  
  useEffect(()=>{
    if(categoryName==="Autoayuda"){
      setLibrosMostrar([...autoayuda]);
    }
    if(categoryName === "Arte y Diseño"){
      setLibrosMostrar([...arteYdisenio]);
    }
  },[])

  console.log(librosMostrar)

  return (
    <>
      <div className='grid gap-1 grid-cols-2 md:grid-cols-4 mx-auto px-4 my-4'>
      {
        librosMostrar.map((libro, index)=>{

          return(
            <div className='mx-auto my-3' key={index}>
              <Link to={`/library/${categoryName}/${libro.id}`}>
                <Book photoUrl={libro.photoUrl} title={libro.name} author={libro.author} price={libro.price} />
              </Link>
            </div>
            
          )
        })
      }
      </div>

      <div className='flex justify-center my-6'>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" ></path></svg>
            </a>
          </li>

          <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          
          <li>
            <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" ></path></svg>
            </a>
          </li>
        </ul>
      </nav>
      </div>

      
    </>
    
  )
}

export default Pagination;