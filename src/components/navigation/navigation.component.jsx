import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './navigation.styles.scss';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const item = {
      exit: {
          opacity: 0,
          height: 0,
          transition: {
              ease: 'easeInOut',
              duration: 0.3,
              delay: .9
          }
      }
  }

  return (
    <nav>
      <AnimatePresence>
      {
        menuOpen && (
          <motion.ul variants={item}
          initial={{height:0,opacity:0}}
          animate={{height:"100vh", opacity:1}}
          transition={{duration:.5}}
          exit="exit"className={menuOpen ? 'active' : '' }>
            <motion.li  initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.8}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:1
                    }
                 }}><Link to="/" title='Home'>Home</Link></motion.li>
            <motion.li initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.7}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.8
                    }
                 }} ><Link to='#about' title='About'>About</Link></motion.li>
            <motion.li  initial={{ y: 90, opacity: 0}}
                         animate={{ y: 0, opacity: 1}}
                         transition={{ duration: .4 }}
                         exit={{
                            opacity: 0,
                            y: 90,
                            transition: {
                                ease: 'easeInOut',
                                delay: 1
                            }
                         }}  className='logo'>
                <Link to='/' title='NR'>NR</Link>
            </motion.li>
            <motion.li   initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.6}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.6
                    }
                 }} ><Link to="#projects" title='Projects'>Projects</Link></motion.li>
            <motion.li   initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.5}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.4
                    }
                 }}><Link to="#contact" title='Contact'>Contact</Link></motion.li>
        </motion.ul>
        )
      }
      </AnimatePresence>
      <ul>
        <li><Link to="/" title='Home'>Home</Link></li>
        <li><Link to='#about' title='About'>About</Link></li>
        <li className='logo'>
            <Link to='/' title='NR'>NR</Link>
        </li>
        <li><Link to="#projects" title='Projects'>Projects</Link></li>
        <li><Link to="#contact" title='Contact'>Contact</Link></li>
      </ul>
      <FaBars className="menu-icon" onClick={toggleMenu} />
      <Link className='mobile-logo' to='/'>NR</Link>
    </nav>
  );
}

export default NavigationBar;
