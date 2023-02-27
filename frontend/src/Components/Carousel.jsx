import React, { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";


const Carousel = () => {

    

    const slides =[

        {
            url: "https://pictures.abebooks.com/isbn/9789707802971-us-300.jpg"
        },
        {
            url:"https://www.gonvill.com.mx/imagenes/9786078/978607828006.JPG"
        },

        {
            url:"https://m.media-amazon.com/images/I/814IIJO+zmL.jpg"
        },
        {
            url:"https://m.media-amazon.com/images/I/51k7FEElQVL.jpg"
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
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}  className='w-full h-full bg-center bg-cover duration-500'>
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