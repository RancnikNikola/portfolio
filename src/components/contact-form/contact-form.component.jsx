import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../popup/popup.component';
import './contact-form.styles.scss';

const defaultFormFields = {
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
}

const ContactForm = () => {
    const form = useRef();
    const [ formFields, setFormFields ] = useState(defaultFormFields)
    const { user_name, user_email, subject, message } = formFields;
    const [showPopup, setShowPopup] = useState(false);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w1kc7vh', 'template_ba69lul', form.current, 'MHaBSy1YgshyohH0p')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          resetFormFields();
      };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value })
    }

    const handleClick = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
      }

    return (
        <form ref={form} onSubmit={sendEmail} id='contact-form'>
            <div className='form-inputs'>
                <input type='text' placeholder='Name' name='user_name' value={user_name} onChange={handleChange} required />
                <input type='email' placeholder='Email' name='user_email' value={user_email} onChange={handleChange} required />
            </div>
            <input type='subject' placeholder='Subject' name='subject' value={subject} onChange={handleChange} required />
            <textarea name="message" placeholder='Write your message...' value={message} onChange={handleChange} required />
            <button onClick={handleClick} type='submit' value='Send' class="testing contact-btn" title="Send message">Send message</button>

            {showPopup && <Popup message="Message successfully sent!" />}
        </form>
    )
}

export default ContactForm;