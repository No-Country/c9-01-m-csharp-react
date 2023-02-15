import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
    const categoria = useParams();
    console.log(categoria)
  return (
    <div>
        hola
        {categoria.CategoryName}
    </div>
  )
}

export default Category