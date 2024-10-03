import './styles/about.css';
import NeonImage from '../assets/neon-robot.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from './variants/fadeIn';
import { Rotate } from './variants/rotate.tsx';

const About = () => {
  return (
    <>
      <section id="about">
        <motion.h2
          variants={fadeIn('right', 1, 'spring', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="about-text"
        >
          About Me
        </motion.h2>
        <div className="about-container">
          <motion.img
            variants={Rotate('right', 1, 'spring', 0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
            src={NeonImage}
            alt="neon-image"
            className="neon-image"
          />
          <div className="about-msg">
            <motion.p
              variants={fadeIn('right', 1, 'spring', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
            >
              浜松市在住のWEBコーダーです。物作りが好きで、特にコードを書くことに情熱を持っています。
            </motion.p>
            <motion.p
              variants={fadeIn('right', 1, 'spring', 0.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
            >
              私のコーディングの旅は、以前の職場での経験から始まりました。
              <br></br>
              会社で手書きで作成していた資料にミスが多く、そのミスを減らすためにExcel
              VBAを使って自動化を試みました。初めてのコードを書く体験は教本を片手に、分からないことは
              AI に助けを借りながら進めました。<br></br>
              その結果、作成したExcelファイルは大変喜ばれ、大きな達成感を得ました。
            </motion.p>
            <motion.p
              variants={fadeIn('right', 1, 'spring', 0.9)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
            >
              しかし、病気のために職を手放さなければならなくなり、再就職も難しい状況に陥りました。
              <br></br>
              そこで、持て余す時間を有効活用しようと考え、再びコードを書く楽しさを思い出しました。Udemyなどのオンライン教材を活用し、独学でコーディングの勉強を進めています。
            </motion.p>
            <motion.p
              variants={fadeIn('right', 1, 'spring', 1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
            >
              現在は、TypeScript、React、Git、GitHub、Viteなどの技術を使い、フロントエンドエンジニアとしてのスキルを磨いています。
            </motion.p>
            <motion.p
              variants={fadeIn('right', 1, 'spring', 1.1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
            >
              私の目標は、ユーザーにとって使いやすく、魅力的なウェブサイトやアプリケーションを作り続けることです。
              どうぞよろしくお願いいたします。
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
