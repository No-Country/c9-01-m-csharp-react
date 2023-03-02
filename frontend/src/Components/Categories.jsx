import { Link } from "react-router-dom";
import CategoriesBtn from "./CategoriesBtn.jsx";

const Categories = () => {
    return (
        <>
            <h2 className="font-medium text-3xl px-5 my-5">Biblioteca</h2>
            <p className="px-5 my-5">Encontrarás el genero que estás buscando</p>
            <div className='mb-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 px-5 md:px-[5rem]'>
            {categories.map((category, id) => {
                return (
                    <Link to={`/library/${category}`} key={id}>
                        <CategoriesBtn title={category} />
                    </Link>
                )
            })}
            </div>
        </>
        
    )
}

const categories = ['Arte y Diseño', 'Autoayuda', 'Ciencia ficción', 'Diseño', 'Historia', 'Tecnología', 'Literatura', 'Novela', 'Psicología']

export default Categories;