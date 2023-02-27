import "../index.css";


const CategoriesBtn = (props) => {
    return (
        <div className='flex justify-center items-center text-center py-10 rounded-md bg-color-acento border-b-4 border-indigo-500'>
            {props.title}
        </div>
    )
}

export default CategoriesBtn;