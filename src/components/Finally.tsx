import './styles/finally.css';
import { motion } from 'framer-motion';
import { fadeIn } from './variants/fadeIn';

const Finally = () => {
  return (
    <>
      <div className="finally">
        <motion.p
          variants={fadeIn('right', 1, 'spring', 0.7)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
          className="finally-text"
        >
          このポートフォリオは以下の内容で構成されています
        </motion.p>
        <motion.p
          variants={fadeIn('right', 1, 'spring', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
          className="finally-text"
        >
          Vite React TypeScript
        </motion.p>
        <motion.p
          variants={fadeIn('right', 1, 'spring', 0.9)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
          className="finally-text"
        >
          react-icons framer-motion react-modal body-scroll-lock.js
          <br />
          最後までご覧いただきありがとうございます
        </motion.p>
      </div>
    </>
  );
};

export default Finally;
