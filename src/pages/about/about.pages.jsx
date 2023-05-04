import { HashLink as Link } from 'react-router-hash-link';
import MyImage from '../../assets/images/me.png';
import HorizontalScrollableDiv from '../../components/skills-container/skills-container.component';
import GlitchButton from '../../components/glitch-button/glitch-button.component';
import { motion } from 'framer-motion';
import {
    FaReact,
    FaBootstrap,
    FaCss3,
    FaHtml5,
    FaJsSquare,
    FaLaravel,
    FaPhp,
    FaPython
} from 'react-icons/fa';
import pdf from '../../assets/files/Frontend-cv-hrv.pdf';
import './about.styles.scss';

const About = () => {
    
    return (
        <div className='about-container' id='about'>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: false, amount: 1 }} className='about-title-container'>
                    <h1>about</h1>
                    <p>who am i?</p>
            </motion.div>
            <div className='about-content'>
                <div className='about-content-image'>
                    <img src={MyImage} alt='profile picture' />
                </div>
                <div className='about-content-info'>
                    <motion.h3 initial={{ opacity: 0, x: 300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} viewport={{ once: false, amount: 0.1 }}>I am dynamic, creative and ready for new challenges!</motion.h3>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2.5 }} viewport={{ once: false, amount: 0.2 }}>
                    As a frontend web developer, I am skilled in creating the visual and interactive aspects of websites and web applications. 
                    I'm proficient in HTML, CSS, and JavaScript, and have a strong understanding of user experience design and responsive web development. 
                    I'm constantly learning and staying up-to-date with the latest trends and technologies in the field to create engaging and seamless user interfaces.
                    </motion.p>
                    <div className='about-buttons'>
                        {/* <button>download cv</button> */}
                        <a href={pdf} target="_blank" download="Frontend-cv-hrv.pdf">
                            <GlitchButton text='Download CV' />
                        </a>
                        <Link to='#contact-form'>
                            <GlitchButton text='Hire me' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='about-skills'>
                <HorizontalScrollableDiv>
                    <div className='scroll-item'>
                        <span><FaReact /></span>
                    </div>
                    <div className='scroll-item'>
                        <span><FaJsSquare /></span>
                    </div>
                    <div className='scroll-item'>
                        <span><FaHtml5 /></span>
                    </div>
                    <div className='scroll-item'>
                        <span><FaCss3 /></span>
                    </div>
                    <div className='scroll-item'>
                        <span><FaBootstrap /></span>
                    </div>
                    <div className='scroll-item'>
                        <span><FaPython /></span>
                    </div>
                    <div className='scroll-item'>
                        <span><FaPhp /></span>
                    </div>
                    <div className='scroll-item'>
                        <span><FaLaravel /></span>
                    </div>            
                </HorizontalScrollableDiv>
            </div>
        </div>
    )
}

export default About;