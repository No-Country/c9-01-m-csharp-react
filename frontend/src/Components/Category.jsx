import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Pagination from './Pagination';

const Category = () => {
    const categoria = useParams();
    let {categoryName} = categoria;

  return (
    <div>
        <Header/>
          <h2 className="text-3xl font-medium px-5 my-5">{categoryName}</h2>
          <Pagination/>
        <Footer/>
    </div>
  )
}

export default Category