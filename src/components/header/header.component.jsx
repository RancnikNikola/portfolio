import GlitchText from '../glitch-text/glitch-text.component';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './header.styles.scss';


const Header = () => {

    return (
        <div className='header'>
            <motion.div className='header-info' transition={{staggerChildren: 0.5}}>
                <motion.span initial={{y: -200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, delay: 1}}>Hi there! I'm</motion.span>
                <motion.div initial={{x: -500, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 1, delay: 1.5}}>
                    <GlitchText text='Nikola' />
                    <GlitchText text='Rančnik' />
                </motion.div>
                <motion.span initial={{y: 200, opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 1, delay: 2}}>Frontend web developer &amp; web designer</motion.span>
            </motion.div>
            <div className='header-content'>
                <div className='header-icons'>
                    <span><Link to='https://www.linkedin.com/in/nikola-rančnik-2b1257132/' target='_blank'><FaLinkedinIn /></Link></span>
                    <span><Link to='https://github.com/RancnikNikola?tab=repositories' target='_blank'><FaGithub /></Link></span>
                </div>
            </div>
        </div>
    )
}

export default Header;