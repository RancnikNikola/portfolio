
import ImageGrid from '../../components/image-grid/image-grid.component';
import { motion } from 'framer-motion';
import './projects.styles.scss';

const Projects = () => {


    return (
        <div className='projects-container' id='projects'>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: false, amount: 1 }} className='projects-title-container'>
                <h1>projects</h1>
                <p>portfolio</p>
            </motion.div>
            <div className='projects'>
                <ImageGrid />
            </div>
        </div>
    )
}

export default Projects;