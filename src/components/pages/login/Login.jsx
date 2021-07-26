import './login.css'
import {Link} from 'react-router-dom'
import { useContext, useRef, useState } from 'react'
import { Context } from '../../../context/Context';
import axios from 'axios';

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch} = useContext(Context);
    const [msg,setMsg] = useState(null);

    const handleSubmit = async (e) => {
        setMsg(null);
        e.preventDefault();
        dispatch({type:'LOGIN_START'});
        try {
            const res = await axios.post('/auth/login',{
                username: userRef.current.value,
                password: passwordRef.current.value
            });
            (res.status === 203) && setMsg(res.data);
            (res.status === 200) && dispatch({type:'LOGIN_SUCCESS',payload:res.data});
            
        } catch (error) {
            alert('errr')
            dispatch({type:'LOGIN_FAILURE'});
            setMsg('Please Try Again');
        }
    }

    return (
        <div className='login'>
            <div className='loginWrapper'>
                <h1 className='loginTitle'>Login</h1>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type='text' className='input' placeholder='Enter your username' ref={userRef} autoFocus></input>
                    <label>Password</label>
                    <input type='password' className='input' placeholder='Enter Password' ref={passwordRef}></input>
                    <button type='submit' className='loginBtn Btn'>Login</button>
                </form>
            </div> 
            <Link to='/register'><button type='submit' className='loginRegiBtn Btn'>Register</button></Link>       
            {msg && <span className='msg'>{msg}</span> }
        </div>
    )
}
