import {BsPencil} from "react-icons/all.js";

const UserInfo = (props) => {
    return (
        <div className='px-5 py-10 flex flex-col gap-5'>
            <h1 className='text-center font-semibold text-3xl'>¡Hola {props.name}!</h1>
            <div className='h-[110px] w-[110px] rounded-full mx-auto bg-slate-200 relative'>
                <div className='rounded-full bg-slate-300 inline-block p-2 absolute bottom-1 right-1'><BsPencil /></div>
                {/*<img src={'/image'} alt={'user profile picture'} width={110} height={110} />*/}
            </div>
        </div>
    )
}

export default UserInfo;