import CategoriesBtn from "./CategoriesBtn.jsx";

const Categories = () => {
    return (
        <div className='grid grid-cols-2 gap-5 px-5'>
            {categories.map((category, id) => {
                return <CategoriesBtn title={category} key={id} />
            })}
        </div>
    )
}

const categories = ['Arte', 'Autoayuda', 'Ciencia ficción', 'Diseño', 'Historia', 'Tecnología', 'Literatura', 'Novela', 'Psicología']

export default Categories;