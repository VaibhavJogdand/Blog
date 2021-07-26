import React, { useContext, useState } from 'react';
import { MdNavigateNext,MdClose,MdArrowDropDown } from "react-icons/md";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './topbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Context } from '../../context/Context';


export default function Topbar() {
    const {user,dispatch} = useContext(Context);
    const [dropDown,setDropDown] = useState(false);
    const [mobile,setMobile] = useState(false);
    const PF = 'http://localhost:5000/images/'
    const handleLogout = ()=>{
        dispatch({type : 'LOGOUT'});
        
    }
     return (

        <div className='top'>
        {
            mobile ? ( <MdClose className='closeBtn' onClick={()=>setMobile(false)}/>):
            (<MenuIcon className='menuBtn' onClick={()=>setMobile(true)}/>)
        }
        
        <div className={mobile ? 'firstPartMo' : 'firstPart'}>
            <div className='topLeft'>
               <h6 className='topListItem' onClick={()=>setDropDown(!dropDown)}>CATEGORIES{mobile ? <MdNavigateNext className='navigateNextIcon'/> : <MdArrowDropDown className='expandIcon' />}</h6>
                          
                   
                   {dropDown && (
                           <ul className="ddmenu">
                            <li onClick={()=>{setDropDown(false); setMobile(false)}}><a className="dropdown-item" href='http://localhost:3000?cat=tech'>Tech</a></li>
                            <li onClick={()=>{setDropDown(false); setMobile(false)}}><a className="dropdown-item" href="http://localhost:3000?cat=music">Music</a></li>
                            <li onClick={()=>{setDropDown(false); setMobile(false)}}><a className="dropdown-item" href="http://localhost:3000?cat=sports">Sports</a></li>
                            <li onClick={()=>{setDropDown(false); setMobile(false)}}><a className="dropdown-item" href="http://localhost:3000?cat=programming">Programming</a></li>
                            <li onClick={()=>{setDropDown(false); setMobile(false)}}><a className="dropdown-item" href="http://localhost:3000?cat=philosophy">Philosophy</a></li>
                          </ul>
                   )}
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <Link className='link' to='/'><li onClick={()=>setMobile(false)} className="topListItem">HOME</li></Link>
                    <Link className='link' to='/about'><li onClick={()=>setMobile(false)} className="topListItem">ABOUT</li></Link>
                    <Link className='link' to='/contact'><li onClick={()=>setMobile(false)} className="topListItem">CONTACT</li></Link>
                    <Link className='link' to='/write'><li onClick={()=>setMobile(false)} className="topListItem">WRITE</li></Link>
                    <li onClick={()=>{
                    setMobile(false);
                    handleLogout()}} className="topListItem">{ user && 'LOGOUT'}</li>
                </ul>
            </div>
        </div>
            <div className='topRight'>
                {user ? 
                <Link className='link' onClick={()=>setMobile(false)} to='/setting'>
                {user.profilePic ? (<img className="topImg userLogo" src={(PF + user.profilePic)} alt='p'/>) :
                <AccountCircleIcon className='userLogo' fontSize='large'/>
                }
                </Link>
                
                    : 
                    <ul className='topList topRightList userLogo '>
                        <li className='topListItem topListItemRight'>
                        <Link className='link' to='/login'><span onClick={()=>setMobile(false)}>Login</span></Link>
                        </li>
                        <li className='topListItem topListItemRight'>
                        <Link className='link' to='/register'><span onClick={()=>setMobile(false)}>Register</span></Link>
                        </li>
                    </ul>   
                }
            </div>
        </div>


    )
}
