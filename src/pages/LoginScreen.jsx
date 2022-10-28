import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/loginScreen.css'

const LoginScreen = () => {

    const { handleSubmit, register, reset } = useForm()
    const [isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate()

    const submit = (data) => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`
        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
    if(localStorage.getItem('token')){
        setIsLogged(true)
    }else{
        setIsLogged(false)
    }
    }, [])
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }

if(isLogged) {
    navigate('/')
return (

    <div className='formGroup'>
        <h2 className='formTitle'>User Logged.</h2>
        <button className='formSubmit' onClick={handleLogout}>Logout</button>
    </div>
)

}
    return (
        <div className='formBox'>
            <form className="form" onSubmit={handleSubmit(submit)} >
            <h2 className='formTitle'>Log In</h2>
                <div className='formGroup'>
                    <input type="email" id='email' className='formInput' placeholder=' '{...register('email')} />
                    <label htmlFor="email" className='formLabel'>Email</label>
                    <span className='formLine'></span>
                </div>
                <div className='formGroup'>
                    <input type="password" id='password' className='formInput' placeholder=' ' {...register('password')} />
                    <label htmlFor="password" className='formLabel'>Password</label>
                    <span className='formLine'></span>
                </div>
                <input type="submit" className='formSubmit' value="Log in" />
            </form>
        </div>
    )
}

export default LoginScreen