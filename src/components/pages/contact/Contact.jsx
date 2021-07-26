import './contact.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com';

export default function Contact(){

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_gqflxwn', 'template_idj3kth', e.target, 'user_JnJefJ7Ms8U6JlBXnuhQY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
    }

    return(
        <div className='contact'>
            <div className='contactWrapper'>
            <h3 className='contactTitle'>Get in touch with us</h3>
                <form className='contactForm' onSubmit={(e)=>sendEmail(e)}>
                    <div className='inputWrapper'>
                        <input className='contactInput' type='text' placeholder='Your Name' name='name' autoFocus></input>
                        <input className='contactInput' type='email' placeholder='Your Email' name='email'></input>
                    </div>
                    <textarea className='contactTextArea' type='text' placeholder='Your Message' name='message'></textarea>
                    <button type="submit" class="contactSubmit btn btn-outline-secondary">Get in touch</button>
                </form>
            </div>
            <div className='social'>
                <a className='link' href='https://www.facebook.com/profile.php?id=100008846442286' target='_blank'><FaFacebookSquare className="socialIcon"/></a>
                <a className='link' href='https://twitter.com/vrjogdand708' target='_blank'><FaTwitterSquare className="socialIcon"/></a>
                <a className='link' href='https://www.linkedin.com/in/vaibhav-jogdand-8356601b1/' target='_blank'><FaLinkedin className="socialIcon"/></a>
                <a className='link' href='https://www.instagram.com/i.am__vaibhav__/' target='_blank'><FaInstagram className="socialIcon"/></a>
            </div>
        </div>
    )
}