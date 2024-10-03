import './styles/hero.css';
import heroImage from '../assets/hero-image.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from './variants/fadeIn';

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        variants={fadeIn('left', 1, 'tween', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="text-container"
      >
        <h1 className="hero-text">Murata</h1>
        <h1 className="hero-text">Design</h1>
        <h1 className="hero-text">Code.</h1>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 1, 'tween', 0.8)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="img-container"
      >
        <img src={heroImage} alt="hero-image" />
      </motion.div>
      <motion.div
        variants={fadeIn('right', 1, 'spring', 1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="scroll_down"
      >
        <a href="#">Scroll</a>
      </motion.div>
    </div>
  );
};
export default Hero;
