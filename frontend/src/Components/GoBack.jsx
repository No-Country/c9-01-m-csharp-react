import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/all.js";

const GoBack = () => {
  return (
      <>
          <Link to={-1} className='flex items-center gap-2 mx-5 py-5'>
              <FiArrowLeft /> Volver al perfil
          </Link>
      </>
  );
}

export default GoBack;