import Header from "./Header.jsx";
import GoBack from "./GoBack.jsx";
import Button from "./Button.jsx";
import UserDataLinks from "./UserDataLinks.jsx";
import { BsPencil } from "react-icons/all.js";

const userData = [
    {title: 'Nombre', data: 'Federico'},
    {title: 'Apellido', data: 'Cañas'},
    {title: 'Correo electrónico', data: 'fede@gmail.com'},
    {title: 'Dirección', data: 'Av. Estrella 555'},
    {title: 'Teléfono', data: '(011) 51451712'},
    {title: 'Información de pago', data: 'VISA **4455'},
]

const PersonalData = () => {
    return (
        <>
            <Header />
            <GoBack />
            <div className='px-5 my-10'>
                <div className='h-[110px] w-[110px] rounded-full mx-auto bg-slate-200 relative mb-12'>
                    <div className='rounded-full bg-slate-300 inline-block p-2 absolute bottom-1 right-1'><BsPencil /></div>
                    {/*<img src={'/image'} alt={'user profile picture'} width={110} height={110} />*/}
                </div>
                {userData.map((user, id) => {
                    return <UserDataLinks title={user.title} data={user.data} key={id} />
                })}
            </div>
            <Button text='Editar perfil' />
        </>
    )
}

export default PersonalData;