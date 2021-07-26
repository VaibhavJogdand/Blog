import './sidebar.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Context } from '../../context/Context';


export default function Sidebar() {

    const PF = 'https://blog-backend28.herokuapp.com/images/'
    const [cats,setCats] = useState([]);
    const {user} = useContext(Context);

    useEffect(()=>{
        const getCats = async ()=>{
            const cat = await axios.get('/category/');
            setCats(cat.data);
        }
        getCats();
    },[]);

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <h1 className='sidebarTitle'>ABOUT ME</h1>
                <img className='sidebarImg' src={PF + user.profilePic} />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                  {cats.map((c)=>(
                    <Link className='link' to={`/?cat=${c.name}`}><li className='sidebarListItem'>{c.name}</li></Link>
                  ))}
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW ME</span>
                <div className='sidebarSocial'>
                    <FacebookIcon className="sidebarIcon"/>
                    <TwitterIcon className="sidebarIcon"/>
                    <PinterestIcon className="sidebarIcon"/>
                    <InstagramIcon className="sidebarIcon"/>
                </div>
            </div>
        </div>
    )
}
