import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

const Login = () => {
// data el  donde viene el password y correo con lo que hace login 

const {handleSubmit, register, reset} = useForm()

const submit = data =>{
    const  URL  = 'aca va la url de donde se hace el login del backend'
    axios.post(URL, data)
        .then(res=> {
            localStorage.setItem('token', res.data.data.token)
        })
        .catch(err => console.log(err))
        reset({
            email: "",
            password: ""
        })

    }



    return (
        <div >
          <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor='email'>email</label>
                <imput type='text' id='email'{...register("email")}/>
            </div>
            <div>
                <label htmlFor='password'>email</label>
                <imput type='password' id='password'{...register("password")}/>
            </div>
            <button>Login</button>
          </form>     
        </div>

    )
}

export default Login