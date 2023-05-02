import {useState} from 'react';
import {Link} from 'react-router-dom'
import { auth, provider } from "../config";
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { Button } from 'reactstrap';
const SignUpdiv = styled("div")`
    box-shadow: 0px 1px 30px #33a7ef ;
    border-radius: 10px;
    width: 360px;
    height: 423px;
    /* margin-right: 30px; */
    background: #FFFFFF;
    text-align: center;
    margin: 9rem auto;
`
const SignUpInput = styled("input")`
    margin: 20px auto;
    width: 300px;
    height: 40px;
    border: 1px solid #33a7ef ;
    font-size: 24px;
    text-align: center;
`
const Uph1 = styled("h1")`
    margin-top: 50px;
    color: #33a7ef ;
`
const Signbutton = styled("button")`
    background-color: white;
    box-shadow: 0px 1px 30px #33a7ef ;
    border: 0px;
    margin: 50px;
    height: 50px;
    font-size: 24px;
`
function SignUp({setIsAuth}){
    const [name,setName] = useState([])
    const [password,setPassword] = useState([])
    const HandleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.password.value);
        e.target.name.value = ""
        e.target.password.value = ""
    }
    let navigate = useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate('/')
        })
    }
   
    return ( <SignUpdiv>
        
        <form onSubmit={(e) => HandleSubmit(e)}>
        <Uph1>Login</Uph1>
        <SignUpInput id='name' value={name} onChange = {(e) => setName(e.target.value)} placeholder='email2023@gmail.com' required/>
        <SignUpInput id='password' value={password} onChange = {(e) => setPassword(e.target.value)} placeholder='Password' required/>
        
        <Link to={`/`}><Button color='primary'>Submit</Button></Link>
        </form>
        <Signbutton className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign In With Google
        </Signbutton>
    </SignUpdiv>
    )
    
    
}


export default SignUp