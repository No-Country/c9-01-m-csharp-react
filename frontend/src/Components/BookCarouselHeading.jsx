const bookCarouselHeading = (props) => {
    return (
        <div className='mb-5 flex justify-between items-center'>
            <h2 className='text-xl font-medium'>{props.name}</h2>
            <p className='text-sm'>Ver todos</p>
        </div>
    )
}

export default bookCarouselHeading;