import ContactForm from '../../components/contact-form/contact-form.component';
import { motion } from 'framer-motion';
import './contact.styles.scss';

const Contact = () => {
    return (
        <div className='contact-container' id='contact'>
           <motion.div className='contact-title-container' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: false, amount: 1 }}>
                    <h1>Contact</h1>
                    <p>get in touch.</p>
            </motion.div>
            <div className='contact-body'>
                <motion.div className='contact-info-wrapper' initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: false }}>
                <div className='contact-info'>
                    <div className='phone'>
                        <span>phone:</span>
                        <p>+38599 436 3332</p>
                    </div>
                    <div className='phone'>
                        <span>address:</span>
                        <p>ulica pavla perica 46</p>
                    </div>
                    <div className='phone'>
                        <span>email:</span>
                        <p>nikola_rancnik@yahoo.com</p>
                    </div>
                </div>
                </motion.div>
                <div className='c-form'>
                   <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact;