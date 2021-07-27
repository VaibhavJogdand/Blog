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
                <a className='link' href='https://www.facebook.com/profile.php?id=100008846442286' target='_blank' rel="noopener noreferrer"><FaFacebookSquare className="footerIcon" /></a>
                <a className='link' href='https://twitter.com/vrjogdand708' target='_blank' rel="noopener noreferrer"><FaTwitterSquare className="footerIcon"/></a>
                <a className='link' href='https://www.linkedin.com/in/vaibhav-jogdand-8356601b1/' target='_blank' rel="noopener noreferrer"><FaLinkedin className="footerIcon"/></a>
                <a className='link' href='https://www.instagram.com/i.am__vaibhav__/' target='_blank' rel="noopener noreferrer"><FaInstagram className="footerIcon"/></a>
            </div>

            <div className='copyWrite'>
                <span className='copyWriteText'>© 2021 Vaibhav Jogdand</span>
            </div>
        </div>

        </>
    )

}