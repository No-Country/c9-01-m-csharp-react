import { Link } from "react-router-dom";
import CategoriesBtn from "./CategoriesBtn.jsx";

const Categories = () => {
    return (
        <>
            <h2 className="text-xl px-5 my-5" style={{fontSize:"2.5rem"}}>Biblioteca</h2>
            <p className="px-5 my-5">Encontrarás el genero que estás buscando</p>
            <div className='grid grid-cols-2 gap-5 px-5'>
            {categories.map((category, id) => {
                return (
                    <Link to={`/library/${category}`}>
                        <CategoriesBtn title={category} key={id} />
                    </Link>
                )
            })}
            </div>
        </>
        
    )
}

const categories = ['Arte', 'Autoayuda', 'Ciencia ficción', 'Diseño', 'Historia', 'Tecnología', 'Literatura', 'Novela', 'Psicología']

export default Categories;