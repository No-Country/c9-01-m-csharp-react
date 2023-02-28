const Button = (props) => {
    return (
        <div onClick={() => console.log('btn')} className='bg-accent rounded-full flex items-center justify-center py-2 mx-5'>
            {props.text}
        </div>
    )
}

export default Button;