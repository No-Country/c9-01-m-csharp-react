import { FiChevronRight } from "react-icons/all.js";

const ProfileLink = (props) => {
    return (
        <div className='border-b border-neutral-400 px-3 py-4 flex items-center justify-between'>
            <div className='flex gap-2.5'>
                { props.icon }
                <p>{ props.link }</p>
            </div>
            <FiChevronRight fontSize='1.5rem' />
        </div>
    )
}

export default ProfileLink;