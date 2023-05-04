
import { useState } from "react";
import { motion } from 'framer-motion';
import './flip-card.styles.scss';

const FlipCard = ({ frontImage, backImage, githubRepo, liveSite, title, technologies}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} transition={{ staggerChildren: 1, duration: 1 }} className={`flip-card${isFlipped ? ' is-flipped' : ''}`} onMouseEnter={() => {setIsFlipped(!isFlipped)}} onMouseLeave={() => {setIsFlipped(!isFlipped)}}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImage} alt="Front" />
        </div>
        <div className="flip-card-back">
          <h4>{title}</h4>
          <span>Github: <a href={githubRepo}>{title}</a></span>
          <span>Live site: <a href={liveSite}>{title}</a></span>
          <span>Technologies:</span>
          <div className="technologies">
          {
            technologies.map((tech) => (
              <div className="technology-item"><span>{tech}</span></div>
            ))
          }
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default FlipCard;
