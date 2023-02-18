import React from 'react'

const Carousel = () => {

    const slides =[

        {
            url: "https://plus.unsplash.com/premium_photo-1663127315725-3049fe3ec30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1123&q=80"
        },
        {
            url:"https://images.unsplash.com/photo-1491566102020-21838225c3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80"
        },

        {
            url:"https://images.unsplash.com/photo-1520629716099-d147346eb224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
        },
        {
            url:"https://images.unsplash.com/photo-1465848059293-208e11dfea17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        }
    ]

  return (
    

    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative bg-black'>
        <div style={{backgroundImage: `url(${slideeee})}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

        </div>
    </div>

  )
}

export default Carousel