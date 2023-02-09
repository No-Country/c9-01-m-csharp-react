import React from 'react'
import Slider from '../components/Slider'


const arrayImafes = [
    "https://images.pexels.com/photos/12360588/pexels-photo-12360588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5084674/pexels-photo-5084674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/159778/books-reading-series-narnia-159778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]
const Home = () => {
  return (
    <div className='mx-auto'>
        <Slider imagenes={arrayImafes}/>
    </div>

  )
}

export default Home