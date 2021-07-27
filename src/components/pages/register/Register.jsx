import './register.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from '../../../axios';

export default function Register() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [iserror,setIserror] = useState(null);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIserror(null);
        try{
            const res = await axios.post('/auth/register',{
            username:username,
            email:email,
            password:password
            });
            setIserror(res.data);
            (res.status === 200) && (window.location.replace('/login'));
        }catch (err) {
            setIserror('Please Try Again');
        }
    }
 
    return (
        <div className='register'>
            <div className='registerWrapper'>
                <h1 className='regiTitle'>Register</h1>
                <form className='registerForm' onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type='text' className='regiInput' placeholder='Enter your username' onChange={e=>setUsername(e.target.value)} autoFocus></input>
                    <label>Email</label>
                    <input type='email' className='regiInput' placeholder='Enter your email' onChange={e=>setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' className='regiInput' placeholder='Enter Password' onChange={e=>setPassword(e.target.value)}></input>
                    <button type='submit' className='registerBtn Btn'>Register</button>
                </form>
            </div> 
            <Link to='/login' className='link'><button type='submit' className='regiLoginBtn Btn'>Login</button></Link>  
            {iserror && (<span className='msg'>{iserror}</span>)}
        </div>
    )
}
