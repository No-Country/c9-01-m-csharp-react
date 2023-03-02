const Step = (props) => {
    return (
        <>
            {props.daysRead.map((day, id) => {
                return (
                    <div key={id}>
                        <div className={
                            day < '4'
                                ? `h-[30px] w-[30px] rounded-full bg-primary text-white flex items-center justify-center`
                                : `h-[30px] w-[30px] rounded-full bg-secondary flex items-center justify-center`
                        }>
                            {day < '4' ? props.icon : ''}
                        </div>
                        <span className='text-sm font-light'>Day {day}</span>
                    </div>
                )
            })}
        </>
    )
}

export default Step;