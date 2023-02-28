import { useRef, useState, useEffect } from "react";
import Book from "./Book.jsx";
import { motion } from "framer-motion";
import autoayuda from "../DB/autoAyuda.js";


const BookCarousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className='overflow-hidden' ref={carousel}> {/* Outer carousel */}
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='flex gap-x-5'> {/* Inner carousel */}
                {autoayuda.map((book, id) => {
                    return <Book title={book.title} author={book.author} price={book.price} key={id} photoUrl={book.photoUrl} />
                })}
            </motion.div>
        </div>
    )
}

const booksList = [
    {title: 'Atomic Habits', author: 'James Clear', price: 9.99},
    {title: 'Meditations', author: 'Marcus Aurelius', price: 12.99},
    {title: '12 Rules for Life', author: 'Jordan B. Peterson', price: 15.99},
    {title: 'A Brief History of Time', author: 'Stephen Hawking', price: 14.99},
]

export default BookCarousel;