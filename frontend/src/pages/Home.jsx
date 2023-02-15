import React from 'react'
import BookCarouselSection from '../Components/BookCarouselSection'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Home = () => {
    const sections = ['Descuentos', 'Recomendaciones', 'Ultimos lanzamientos'];
  return (
    <div>
      <Header/>
      {sections.map((section, id) => {return <BookCarouselSection name={section} key={id} />})}
      <Footer />
      
    </div>
  )
}

export default Home