const Book = (props) => {
    return (
        <div className='flex flex-col'>
            <div className='w-[150px] h-[205px] bg-slate-400 mb-4'></div>
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold'>{ props.title }</h3>
                <p className='text-sm'>{ props.author }</p>
                <p className='text-sm font-medium'>$ { props.price }</p>
            </div>
        </div>
    )
}

export default Book;