import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.styles.scss';

const Navbar = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const isNavbarOpen = () => {
        setIsOpen(true);
    }

    const closeNavbar = () => {
        setIsOpen(false);
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
        <div className='container'>
            <header>
                <div className='menu' onClick={isNavbarOpen}>
                    <i className='fa fa-bars'>x</i>
                </div>
            </header>
            <AnimatePresence>
            {
                isOpen && (
                    <motion.div className='menu-container'
                    variants={item}
                    initial={{ height: 0, opacity: 0}}
                    animate={{ height: '100vh', opacity: 1}}
                    transition={{ duration: .3 }}
                    exit='exit'>
                        <div className='btn-close' onClick={closeNavbar}>X</div>
                        <motion.a
                         initial={{ y: 90, opacity: 0}}
                         animate={{ y: 0, opacity: 1}}
                         transition={{ duration: .4 }}
                         exit={{
                            opacity: 0,
                            y: 90,
                            transition: {
                                ease: 'easeInOut',
                                delay: 1
                            }
                         }} href='#'>Home</motion.a>
                        <motion.a
                        initial={{ y: 90, opacity: 0}}
                        animate={{ y: 0, opacity: 1}}
                        transition={{ duration: .4 }}
                        exit={{
                           opacity: 0,
                           y: 90,
                           transition: {
                               ease: 'easeInOut',
                               delay: .6
                           }
                        }}
                         href='#'>About</motion.a>
                        <motion.a
                         initial={{ y: 90, opacity: 0}}
                         animate={{ y: 0, opacity: 1}}
                         transition={{ duration: .4 }}
                         exit={{
                            opacity: 0,
                            y: 90,
                            transition: {
                                ease: 'easeInOut',
                                delay: .4
                            }
                         }}
                          href='#'>Portfolio</motion.a>
                        <motion.a 
                         initial={{ y: 90, opacity: 0}}
                         animate={{ y: 0, opacity: 1}}
                         transition={{ duration: .4 }}
                         exit={{
                            opacity: 0,
                            y: 90,
                            transition: {
                                ease: 'easeInOut',
                                delay: .2
                            }
                         }}href='#'>Blog</motion.a>
                    </motion.div>
                )
            }
            </AnimatePresence>
            <div className='content-wrapper'>

            </div>
        </div>
    )
}

export default Navbar;