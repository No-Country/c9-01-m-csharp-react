import React, { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";


const Carousel = () => {

    const slides =[

        {
            url: "https://plus.unsplash.com/premium_photo-1663127315725-3049fe3ec30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1123&q=80"
        },
        {
            url:"https://images.unsplash.com/photo-1491566102020-21838225c3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80"
        },

        {
            url:"https://images.unsplash.com/photo-1520629716099-d147346eb224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
        },
        {
            url:"https://images.unsplash.com/photo-1465848059293-208e11dfea17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide =()=>{
        const isFirstSlide = currentIndex === 0 ;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide =()=>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide =(slideIndex)=>{

        setCurrentIndex(slideIndex);
    }

  return (
    
    <div className='max-w-[1400px] h-[580px] w-full m-auto  relative group'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}  className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </div>

        {/* left arrow*/}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={()=>{prevSlide()}} size={40}/>
            </div>
            {/* left arrow*/}
            <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={()=>{nextSlide()}} size={40}/>
            </div>

            <div className='flex top-4 justify-center py-2'>
                {
                    slides.map((slide, slideIndex)=>{

                        return(
                            <div key={slideIndex} className='cursor-pointer' onClick={()=>{goToSlide(slideIndex)}}>
                                <RxDotFilled size={25}/>
                            </div>
                        )
                    })
                }
            </div>
    </div>

  )
}

export default Carousel