const userDataLinks = (props) => {
    return (
        <div className='flex justify-between mb-4'>
            <p>{props.title}</p>
            <p className='text-[#757071] underline'>{props.data}</p>
        </div>
    )
}

export default userDataLinks;