

const Book = (props) => {

    return (
        <div className='flex flex-col'>
            <div className='w-[150px] h-[205px] bg-slate-400 mb-4'>
                <img src={props.photoUrl} alt="libro" />
            </div>
            <div className='flex flex-col gap-1 mt-4'>
                
                <p className='text-sm'>{ props.author }</p>
                <p className='text-sm font-medium'>$ { props.price }</p>
            </div>
        </div>
    )
}

export default Book;