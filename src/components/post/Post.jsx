import './post.css'
import {Link} from 'react-router-dom'

export default function Post({post}) {
    const PF = 'http://localhost:5000/images/'
    return (
        
        <div className='post'>
            {post.img && <img className='postImg' src={PF + post.img} alt='POST'/>}
            <div className='postInfo'>
                {/* <div className='postCats'>
                    {post.categories.map((c)=>(
                        <span className='postCat'>c.name</span>   
                    ))}
                </div> */}
                <Link className='link' to={`/post/${post._id}`}><span className='postTitle'>{post.title}</span></Link>
                <span className='postDate'>{new Date(post.updatedAt).toDateString()}</span>
            </div>
            <p className='postDisc'>{post.desc}</p>
        </div>
    )
}
