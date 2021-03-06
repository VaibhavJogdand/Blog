import './about.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function About(){
   
    return(

        <div className='about'>
            <div className='aboutWrapper'>
                
                <div className='title'>
                 <div className='line'></div>
                 <h1 className='aboutTitle'>Blog</h1>
                </div>
                <p className='aboutText'>This is a simple platform where you can share your thoughts & learn new things.</p>
            </div>
            <div className='aboutSocial'>
                <a className='link' href='https://www.facebook.com/profile.php?id=100069564483710' target='_blank' rel="noopener noreferrer"><FaFacebookSquare className="socialIcon"/></a>
                <a className='link' href='https://twitter.com/OmGodham' target='_blank' rel="noopener noreferrer"><FaTwitterSquare className="socialIcon"/></a>
                <a className='link' href='https://www.linkedin.com/in/omkar-godham-5543b1214/' target='_blank' rel="noopener noreferrer"><FaLinkedin className="socialIcon"/></a>
                <a className='link' href='https://www.instagram.com/gamerboy_omkar/' target='_blank' rel="noopener noreferrer"><FaInstagram className="socialIcon"/></a>
            </div>
        </div>

    )
}