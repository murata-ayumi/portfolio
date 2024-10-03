import { BiLogoCss3, BiLogoTailwindCss } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { IoLogoHtml5 } from 'react-icons/io5';
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb';
import './styles/skills.css';
import { motion } from 'framer-motion';
import { fadeIn } from './variants/fadeIn';

const Skills = () => {
  return (
    <>
      <section id="skills">
        <motion.h2
          variants={fadeIn('right', 1, 'spring', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
          className="skill-text"
        >
          Skills
        </motion.h2>
        <motion.div
          variants={fadeIn('right', 1, 'spring', 0.7)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
          className="fieldset-area"
        >
          <fieldset>
            <legend>Html</legend>
            <IoLogoHtml5 className="skills-icon" />
          </fieldset>
          <fieldset>
            <legend>Css</legend>
            <BiLogoCss3 className="skills-icon" />
          </fieldset>
          <fieldset>
            <legend>TailWind</legend>
            <BiLogoTailwindCss className="skills-icon" />
          </fieldset>
          <fieldset>
            <legend>JavaScript</legend>
            <TbBrandJavascript className="skills-icon" />
          </fieldset>
          <fieldset>
            <legend>React</legend>
            <FaReact className="skills-icon" />
          </fieldset>
          <fieldset>
            <legend>TypeScript</legend>
            <TbBrandTypescript className="skills-icon" />
          </fieldset>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
