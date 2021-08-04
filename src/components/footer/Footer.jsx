import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function footer(){
    

    return(
        <>

        <div className='footer'>
            <h1 className='footerTitle'>Follow Us</h1>
            <div className='footerSocial'>
                <a className='link' href='https://www.facebook.com/profile.php?id=100069564483710' target='_blank' rel="noopener noreferrer"><FaFacebookSquare className="footerIcon" /></a>
                <a className='link' href='https://twitter.com/OmGodham' target='_blank' rel="noopener noreferrer"><FaTwitterSquare className="footerIcon"/></a>
                <a className='link' href='https://www.linkedin.com/in/omkar-godham-5543b1214/' target='_blank' rel="noopener noreferrer"><FaLinkedin className="footerIcon"/></a>
                <a className='link' href='https://www.instagram.com/gamerboy_omkar/' target='_blank' rel="noopener noreferrer"><FaInstagram className="footerIcon"/></a>
            </div>

            <div className='copyWrite'>
                <span className='copyWriteText'>© 2021 Omkar Godham</span>
            </div>
        </div>

        </>
    )

}