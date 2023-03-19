import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

function LoginDecorator(props){
    const {Component} = props
    const navigate = useNavigate()
    useEffect(()=>{
        let auth = localStorage.getItem('token')
        if(!auth){
            navigate('/')
            toast.warning('Login required to access business central')
        }
    })
    return(
        <div>
            <Component/>
        </div>
    )
}

export default LoginDecorator