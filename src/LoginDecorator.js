import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function LoginDecorator(props){
    const {Component} = props
    const navigate = useNavigate()
    useEffect(()=>{
        let auth = localStorage.getItem('token')
        if(!auth){
            navigate('/')
        }
    })
    return(
        <div>
            <Component/>
        </div>
    )
}

export default LoginDecorator