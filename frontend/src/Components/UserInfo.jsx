import { FiUser, FiTarget, FiBook, FiHeart } from "react-icons/all.js";
import ProfileLink from "./ProfileLink.jsx";
import { Link } from "react-router-dom";
import PersonalData from "./PersonalData.jsx";

const links = [
    {icon: <FiUser fontSize='1.5rem' />, link: 'Datos personales', route: 'datos'},
    {icon: <FiTarget fontSize='1.5rem' />, link: 'Objetivos de lectura', route: 'objetivos'},
    {icon: <FiBook fontSize='1.5rem' />, link: 'Libros leídos', route: 'leidos'},
    {icon: <FiHeart fontSize='1.5rem' />, link: 'Mis favoritos', route: 'favoritos'}
]

const UserInfo = (props) => {
    return (
        <>
            <div className='px-5 py-10 flex flex-col gap-5'>
                <h1 className='text-center font-semibold text-3xl'>¡Hola {props.name}!</h1>
                <div className='h-[110px] w-[110px] rounded-full mx-auto bg-slate-200 relative'>
                    {/*<div className='rounded-full bg-slate-300 inline-block p-2 absolute bottom-1 right-1'><BsPencil /></div>*/}
                    {/*<img src={'/image'} alt={'user profile picture'} width={110} height={110} />*/}
                </div>
                <div>
                    {links.map((link, id) => {
                        return(
                            <Link to={`/perfil/${link.route}`} key={id}>
                                <ProfileLink icon={link.icon} link={link.link} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default UserInfo;