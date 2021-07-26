import './singlePost.css'
import {  } from "../../components/sidebar/Sidebar";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {useContext, useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";



export default function SinglePost() {
    const {user} = useContext(Context);
    const location = useLocation();
    const path = (location.pathname.split('/')[2]);
    const [post , setPost] = useState({});
    const [updateMode , setUpdateMode] = useState('');
    const PF = 'https://blog-backend28.herokuapp.com/images/'
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();



    useEffect(()=>{
        const getPost = async ()=>{
            let post = await axios.get('/posts/' + path);
            setPost(post.data);
            setTitle(post.data.title);
            setDesc(post.data.desc);
        };
        getPost();
    },[path]);

    const handleDelete = async()=>{
        try{
            const res = await axios.delete('/posts/' + post._id);
            res.data && window.location.replace('/home');
        }catch(error){
        }
    }

    const handleUpdate = async()=>{
        try {
            const res = await axios.put('/posts/' + post._id,{username: user.username,title:title,desc:desc});
            // window.location.reload();
            setUpdateMode(false);
        } catch (error) {
            
        }
    }

   
    return (
        <div className="singlePost">
            <div className='singlePostWrapper'>
            {post.img && <img className='singlePostImg' src={PF + post.img} alt='img'></img>}
            {updateMode ? 
            <input type='text'  className='singlePostTitleInput' value={title} onChange={(e)=>setTitle(e.target.value)} /> : (
            <h1 className='singlePostTitle'>
                {title}
                {user && ((post.username === user.username) &&
                 <div className="Icons">
                    <span className='edit' onClick={()=>{setUpdateMode(true)}}><AiFillEdit /></span>
                    <span className='delete' onClick={handleDelete}><MdDelete /></span>
                </div>)}
            </h1>
            )}
            <div className='singlePostInfo'>
                <span className='author'>author : <Link className='link' to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
                <span className='author'>{new Date(post.updatedAt).toDateString()}</span>
            </div>
            {updateMode ? (
                <>
                <div className='grow-wrapEdit'>
                    <textarea type='text' value={desc} onChange={(e)=>setDesc(e.target.value) } onFocus={(e)=>e.target.parentNode.dataset.replicatedValue = desc} autoFocus/>
                </div>
                <button type='submit' className='updatePostBtn btn btn-outline-success' onClick={handleUpdate}>Update</button>
                </>
             ) : 
                <p className='singlePostDesc'>{desc}</p> 
            }   
            </div>        
        </div>
    )
}
