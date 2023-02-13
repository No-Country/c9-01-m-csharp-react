import BookCarouselHeading from "./BookCarouselHeading.jsx";
import BookCarousel from "./BookCarousel.jsx";

const BookCarouselSection = (props) => {
    return (
        <div className='py-8 px-5'>
            <BookCarouselHeading name={props.name} />
            <BookCarousel />
        </div>
    )
}

export default BookCarouselSection;