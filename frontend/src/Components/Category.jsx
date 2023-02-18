import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

const Category = () => {
    const categoria = useParams();
    let {categoryName} = categoria;
    console.log(categoryName)
  return (
    <div>
        <Header/>
          <h2 className="text-xl px-5 my-5" style={{fontSize:"2.5rem"}}>{categoryName}</h2>
          <p>Aqui deberia ir la paginacion</p>
        <Footer/>
    </div>
  )
}

export default Category