import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact-form.styles.scss';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w1kc7vh', 'template_ba69lul', form.current, 'MHaBSy1YgshyohH0p')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return (
        <form ref={form} onSubmit={sendEmail} id='contact-form'>
            <div className='form-inputs'>
                <input type='text' placeholder='Name' name='user_name' />
                <input type='email' placeholder='Email' name='user_email' />
            </div>
            <input type='subject' placeholder='Subject' name='subject' />
            <textarea name="message" placeholder='Write your message...' />
            <button type='submit' value='Send' class="testing contact-btn" title="Send message">Send message</button>
        </form>
    )
}

export default ContactForm;