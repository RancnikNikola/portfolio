import { HashLink as Link } from 'react-router-hash-link';
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <h1 className='footer-title'>nr</h1>
            <ul className='footer-links'>
                <li><Link to="/" title='Home'>Home</Link></li>
                <li><Link to="#about" title='About'>About</Link></li>
                <li><Link to="#projects" title='Projects'>Projects</Link></li>
                <li><Link to="#contact" title='Contact'>Contact</Link></li>
            </ul>
            <div className='footer-icons'>

            </div>
        </div>
    )
}

export default Footer;