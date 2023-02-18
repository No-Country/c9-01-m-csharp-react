import React, { useState } from 'react'

const Login = ({imagenes}) => {
    const [currenImage, setcurrenImage] = useState(0)
    const cantidad = imagenes?.length

if(!Array.isArray(imagenes)|| cantidad === 0){
    return;
}
const nextImage = ()=>{
     setcurrenImage(currenImage == cantidad -1 ? 0 : currenImage + 1)
     return;
}
const backImage = ()=>{
    setcurrenImage(currenImage == 0 ? cantidad - 1 : currenImage - 1)
    return;
}

    return (
        <div className='m-5 flex ... gap-2 h-120 w-80 mx-auto  w-full h-full'>
           
            <button onClick={backImage}>«</button>
           
            {
                imagenes?.map((imagen,index)=>{
                    return(
                        <div className='bg-black-900 h-100 w-70 bg-cover'>{currenImage == index &&(
                            <img className='rounded-2xl shadow-indigo-500/50' key={index} src={imagen} alt="imagen"/>
                            )}
                        </div> 
                    )
                    
                })
            }
            
            <button className='text-lg' onClick={nextImage}>»</button>
        </div>

    )
}

export default Login