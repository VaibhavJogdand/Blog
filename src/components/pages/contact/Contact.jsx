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
                <a className='link' href='https://www.facebook.com/profile.php?id=100069564483710' target='_blank' rel="noopener noreferrer"><FaFacebookSquare className="socialIcon"/></a>
                <a className='link' href='https://twitter.com/OmGodham' target='_blank' rel="noopener noreferrer"><FaTwitterSquare className="socialIcon"/></a>
                <a className='link' href='https://www.linkedin.com/in/omkar-godham-5543b1214/' target='_blank' rel="noopener noreferrer"><FaLinkedin className="socialIcon"/></a>
                <a className='link' href='https://www.instagram.com/gamerboy_omkar/' target='_blank' rel="noopener noreferrer"><FaInstagram className="socialIcon"/></a>
            </div>
        </div>
    )
}