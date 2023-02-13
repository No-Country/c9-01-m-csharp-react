import React from 'react'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div>
    <Header/>
      {sections.map((section, id) => {return <BookCarouselSection name={section} key={id} />})}
      <Categories />
      <Footer />
    </div>
  )
}

export default Home